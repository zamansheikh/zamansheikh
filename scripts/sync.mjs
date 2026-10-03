#!/usr/bin/env node
// Regenerates src/data/live.json from GitHub, pub.dev, npm and the Silifton blog.
// Runs at build time only; the site never calls these APIs at runtime.
// Usage: npm run sync   (needs `gh` authenticated, or GITHUB_TOKEN in the env)
// If a source fails, its previous value in live.json is kept and a warning is printed.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../src/data/live.json", import.meta.url));
const LOGIN = "zamansheikh";
const SINCE_YEAR = 2020; // keep in step with profile.githubSince
const PUB = ["bangla_pdf", "voxa_rtc_engine", "voxa_beauty", "voxa_deepar", "flutter_svga_easyplayer", "radial_chart_package"];
const NPM = ["bangla-pdf", "git-vanish", "oimage", "nukeport", "@zamansheikh/percentage-bar"];
const POSTS_API = "https://crmapi.silifton.com/api/content/posts";
const POST_URL = (id) => `https://silifton.com/blog/${id}`;
const POST_AUTHOR = "Zaman Sheikh";
const BROWSER_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const TIMEOUT_MS = 20_000;

const warn = (msg) => console.warn(`  ! ${msg}`);

function readPrevious() {
  const empty = {
    generatedAt: "1970-01-01T00:00:00Z",
    github: { login: LOGIN, publicRepos: 0, followers: 0, totalStars: 0, contributionsLastYear: 0, contributionsAllTime: 0, calendar: [], repos: [] },
    packages: [],
    posts: [],
  };
  try {
    return { ...empty, ...JSON.parse(readFileSync(OUT, "utf8")) };
  } catch {
    warn("could not read existing live.json; starting from empty");
    return empty;
  }
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { accept: "application/json", ...headers }, signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

// ---------- GitHub ----------

let ghAvailable;
function hasGh() {
  if (ghAvailable === undefined) {
    try {
      execFileSync("gh", ["auth", "status"], { stdio: "ignore" });
      ghAvailable = true;
    } catch {
      ghAvailable = false;
    }
  }
  return ghAvailable;
}

async function graphql(query, variables = {}) {
  let body;
  if (hasGh()) {
    const args = ["api", "graphql", "-f", `query=${query}`];
    for (const [k, v] of Object.entries(variables)) args.push(typeof v === "string" ? "-f" : "-F", `${k}=${v}`);
    body = JSON.parse(execFileSync("gh", args, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024, timeout: 60_000 }));
  } else {
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
    if (!token) throw new Error("neither an authenticated `gh` nor GITHUB_TOKEN is available");
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { authorization: `bearer ${token}`, "content-type": "application/json", "user-agent": "zamansheikh.com-sync" },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) throw new Error(`GitHub GraphQL HTTP ${res.status}`);
    body = await res.json();
  }
  if (body.errors?.length) throw new Error(body.errors.map((e) => e.message).join("; "));
  return body.data;
}

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

async function fetchGithub() {
  const profile = await graphql(
    `query($login: String!) {
      user(login: $login) {
        login
        followers { totalCount }
        repositories(ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks { contributionDays { date contributionCount contributionLevel } }
          }
        }
      }
    }`,
    { login: LOGIN },
  );
  const user = profile.user;
  if (!user) throw new Error(`user ${LOGIN} not found`);

  // All owned public non-fork repos, paginated.
  const repos = [];
  let cursor = null;
  do {
    const page = await graphql(
      `query($login: String!, $cursor: String) {
        user(login: $login) {
          repositories(first: 100, after: $cursor, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
            pageInfo { hasNextPage endCursor }
            nodes { name description url stargazerCount pushedAt primaryLanguage { name } }
          }
        }
      }`,
      cursor ? { login: LOGIN, cursor } : { login: LOGIN },
    );
    const conn = page.user.repositories;
    repos.push(...conn.nodes);
    cursor = conn.pageInfo.hasNextPage ? conn.pageInfo.endCursor : null;
  } while (cursor);

  // All-time contributions: one query per calendar year (the API caps a range at one year).
  const now = new Date();
  let allTime = 0;
  for (let year = SINCE_YEAR; year <= now.getUTCFullYear(); year++) {
    const from = `${year}-01-01T00:00:00Z`;
    const to = year === now.getUTCFullYear() ? now.toISOString() : `${year}-12-31T23:59:59Z`;
    const d = await graphql(
      `query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) { contributionsCollection(from: $from, to: $to) { contributionCalendar { totalContributions } } }
      }`,
      { login: LOGIN, from, to },
    );
    allTime += d.user.contributionsCollection.contributionCalendar.totalContributions;
  }

  const cal = user.contributionsCollection.contributionCalendar;
  const calendar = cal.weeks
    .flatMap((w) => w.contributionDays)
    .map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const notable = [...repos]
    .sort((a, b) => b.stargazerCount - a.stargazerCount || String(b.pushedAt).localeCompare(String(a.pushedAt)))
    .slice(0, 24)
    .map((r) => {
      const out = { name: r.name, description: r.description ?? "", url: r.url, stars: r.stargazerCount };
      if (r.primaryLanguage?.name) out.language = r.primaryLanguage.name;
      out.pushedAt = r.pushedAt;
      return out;
    });

  return {
    login: user.login,
    publicRepos: user.repositories.totalCount,
    followers: user.followers.totalCount,
    totalStars: repos.reduce((sum, r) => sum + r.stargazerCount, 0),
    contributionsLastYear: cal.totalContributions,
    contributionsAllTime: allTime,
    calendar,
    repos: notable,
  };
}

