/**
 * Generate crisp PNG favicons / PWA icons from public/favicon.svg.
 * Run: node scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const svg = await readFile(join(publicDir, "favicon.svg"));

const sizes = [
  ["favicon-16.png", 16],
  ["favicon-32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];

for (const [name, size] of sizes) {
  const png = await sharp(svg, { density: Math.max(512, size * 32) })
    .resize(size, size, { fit: "contain", background: { r: 5, g: 7, b: 15, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(join(publicDir, name), png);
  console.log("wrote", name);
}
