import type { MetadataRoute } from "next";

import { articles as allArticles } from "@/.velite";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = allArticles.map((article) => ({
    url: `${site.url}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const pages = ["", "/about-us", "/eventi"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.5,
  }));

  return [...pages, ...articles];
}
