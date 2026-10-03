---
title: "oimage"
summary: "A terminal UI that recompresses a project's images in their own formats, with responsive srcset output, a quality guard and a dry run."
category: open-source
year: 2026
role: "Author & maintainer"
stack: ["Node.js", "React", "Ink", "sharp"]
status: live
order: 31
metric: "v2.7 on npm"
color: "#D97706"
links:
  package: "https://www.npmjs.com/package/oimage"
highlights:
  - "Keeps each image in its own format by default, so existing markup keeps working"
  - "Generates phone, tablet and desktop sizes and prints the srcset markup"
  - "SSIM quality guard raises quality per file until it passes"
  - "Headless mode with JSON reports and exit codes for CI"
  - "Converts Tencent VAP gift animations to smaller VAP, animated WebP or SVGA"
---

oimage recompresses images in the same format by default, so a `.png` stays a `.png` and no `<img>` tag in your markup breaks. It converts to WebP or AVIF only when asked.

It opens a full-screen terminal UI over the project's image folders, with recursive counts and sizes per folder. You tick files, tune quality, a maximum width, srcset widths and an SSIM quality floor in a status bar that explains in plain words what each setting will do, and preview the savings before anything is written. Overwriting originals asks first. The same run works headless in CI with `--yes`, `--dry-run` or `--json`.

For live-streaming work, it also re-encodes Tencent VAP files and converts them to animated WebP or SVGA. It is on npm at version 2.7.
