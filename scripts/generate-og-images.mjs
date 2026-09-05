// Generates 1200x630 JPEG preview cards used as og:image.
// JPEG (not WebP) because several chat apps refuse to render WebP previews.
// Usage: node scripts/generate-og-images.mjs
import sharp from "sharp";
import { readdir, readFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ARTICLES_DIR = "posts/articles";
const OUT_DIR = "public/og";
const WIDTH = 1200;
const HEIGHT = 630;

function frontmatterValue(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, "m"));
  return match?.[1]?.trim();
}

async function card(source, destination) {
  await sharp(source)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, progressive: true })
    .toFile(destination);
  console.log(`${destination} <- ${source}`);
}

await mkdir(OUT_DIR, { recursive: true });

for (const file of await readdir(ARTICLES_DIR)) {
  if (!file.endsWith(".mdx")) continue;
  const slug = file.replace(/\.mdx$/, "");
  const image = frontmatterValue(await readFile(join(ARTICLES_DIR, file), "utf8"), "image");
  if (!image) {
    console.warn(`${slug}: no image in frontmatter, skipped`);
    continue;
  }
  await card(join("public", image), join(OUT_DIR, `${slug}.jpg`));
}

// Site-wide fallback used by the home page and the other static pages.
await card("public/events/eventsCover.webp", join(OUT_DIR, "default.jpg"));
