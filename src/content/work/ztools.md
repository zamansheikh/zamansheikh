---
title: "ztools"
summary: "A self-hosted developer toolbox: 25 everyday utilities, a code-based clipboard between devices, and a private vault per account."
category: product
year: 2026
role: "Lead engineer"
stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Docker"]
status: live
order: 14
metric: "25 tools, self-hosted"
color: "#2563EB"
cover: ../../assets/work/ztools/cover.jpg
links:
  live: "https://ztools.zamansheikh.com"
highlights:
  - "JSON, JWT, Base64, hash, UUID, regex, diff, colour and timestamp tools on one page"
  - "Public clipboard moves text between devices with a short code"
  - "Synced snippets and a private secrets vault per account"
  - "Passwords hashed with scrypt; sessions are signed JWTs in httpOnly cookies"
---

ztools collects the small utilities I reach for all day into one fast, keyboard-friendly page with no tracking: a JSON formatter, JWT decoder, hash and UUID generators, number-base and case converters, a regex tester, a diff checker and more. Flutter colour converters, a private-repo clone URL builder and cheatsheets for Git, Docker and GitHub Actions cover the stacks we work in.

Most tools run entirely in the browser. Two need the server. The public clipboard moves text between a laptop and a phone with a short code, and a clip can expire or burn after one read. Signed-in users get synced snippets and a private vault for tokens and SSH keys, returned only to their owner.

It runs on Next.js 16 with MongoDB, deployed with Docker on our own server.
