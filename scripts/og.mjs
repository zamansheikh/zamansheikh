// Renders the social cards (1200x630):
//   public/og.png                 home page: photo, name, role, hero line, real GitHub numbers
//   public/og/work/<slug>.jpg     one per src/content/work/<slug>.md: title, summary, category · year, cover
// Writes HTML to a temp dir, screenshots it at 2x with headless Chrome, then
// downscales with sharp for crisp text. Fonts come from the local @fontsource packages.
// The favicon set (incl. apple-touch-icon.png) is made by scripts/icons.mjs.
//
// Run: npm run og                 (everything)
//      node scripts/og.mjs home   (only og.png)
//      node scripts/og.mjs work [slug ...]
// Re-run after editing a project's title, summary, year, category, colour or cover,
// or after `npm run sync` changes the numbers.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import yaml from "js-yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const workDir = path.join(root, "src/content/work");
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "zs-og-"));
const url = (p) => pathToFileURL(p).href;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const live = JSON.parse(fs.readFileSync(path.join(root, "src/data/live.json"), "utf8"));
const fmt = new Intl.NumberFormat("en-US");

const font = (pkg, file) => url(path.join(root, "node_modules/@fontsource-variable", pkg, "files", file));
const head = `<meta charset="utf-8"><style>
@font-face { font-family: "D"; src: url("${font("bricolage-grotesque", "bricolage-grotesque-latin-opsz-normal.woff2")}") format("woff2"); font-weight: 200 800; }
@font-face { font-family: "B"; src: url("${font("hanken-grotesk", "hanken-grotesk-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 900; }
@font-face { font-family: "M"; src: url("${font("jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 800; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body { background: #f3f3ef; color: #131416; font-family: "B", sans-serif; position: relative; -webkit-font-smoothing: antialiased; }
.eyebrow { font: 500 15px/1 "M", monospace; letter-spacing: .14em; text-transform: uppercase; color: #6c6f76; display: flex; align-items: center; gap: 12px; }
</style>`;

// the favicon mark, inline, for footers
const mark = (size) => fs.readFileSync(path.join(pub, "favicon.svg"), "utf8")
  .replace(/<style>.*<\/style>/, "")
  .replace('class="t"', 'fill="#131416"').replace('class="z"', 'fill="#f3f3ef"')
  .replace("<svg ", `<svg width="${size}" height="${size}" `);

function shoot(html, name) {
  const file = path.join(tmp, `${name}.html`);
  const shot = path.join(tmp, `${name}.png`);
  fs.writeFileSync(file, html);
  // render taller than needed: new headless reserves some window height for browser UI
  execFileSync(
    CHROME,
    [
      "--headless=new", "--hide-scrollbars", "--disable-gpu", "--allow-file-access-from-files",
      "--window-size=1200,830", "--force-device-scale-factor=2", "--virtual-time-budget=5000",
      `--screenshot=${shot}`, url(file),
    ],
    { stdio: "ignore", timeout: 90_000 },
  );
  return shot;
}

