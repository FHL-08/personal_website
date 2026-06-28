import { build } from "esbuild";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "preview", "_astro");
mkdirSync(outDir, { recursive: true });

await build({
  entryPoints: [join(root, "src/scripts/pdfViewer.js")],
  outfile: join(outDir, "pdfViewer.preview.js"),
  bundle: true,
  format: "iife",
  globalName: "__pdfViewerExports",
  platform: "browser",
  target: ["es2020"],
  logLevel: "warning",
});

console.log("Built preview/_astro/pdfViewer.preview.js");
