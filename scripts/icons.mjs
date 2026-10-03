// Generates the favicon set from one vector mark: a bold "Z" with a red full
// stop (the same red dot that ends "Zaman Sheikh." on the site and social card).
//
// The mark is drawn on a 64-unit grid with every edge on a multiple of 4, so it
// lands on whole pixels at 16, 32 and 48 px. All PNGs are rendered from the same
// SVG with sharp (librsvg) at their exact size, so they match the SVG favicon.
//
// Writes to public/: favicon.svg, favicon.ico (16/32/48), favicon-32.png,
// apple-touch-icon.png (180), icon-192.png, icon-512.png,
// icon-maskable-512.png, site.webmanifest.   Run: node scripts/icons.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

const INK = "#131416";
const PAPER = "#f3f3ef";
const RED = "#e5322d";

// "Z": 28 wide, 40 tall, 12-unit bars (3 px at 16 px), a diagonal of nearly the same weight.
const Z = "M8 12H36V24L22 40H36V52H8V40L22 24H8Z";
// full stop: a 16-unit circle (4 px at 16 px, so it stays round) on the baseline, 1 px from the Z.
// Mark box is 8..56 x 12..52, centred on the tile.
const DOT = { cx: 48, cy: 44, r: 8 };

/**
 * @param {object} o
 * @param {number} [o.size]   output width/height attribute (px); omitted for the scalable favicon
 * @param {number} [o.rx]     tile corner radius in grid units (0 = square, full bleed)
 * @param {number} [o.scale]  mark scale inside the tile (1 = favicon proportions)
 * @param {boolean} [o.adaptive] add a prefers-color-scheme block (favicon.svg only)
 */
function svg({ size, rx = 14, scale = 1, adaptive = false } = {}) {
  const dim = size ? ` width="${size}" height="${size}"` : "";
  // scale the mark about the tile centre (the mark's own box, 8..56 x 12..52, is centred on 32,32)
  const t = scale === 1 ? "" : ` transform="translate(32 32) scale(${scale}) translate(-32 -32)"`;
  const style = adaptive
    ? `<style>.t{fill:${INK}}.z{fill:${PAPER}}@media (prefers-color-scheme:dark){.t{fill:${PAPER}}.z{fill:${INK}}}</style>`
    : "";
  const tile = adaptive ? `class="t"` : `fill="${INK}"`;
  const z = adaptive ? `class="z"` : `fill="${PAPER}"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"${dim}>${style}<rect width="64" height="64" rx="${rx}" ${tile}/><g${t}><path ${z} d="${Z}"/><circle cx="${DOT.cx}" cy="${DOT.cy}" r="${DOT.r}" fill="${RED}"/></g></svg>\n`;
}

const png = (s, size) => sharp(Buffer.from(s), { density: 72 * (size / 64) }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

// ICO with PNG-encoded entries (supported by every browser and Windows since Vista)
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt8(0, e + 2); // palette
    header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4); // planes
    header.writeUInt16LE(32, e + 6); // bpp
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((i) => i.data)]);
}

const out = (name, data) => {
  fs.writeFileSync(path.join(pub, name), data);
  console.log(`wrote public/${name}`);
};

// 1. scalable favicon: dark tile on light tabs, inverted (paper tile) on dark tabs
out("favicon.svg", svg({ adaptive: true }));

// 2. raster favicons: the dark tile, which reads on both light and dark tab bars
const tab = svg();
const sizes = [16, 32, 48];
const rendered = await Promise.all(sizes.map(async (size) => ({ size, data: await png(tab, size) })));
out("favicon.ico", ico(rendered));
out("favicon-32.png", rendered.find((r) => r.size === 32).data);

// 3. home-screen icons. iOS and Android apply their own masks, so these are full-bleed squares
// with no transparency; the mark is shrunk so it sits well inside the rounded/circular crop.
const flat = async (size, scale) =>
  sharp(await png(svg({ rx: 0, scale }), size)).flatten({ background: INK }).png({ compressionLevel: 9 }).toBuffer();
out("apple-touch-icon.png", await flat(180, 0.8));
// "any" purpose: the rounded tile as drawn, transparent corners
out("icon-192.png", await png(svg({ rx: 14 }), 192));
out("icon-512.png", await png(svg({ rx: 14 }), 512));
// maskable: the mark (48 x 40 units) at 0.62 spans 30 units, well inside the 80% (51.2-unit) safe circle
out("icon-maskable-512.png", await flat(512, 0.62));

const manifest = {
  name: "Zaman Sheikh",
  short_name: "Zaman Sheikh",
  description: "Zaman Sheikh, founder of Silifton and Flutter & full-stack engineer in Dhaka, Bangladesh.",
  start_url: "/",
  scope: "/",
  display: "browser",
  background_color: PAPER,
  theme_color: PAPER,
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};
out("site.webmanifest", JSON.stringify(manifest, null, 2) + "\n");
