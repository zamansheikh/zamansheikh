// Renders public/og.png (1200x630) and public/apple-touch-icon.png (180x180).
// Writes HTML to a temp dir, screenshots it at 2x with headless Chrome, then
// downscales with sharp for crisp edges. Run: node scripts/og.mjs
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "zs-og-"));

// Local fontsource files first (deterministic, offline); Google Fonts as a fallback.
const fs_ = (pkg, file) => `file://${path.join(root, "node_modules/@fontsource-variable", pkg, "files", file)}`;
const localFonts = `<style>
@font-face { font-family: "ZS Display"; src: url("${fs_("bricolage-grotesque", "bricolage-grotesque-latin-opsz-normal.woff2")}") format("woff2"); font-weight: 200 800; }
@font-face { font-family: "ZS Body"; src: url("${fs_("hanken-grotesk", "hanken-grotesk-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 900; }
@font-face { font-family: "ZS Mono"; src: url("${fs_("jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 800; }
</style>`;
const fonts = `${localFonts}<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..700&family=Hanken+Grotesk:wght@400..600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">`;

// Deterministic contribution-style strip: 53 weeks x 7 days, busier towards the present.
function strip() {
  let seed = 20201;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const weeks = 53;
  let cells = "";
  for (let w = 0; w < weeks; w++) {
    const heat = 0.25 + 0.75 * (w / (weeks - 1));
    for (let d = 0; d < 7; d++) {
      const weekend = d === 0 || d === 6 ? 0.55 : 1;
      const r = rand() * heat * weekend;
      const lvl = r < 0.12 ? 0 : r < 0.3 ? 1 : r < 0.5 ? 2 : r < 0.68 ? 3 : 4;
      cells += `<i class="l${lvl}" style="grid-column:${w + 1};grid-row:${d + 1}"></i>`;
    }
  }
  return cells;
}

const ogHtml = `<!doctype html><html><head><meta charset="utf-8">${fonts}
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { background: #f3f3ef; color: #131416; font-family: "ZS Body", "Hanken Grotesk", sans-serif; position: relative; }
  .frame { position: absolute; inset: 0; padding: 72px 80px 0; display: flex; flex-direction: column; }
  .top { display: flex; justify-content: space-between; align-items: center;
         font: 500 15px/1 "ZS Mono", "JetBrains Mono", monospace; letter-spacing: .14em; text-transform: uppercase; color: #6c6f76; }
  .top b { font-weight: 500; color: #131416; }
  .live { display: inline-flex; align-items: center; gap: 12px; }
  .live::before { content: ""; width: 10px; height: 10px; border-radius: 50%; background: #0b7a55; box-shadow: 0 0 0 5px rgba(11,122,85,.14); }
  h1 { margin-top: 74px; font: 650 132px/0.9 "ZS Display", "Bricolage Grotesque", sans-serif; letter-spacing: -0.045em; display: flex; align-items: baseline; }
  h1 span { width: 22px; height: 22px; border-radius: 50%; background: #e5322d; margin-left: 10px; flex: none; }
  p { margin-top: 30px; font: 450 34px/1.25 "ZS Body", "Hanken Grotesk", sans-serif; color: #3a3c41; letter-spacing: -0.01em; }
  .g { position: absolute; left: 80px; right: 80px; bottom: 56px; display: grid;
       grid-template-columns: repeat(53, 1fr); grid-template-rows: repeat(7, 15.6px); gap: 4px; }
  .g i { border-radius: 3px; }
  .l0 { background: #e2e3dc } .l1 { background: #b6dcc6 } .l2 { background: #6cc097 } .l3 { background: #22966a } .l4 { background: #0a6646 }
  .rule { position: absolute; left: 80px; right: 80px; bottom: 216px; border-top: 1px solid #dcdcd4; }
</style></head><body>
<div class="frame">
  <div class="top"><b>zamansheikh.com</b><span class="live">Shipping from Bangladesh</span></div>
  <h1>Zaman Sheikh<span></span></h1>
  <p>Founder, Silifton · Flutter &amp; full-stack engineer</p>
</div>
<div class="rule"></div>
<div class="g">${strip()}</div>
</body></html>`;

const iconHtml = `<!doctype html><html><head><meta charset="utf-8">
<style>* { margin: 0 } html, body { width: 180px; height: 180px; overflow: hidden; background: #131416; }
body { display: grid; place-items: center; } img { display: block; width: 156px; height: 156px; }</style></head><body>
<img src="file://${path.join(pub, "favicon.svg")}"></body></html>`;

function shoot(html, name, w, h) {
  const file = path.join(tmp, `${name}.html`);
  const shot = path.join(tmp, `${name}.png`);
  fs.writeFileSync(file, html);
  // render taller than needed: new headless reserves some window height for chrome
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--hide-scrollbars",
      "--disable-gpu",
      "--allow-file-access-from-files",
      `--window-size=${w},${h + 200}`,
      "--force-device-scale-factor=2",
      "--virtual-time-budget=8000",
      `--screenshot=${shot}`,
      `file://${file}`,
    ],
    { stdio: "ignore", timeout: 90_000 },
  );
  return shot;
}

const og = shoot(ogHtml, "og", 1200, 630);
await sharp(og).extract({ left: 0, top: 0, width: 2400, height: 1260 }).resize(1200, 630, { kernel: "lanczos3" }).png({ compressionLevel: 9 }).toFile(path.join(pub, "og.png"));

// iOS applies its own corner mask, so the touch icon is a full-bleed square tile
const icon = shoot(iconHtml, "icon", 180, 180);
await sharp(icon).extract({ left: 0, top: 0, width: 360, height: 360 }).resize(180, 180, { kernel: "lanczos3" }).png({ compressionLevel: 9 }).toFile(path.join(pub, "apple-touch-icon.png"));

fs.rmSync(tmp, { recursive: true, force: true });
console.log("wrote public/og.png (1200x630) and public/apple-touch-icon.png (180x180)");
