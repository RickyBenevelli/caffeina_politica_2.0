# Caffeina Politica

## TODO: 
- [ ] think about different strategy of session management: jwt, db

## Development

### Prisma
Add Prisma to the project ```yarn add prisma``` and initialized prisma with ```npx prisma init```
This will create a new file ```/prisma/schema.prisma```
Modify .env file to add the database url.
```npx prisma generate``` will generate the client, and with ```npx prisma studio``` we can see the database. With ```npx prisma db push``` we can push the schema to the database.

### Next auth 
```yarn add next-auth```
```yarn add @next-auth/prisma-adapter```

Documentation [here](https://next-auth.js.org/getting-started/example)

- Add API route

``` js
// /app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }

```

- Uptdate User and Session types in ```/app/types/next-auth.d.ts``` for matching the database schema
- Add Prisma adapter for saving information in db
- export prisma cliente from ```/lib/db.ts```
```$ openssl rand -base64 32```


### shadcn/ui
```npx shadcn-ui@latest init```

Installed Button component but added isLoading prop to it

Added Toast notification ```npx shadcn-ui@latest add toast```


### Lucide react
```yarn add lucide-react```

Added icons to the project and exported them in ```@/components/Icons.tsx```, so we can use them in the project like this: ```<Icons.user />```

```tsx
import { User, LucideProps } from "lucide-react";

export const Icons = {
  user: User,
  gitHub: ({ ...props }: LucideProps) => (...
  ),
  google: (props: LucideProps) => (...
  ),
};

```