// Generates every icon file from public/favicon.svg.
//
//   npm run icons
//
// favicon.ico (16, 32, 48) for browsers and search results that don't use
// SVG, apple-touch-icon.png for iOS home screens, and 192/512 px PNGs for
// the web app manifest.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const svg = join(pub, "favicon.svg");
const ink = "#14181d";

// The SVG is drawn on a 32-unit grid, so rendering at size/32 of 72 dpi hits
// whole pixels directly instead of blurring a downscaled bitmap.
const render = (size) => sharp(svg, { density: (72 * size) / 32 }).resize(size, size).png().toBuffer();

// iOS and Android apply their own rounded mask and turn transparency black,
// so home-screen icons get a full-bleed background with the grid inset from
// the corners.
async function fullBleed(size) {
  const inner = Math.round(size * 0.8);
  const inset = Math.round((size - inner) / 2);
  return sharp({ create: { width: size, height: size, channels: 4, background: ink } })
    .composite([{ input: await render(inner), left: inset, top: inset }])
    .png()
    .toBuffer();
}

// ICO with PNG-encoded images (supported by every current browser).
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size % 256, e);
    header.writeUInt8(size % 256, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((img) => img.data)]);
}

const icoSizes = [16, 32, 48];
writeFileSync(join(pub, "favicon.ico"), ico(await Promise.all(icoSizes.map(async (size) => ({ size, data: await render(size) })))));
writeFileSync(join(pub, "apple-touch-icon.png"), await fullBleed(180));
writeFileSync(join(pub, "icon-192.png"), await fullBleed(192));
writeFileSync(join(pub, "icon-512.png"), await fullBleed(512));
console.log("Icons written to public/");
