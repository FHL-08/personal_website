/**
 * Resolve /assets/... paths to Supabase Storage public URLs at build time.
 * content.ts keeps logical paths; this module maps them for the site + preview.
 */
import type { Asset, MediaItem } from "../data/content.ts";

const ASSET_PREFIX = /^\/assets\//;

function env(name: string): string {
  const fromMeta =
    typeof import.meta !== "undefined" &&
    (import.meta as ImportMeta & { env?: Record<string, string> }).env?.[name];
  if (fromMeta) return String(fromMeta);
  if (typeof process !== "undefined" && process.env?.[name]) return process.env[name] as string;
  return "";
}

function supabaseBaseUrl(): string {
  return (env("SUPABASE_URL") || env("PUBLIC_SUPABASE_URL") || "").replace(/\/$/, "");
}

function storageBucket(): string {
  return env("SUPABASE_STORAGE_BUCKET") || "portfolio";
}

/** Map `/assets/foo/bar.jpg` → Supabase public object URL. */
export function assetUrl(path: string): string {
  if (!path || /^https?:\/\//i.test(path)) return path;
  if (!ASSET_PREFIX.test(path)) return path;
  const base = supabaseBaseUrl();
  if (!base) return path;
  const objectPath = path.replace(/^\/?assets\//, "");
  return `${base}/storage/v1/object/public/${storageBucket()}/${objectPath}`;
}

export function resolveMediaItem(item: MediaItem): MediaItem {
  return {
    ...item,
    src: assetUrl(item.src),
    thumb: item.thumb ? assetUrl(item.thumb) : item.thumb,
    poster: item.poster ? assetUrl(item.poster) : item.poster,
    previewSrc: item.previewSrc ? assetUrl(item.previewSrc) : item.previewSrc,
  };
}

export function resolveMediaItems(items: MediaItem[] = []): MediaItem[] {
  return items.map(resolveMediaItem);
}

export function resolveAssetLink(asset: Asset): Asset {
  if (!asset.href || !ASSET_PREFIX.test(asset.href)) return asset;
  return { ...asset, href: assetUrl(asset.href) };
}

export function resolveAssetLinks(assets: Asset[] = []): Asset[] {
  return assets.map(resolveAssetLink);
}

export function resolveRecordsPayload(records: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [id, rec] of Object.entries(records)) {
    if (!rec || typeof rec !== "object") {
      out[id] = rec;
      continue;
    }
    const r = rec as Record<string, unknown>;
    out[id] = {
      ...r,
      media: resolveMediaItems((r.media as MediaItem[]) || []),
      assets: resolveAssetLinks((r.assets as Asset[]) || []),
    };
  }
  return out;
}

export function resolveOffDuty(data: {
  title: string;
  tabs: { id: string; label: string; blurb: string; images: string[] }[];
}) {
  return {
    ...data,
    tabs: data.tabs.map((tab) => ({
      ...tab,
      images: tab.images.map(assetUrl),
    })),
  };
}

export function resolveProfilePortrait(profile: {
  portrait: { src: string; webp?: string; alt: string };
  cv: { href: string; label: string };
}) {
  return {
    portrait: {
      ...profile.portrait,
      src: assetUrl(profile.portrait.src),
      webp: profile.portrait.webp ? assetUrl(profile.portrait.webp) : profile.portrait.webp,
    },
    cv: {
      ...profile.cv,
      href: assetUrl(profile.cv.href),
    },
  };
}