// ---------- Packages ----------

const cleanRepo = (url) =>
  url
    ?.trim()
    .replace(/^git\+/, "")
    .replace(/^git:\/\//, "https://")
    .replace(/^ssh:\/\/git@/, "https://")
    .replace(/\.git$/, "") || undefined;

async function fetchPub(name) {
  const d = await getJson(`https://pub.dev/api/packages/${name}`);
  const spec = d.latest?.pubspec ?? {};
  const pkg = { name, registry: "pub", version: d.latest?.version ?? "", description: (spec.description ?? "").trim(), url: `https://pub.dev/packages/${name}` };
  const repo = cleanRepo(spec.repository || spec.homepage);
  if (repo) pkg.repo = repo;
  return pkg;
}

async function fetchNpm(name) {
  const d = await getJson(`https://registry.npmjs.org/${name.replace("/", "%2F")}`);
  const version = d["dist-tags"]?.latest ?? "";
  const meta = d.versions?.[version] ?? {};
  const pkg = { name, registry: "npm", version, description: (meta.description ?? d.description ?? "").trim(), url: `https://www.npmjs.com/package/${name}` };
  const repoField = meta.repository ?? d.repository;
  const repo = cleanRepo(typeof repoField === "string" ? repoField : repoField?.url);
  if (repo) pkg.repo = repo.replace(/^github:/, "https://github.com/");
  return pkg;
}

async function fetchPackages(previous) {
  const jobs = [...PUB.map((n) => ["pub", n, fetchPub]), ...NPM.map((n) => ["npm", n, fetchNpm])];
  const results = await Promise.allSettled(jobs.map(([, n, fn]) => fn(n)));
  let ok = 0;
  const packages = [];
  results.forEach((r, i) => {
    const [registry, name] = jobs[i];
    if (r.status === "fulfilled") {
      ok++;
      packages.push(r.value);
    } else {
      warn(`${registry} ${name}: ${r.reason?.message ?? r.reason}; keeping previous entry`);
      const prev = previous.find((p) => p.registry === registry && p.name === name);
      if (prev) packages.push(prev);
    }
  });
  if (ok === 0) throw new Error("every package registry request failed");
  return packages;
}

// ---------- Posts ----------

async function fetchPosts() {
  // Cloudflare in front of the CRM API rejects non-browser user agents.
  const items = await getJson(POSTS_API, { "user-agent": BROWSER_UA });
  if (!Array.isArray(items)) throw new Error("posts API did not return an array");
  return items
    .filter((p) => String(p.status).toLowerCase() === "published" && p.author === POST_AUTHOR && p.id)
    .map((p) => ({ p, t: Date.parse(p.date) || 0 }))
    .sort((a, b) => b.t - a.t)
    .map(({ p }) => {
      const post = { slug: p.id, title: p.title ?? "", excerpt: p.excerpt ?? "", date: p.date ?? "", url: POST_URL(p.id) };
      if (p.category) post.category = p.category;
      if (p.read) post.read = p.read;
      return post;
    });
}

// ---------- Main ----------

const prev = readPrevious();
const next = { generatedAt: new Date().toISOString(), github: prev.github, packages: prev.packages, posts: prev.posts };

const sources = [
  ["github", () => fetchGithub()],
  ["packages", () => fetchPackages(prev.packages ?? [])],
  ["posts", () => fetchPosts()],
];

console.log("sync: fetching GitHub, pub.dev, npm and the Silifton blog");
let failures = 0;
await Promise.all(
  sources.map(async ([key, fn]) => {
    try {
      next[key] = await fn();
    } catch (err) {
      failures++;
      warn(`${key} failed (${err.message}); keeping previous value`);
    }
  }),
);

if (failures === sources.length) {
  console.error("sync: every source failed; live.json left untouched");
  process.exit(1);
}

writeFileSync(OUT, JSON.stringify(next, null, 2) + "\n");

const g = next.github;
const cal = g.calendar;
console.log(
  [
    `sync: wrote src/data/live.json${failures ? ` (${failures} source(s) kept from previous run)` : ""}`,
    `  github   ${g.login}: ${g.publicRepos} public repos, ${g.followers} followers, ${g.totalStars} stars`,
    `           contributions ${g.contributionsLastYear} last year, ${g.contributionsAllTime} since ${SINCE_YEAR}`,
    `           calendar ${cal.length} days${cal.length ? ` (${cal[0].date} .. ${cal.at(-1).date})` : ""}, ${g.repos.length} notable repos`,
    `  packages ${next.packages.length} (${next.packages.filter((p) => p.registry === "pub").length} pub, ${next.packages.filter((p) => p.registry === "npm").length} npm)`,
    `  posts    ${next.posts.length}`,
  ].join("\n"),
);
