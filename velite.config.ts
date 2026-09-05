import { defineConfig, defineCollection, s } from "velite";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

import rehypeImageSize from "./lib/rehype-image-size.mjs";

/** Words per minute used for the "x min read" label. */
const WPM = 500;

function minutesToRead(raw: string) {
  const prose = raw
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/#+\s/g, "");
  return Math.ceil(readingTime(prose, { wordsPerMinute: WPM }).minutes);
}

const articles = defineCollection({
  name: "Article",
  pattern: "articles/*.mdx",
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      author: s.array(s.string()),
      image: s.string(),
      excerpt: s.string(),
      tags: s.array(s.string()).default([]),
      externalURL: s.string().optional(),
      slug: s.path(),
      raw: s.raw(),
      body: s.mdx(),
    })
    .transform(({ raw, slug, ...rest }) => ({
      ...rest,
      slug: slug.replace(/^articles\//, ""),
      url: `/articles/${slug.replace(/^articles\//, "")}`,
      readingTime: minutesToRead(raw),
    })),
});

const bibliographies = defineCollection({
  name: "Bibliography",
  pattern: "bibliography/*.mdx",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^bibliography\//, ""),
    })),
});

export default defineConfig({
  root: "posts",
  output: {
    data: ".velite",
    clean: true,
  },
  collections: { articles, bibliographies },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeImageSize, { publicDir: "public" }]],
  },
});
