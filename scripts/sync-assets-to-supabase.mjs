/**
 * Upload local public/assets/ to Supabase Storage (portfolio bucket).
 *
 * Requires in .env.local:
 *   SUPABASE_URL=...
 *   SUPABASE_SERVICE_ROLE_KEY=...   (recommended — never commit or expose in the browser)
 *
 * Optional:
 *   SUPABASE_STORAGE_BUCKET=portfolio   (default: portfolio)
 *   ASSETS_DIR=public/assets              (default: public/assets)
 *
 * Run: npm run assets:sync
 */
import { createClient } from "@supabase/supabase-js";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { loadEnvLocal } from "./load-env.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
loadEnvLocal(root);

const url = process.env.SUPABASE_URL;
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_KEY;
const bucket = process.env.SUPABASE_STORAGE_BUCKET || "portfolio";
const assetsDir = join(root, process.env.ASSETS_DIR || "public/assets");

if (!url || !key) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

if (!existsSync(assetsDir)) {
  console.error(`Assets directory not found: ${assetsDir}`);
  console.error("Keep optimized media in public/assets locally, then sync to Supabase.");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function walkFiles(dir, base = dir) {
  /** @type {{ abs: string; key: string }[]} */
  const files = [];
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    const st = statSync(abs);
    if (st.isDirectory()) files.push(...walkFiles(abs, base));
    else if (st.isFile()) {
      files.push({
        abs,
        key: relative(base, abs).replace(/\\/g, "/"),
      });
    }
  }
  return files;
}

function contentType(file) {
  const ext = file.split(".").pop()?.toLowerCase();
  const map = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    png: "image/png",
    gif: "image/gif",
    mp4: "video/mp4",
    pdf: "application/pdf",
    svg: "image/svg+xml",
  };
  return map[ext] || "application/octet-stream";
}

const files = walkFiles(assetsDir);
console.log(`Uploading ${files.length} files from ${assetsDir} → bucket "${bucket}"`);

let ok = 0;
let fail = 0;

for (const { abs, key: objectKey } of files) {
  const body = readFileSync(abs);
  const { error } = await supabase.storage.from(bucket).upload(objectKey, body, {
    upsert: true,
    contentType: contentType(objectKey),
  });
  if (error) {
    fail++;
    console.error(`FAIL ${objectKey}: ${error.message}`);
  } else {
    ok++;
    if (ok % 25 === 0 || ok === files.length) console.log(`  ${ok}/${files.length}`);
  }
}

console.log(`Done. ${ok} uploaded, ${fail} failed.`);
if (fail) process.exit(1);

// Smoke-test one object
const sample = files[0];
if (sample) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(sample.key);
  const res = await fetch(data.publicUrl, { method: "HEAD" });
  console.log(`Verify ${sample.key}: HTTP ${res.status}`);
  if (!res.ok) {
    console.warn("Public URL check failed — run scripts/db/storage-setup.sql in Supabase.");
    process.exit(1);
  }
}
