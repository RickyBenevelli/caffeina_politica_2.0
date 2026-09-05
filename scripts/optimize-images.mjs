// One-off helper: shrink oversized images in public/ so the source files the
// image optimizer (and raw <img> tags in MDX) fetch are not multi-megabyte.
// Usage: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "public";
const MAX_WIDTH = 2000;          // wide enough for a 1024px container at 2x
const PROFILE_MAX_WIDTH = 800;   // square avatars
const REENCODE_ABOVE = 250 * 1024;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if ([".webp", ".jpg", ".jpeg"].includes(extname(p).toLowerCase())) yield p;
  }
}

let saved = 0;
for await (const file of walk(ROOT)) {
  const { size } = await stat(file);
  const meta = await sharp(file).metadata();
  const maxWidth = file.includes("/profiles/") ? PROFILE_MAX_WIDTH : MAX_WIDTH;
  const tooWide = (meta.width ?? 0) > maxWidth;
  if (!tooWide && size <= REENCODE_ABOVE) continue;

  const buffer = await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();
  if (buffer.length >= size) continue;

  await sharp(buffer).toFile(file);
  saved += size - buffer.length;
  console.log(
    `${file}: ${meta.width}x${meta.height} ${(size / 1024).toFixed(0)}KB -> ` +
      `${Math.min(meta.width, maxWidth)}px ${(buffer.length / 1024).toFixed(0)}KB`
  );
}
console.log(`saved ${(saved / 1024 / 1024).toFixed(1)} MB`);
