/** Canonical site metadata, shared by pages, sitemap and share buttons. */
export const site = {
  url: "https://www.caffeinapolitica.com",
  name: "Caffeina Politica",
  description: "Lo spazio di dibattito pubblico. Da giovani per giovani",
  locale: "it_IT",
} as const;

/** Absolute URL for a path like "/articles/tangentopoli". */
export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
