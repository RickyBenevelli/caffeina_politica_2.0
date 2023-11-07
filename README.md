# Caffeina Politica

This is the repository for the new [Caffeina Politica website](caffeinapolitica.com). It's development is currently in progress.

## Technologies

This website is built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).
[Tailwind CSS](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/) are used for styling.

For authentication, [NextAuth.js](https://next-auth.js.org/) is used.

> I opted for `session strategy = database`, using an Adapter. I need to consider changing session strategy to `JWT`. This would allow me to use a middleware, but would make that to change a user's role, they must first log out.

When a user logs in, their data is stored in a database. This is done using [Prisma](https://www.prisma.io/).

> This choice was made to obtain a role-based site and to administer user permissions

The database that will be used will be either [MySQL](https://www.mysql.com) or [PostgreSQL](https://www.postgresql.org/).

Articles are written in [MDX](https://mdxjs.com/) and validated via [Contentlayer](https://contentlayer.dev/).

> The articles have been separated from their bibliography, which will still be written in MDX. This allows you to solve the reading time problem, present on the previous version of the site

For fetching data, [TanStack](https://tanstack.com/query/latest) is used.

Data in admin console are displayed using [Recharts](https://recharts.org/).

I would like to include an automatic article reading function, using [react-speech-kit](https://www.npmjs.com/package/react-speech-kit).

<br/>

## Project Phases

### Phase 0

- [x] setup project
- [x] add shadcn and tailwind
- [x] add icon system management

### Phase 1

- [x] create autentication system
- [x] add provider to save user data
- [x] modelling database

### Phase 2

- [ ] navbar
- [ ] structure of pages
- [ ] footer

### Phase 3

- [x] Contentlayer
- [x] articles

### Phase 4

- [x] style of articles (heading, ...)
- [ ] bibliography
- [x] reading time
- [x] views (+ add to db)

### Phase 5

- [ ] correct all articles
- [ ] add links (and style them)
- [ ] add video yt in mdx

### Phase 6

- [ ] test the site from normal user perspective
- [ ] test user roles

### Firts Release :tada:

---

### Phase 7

- [ ] admin console
- [x] users list
- [x] articles table

### Phase 8

- [ ] graphs

### Phase 9

- [ ] search bar
- [ ] automatic reading
- [ ] comments
- [ ] handle session multiple views

### Final Release :tada: :tada: