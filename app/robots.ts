import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Hidden page kept in the codebase as a possible future archive.
      disallow: "/firma",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
