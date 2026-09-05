# Caffeina Politica

This is the repository for the new [Caffeina Politica website](caffeinapolitica.com). It's development is currently in progress.

## Development

Requirements: Node 22 (see `.nvmrc`) and pnpm 8.

```bash
pnpm install
pnpm dev
```

Useful scripts: `pnpm lint`, `pnpm typecheck`, `pnpm build`.

### Contributing workflow

`main` is protected: direct pushes and force pushes are blocked. Open a branch, push it and create a Pull Request; the CI workflow (lint, typecheck, build) must pass before merging.

## Technologies

This website is built with [Next.js](https://nextjs.org/) (App Router) and [TypeScript](https://www.typescriptlang.org/). [Tailwind CSS](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/) are used for styling.

Articles are written in [MDX](https://mdxjs.com/) and validated via [Contentlayer](https://github.com/timlrx/contentlayer2). Images live in `public/` and are served through `next/image`; run `pnpm images:optimize` after adding large pictures to shrink them.

The site is fully static: there is no database, no authentication and no server-side state. Analytics are handled by Plausible.

## Adding an article

1. Create `posts/articles/<slug>.mdx` with the required frontmatter (`title`, `date`, `author`, `image`, `excerpt`, `tags`).
2. Optionally add `posts/bibliography/<slug>.mdx` for the bibliography.
3. Put the images under `public/images/<slug>/` and run `pnpm images:optimize`.
4. Run `pnpm og:generate` to build the 1200x630 social preview card for the new article.