const save = (shot, out) => {
  const img = sharp(shot).extract({ left: 0, top: 0, width: 2400, height: 1260 }).resize(1200, 630, { kernel: "lanczos3" });
  // project cards are mostly screenshots: JPEG is a fifth of the PNG size; full chroma keeps text edges clean
  return (out.endsWith(".jpg") ? img.jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" }) : img.png({ compressionLevel: 9 })).toFile(out);
};

// ---------------------------------------------------------------- home card

function homeHtml() {
  const gh = live.github;
  // the real last-year calendar, oldest first, one column per week
  const weeks = Math.ceil(gh.calendar.length / 7);
  const cells = gh.calendar
    .map((d, i) => `<i class="l${d.level}" style="grid-column:${Math.floor(i / 7) + 1};grid-row:${(i % 7) + 1}"></i>`)
    .join("");
  const stats = [
    [fmt.format(gh.contributionsAllTime), `contributions since 2020`],
    [fmt.format(gh.contributionsLastYear), "in the last 12 months"],
    [String(live.packages.length), "published packages"],
  ];
  return `<!doctype html><html><head>${head}<style>
  .l { position: absolute; left: 72px; top: 72px; width: 660px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #0b7a55; box-shadow: 0 0 0 5px rgba(11,122,85,.14); }
  h1 { margin-top: 34px; font: 650 92px/0.92 "D", sans-serif; letter-spacing: -0.045em; display: flex; align-items: baseline; white-space: nowrap; }
  h1 span { width: 17px; height: 17px; border-radius: 50%; background: #e5322d; margin-left: 7px; flex: none; }
  .role { margin-top: 22px; font: 500 27px/1.2 "B", sans-serif; color: #3a3c41; letter-spacing: -0.005em; }
  .hook { margin-top: 26px; font: 560 38px/1.12 "D", sans-serif; letter-spacing: -0.03em; }
  .proof { position: absolute; left: 72px; bottom: 72px; width: 660px; padding-top: 24px; border-top: 1px solid #dcdcd4; }
  .stats { display: flex; gap: 44px; }
  .stats b { display: block; font: 650 40px/1 "D", sans-serif; letter-spacing: -0.035em; }
  .stats span { display: block; margin-top: 9px; font: 500 13px/1 "M", monospace; letter-spacing: .06em; text-transform: uppercase; color: #6c6f76; }
  .g { margin-top: 20px; display: grid; grid-template-columns: repeat(${weeks}, 1fr); gap: 2.6px; }
  .g i { aspect-ratio: 1; border-radius: 2px; }
  .l0 { background: #e2e3dc } .l1 { background: #b6dcc6 } .l2 { background: #6cc097 } .l3 { background: #22966a } .l4 { background: #0a6646 }
  .photo { position: absolute; right: 72px; top: 72px; width: 336px; height: 486px; border-radius: 22px; overflow: hidden;
           box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 24px 48px -28px rgba(19,20,22,.45); }
  .photo img { width: 100%; height: 100%; object-fit: cover; object-position: 48% 30%; display: block; }
  .tag { position: absolute; left: 16px; bottom: 16px; padding: 9px 13px; border-radius: 999px; background: rgba(243,243,239,.94);
         font: 500 13px/1 "M", monospace; letter-spacing: .08em; text-transform: uppercase; color: #131416; display: flex; gap: 9px; align-items: center; }
  .tag i { width: 8px; height: 8px; border-radius: 50%; background: #e5322d; }
</style></head><body>
<div class="l">
  <div class="eyebrow"><span class="dot"></span>zamansheikh.com</div>
  <h1>Zaman Sheikh<span></span></h1>
  <p class="role">Founder, Silifton · Flutter &amp; full-stack engineer</p>
  <p class="hook">I build the hard parts of software.</p>
</div>
<div class="proof">
  <div class="stats">${stats.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join("")}</div>
  <div class="g">${cells}</div>
</div>
<figure class="photo"><img src="${url(path.join(pub, "hero_dp.jpg"))}" alt=""><figcaption class="tag"><i></i>Dhaka, Bangladesh</figcaption></figure>
</body></html>`;
}

// ---------------------------------------------------------------- work cards

const categoryLabel = { product: "Product", client: "Client work", "open-source": "Open source", app: "App", experiment: "Experiment" };

function lum(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? [...h].map((c) => c + c).join("") : h.slice(0, 6);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function readWork() {
  return fs.readdirSync(workDir).filter((f) => f.endsWith(".md")).sort().map((f) => {
    const src = fs.readFileSync(path.join(workDir, f), "utf8");
    const fm = yaml.load(src.match(/^---\n([\s\S]*?)\n---/)[1]);
    return { slug: f.replace(/\.md$/, ""), ...fm, cover: fm.cover ? path.resolve(workDir, fm.cover) : undefined };
  });
}

async function workHtml(w) {
  const color = w.color ?? "#0b7a55";
  const onColor = lum(color) > 0.18 ? "#131416" : "#ffffff";
  const t = w.title.length;
  const size = t <= 10 ? 76 : t <= 16 ? 62 : 54;
  let media;
  if (w.cover) {
    const { width, height } = await sharp(w.cover).metadata();
    const ratio = width / height;
    // the whole cover, framed on the colour panel (many covers carry text up to their right edge)
    const cw = 492, ch = Math.round(Math.min(cw / ratio, 440));
    media = `<div class="shot" style="width:${cw}px;height:${ch}px"><img src="${url(w.cover)}" alt=""></div>`;
  } else {
    media = `<span class="initial" style="color:${onColor}">${esc(w.title.trim().charAt(0).toUpperCase())}</span>`;
  }
  return `<!doctype html><html><head>${head}<style>
  .l { position: absolute; left: 72px; top: 72px; bottom: 72px; width: 476px; display: flex; flex-direction: column; }
  .sw { width: 12px; height: 12px; border-radius: 3px; background: ${color}; }
  h1 { margin-top: 30px; font: 650 ${size}px/0.98 "D", sans-serif; letter-spacing: -0.04em; text-wrap: balance;
       display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
  .sum { margin-top: 22px; font: 450 24px/1.4 "B", sans-serif; color: #3a3c41; text-wrap: pretty;
         display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden; }
  .stack { margin-top: auto; padding-bottom: 22px; font: 500 14px/1.4 "M", monospace; letter-spacing: .04em; color: #6c6f76; }
  .foot { padding-top: 22px; border-top: 1px solid #dcdcd4; display: flex; align-items: center; gap: 14px; font: 500 19px/1 "B", sans-serif; color: #6c6f76; }
  .foot svg { flex: none; }
  .foot b { color: #131416; font-weight: 600; }
  .panel { position: absolute; left: 612px; top: 0; right: 0; bottom: 0; background: ${color}; overflow: hidden; display: grid; place-items: center; }
  .panel::after { content: ""; position: absolute; inset: 0; background: linear-gradient(160deg, rgba(255,255,255,.14), rgba(0,0,0,.12)); pointer-events: none; }
  .shot { position: relative; border-radius: 14px; overflow: hidden; z-index: 1;
          box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 30px 60px -24px rgba(0,0,0,.5); background: #fff; }
  .shot img { width: 100%; height: 100%; object-fit: cover; object-position: left top; display: block; }
  .initial { font: 650 300px/1 "D", sans-serif; letter-spacing: -0.05em; opacity: .92; z-index: 1; transform: translateY(-8px); }
</style></head><body>
<div class="l">
  <div class="eyebrow"><span class="sw"></span>${esc(categoryLabel[w.category] ?? w.category)} · ${esc(w.year)}</div>
  <h1>${esc(w.title)}</h1>
  <p class="sum">${esc(w.summary)}</p>
  <div class="stack">${esc((w.stack ?? []).slice(0, 4).join(" · "))}</div>
  <div class="foot">${mark(40)}<span><b>Zaman Sheikh</b> · zamansheikh.com</span></div>
</div>
<div class="panel">${media}</div>
</body></html>`;
}

// ---------------------------------------------------------------- main

const [mode = "all", ...only] = process.argv.slice(2);
if (mode === "all" || mode === "home") {
  await save(shoot(homeHtml(), "home"), path.join(pub, "og.png"));
  console.log("wrote public/og.png");
}
if (mode === "all" || mode === "work") {
  const outDir = path.join(pub, "og/work");
  fs.mkdirSync(outDir, { recursive: true });
  const items = readWork().filter((w) => !only.length || only.includes(w.slug));
  for (const w of items) {
    await save(shoot(await workHtml(w), w.slug), path.join(outDir, `${w.slug}.jpg`));
    console.log(`wrote public/og/work/${w.slug}.jpg`);
  }
  // drop cards for projects that no longer exist
  if (!only.length) {
    const keep = new Set(items.map((w) => `${w.slug}.jpg`));
    for (const f of fs.readdirSync(outDir)) if (!keep.has(f)) fs.rmSync(path.join(outDir, f));
  }
}
fs.rmSync(tmp, { recursive: true, force: true });
