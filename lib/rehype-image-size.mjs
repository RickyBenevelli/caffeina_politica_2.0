import { visit } from "unist-util-visit";
import sharp from "sharp";
import { join } from "node:path";

/**
 * Adds intrinsic width/height to every local <img> in the MDX body so the
 * article can render them through next/image instead of a raw tag.
 * Images are read from `publicDir` at build time; remote sources are left alone.
 */
export default function rehypeImageSize({ publicDir = "public" } = {}) {
  return async (tree) => {
    const jobs = [];

    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;
      const src = node.properties?.src;
      if (typeof src !== "string" || !src.startsWith("/")) return;

      jobs.push(
        sharp(join(publicDir, src))
          .metadata()
          .then(({ width, height, pageHeight, pages }) => {
            // For animated sources `height` is one frame; some formats instead
            // report the stacked height and expose the frame in `pageHeight`.
            const frameHeight = pageHeight ?? height;
            if (width && frameHeight) {
              node.properties.width = width;
              node.properties.height = frameHeight;
            }
            // Animated images must bypass the image optimizer, which would
            // flatten them to a single frame.
            if (pages > 1) node.properties["dataAnimated"] = "true";
          })
          .catch(() => {
            console.warn(`rehype-image-size: cannot read ${src}`);
          })
      );
    });

    await Promise.all(jobs);
  };
}
