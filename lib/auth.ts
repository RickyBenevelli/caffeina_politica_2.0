import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

import { db } from "@/lib/db";
import { checkAuthorisation } from "@/lib/role";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          // Roles are assigned only from the database, never from the provider.
          role: "USER",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "USER",
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

/**
 * Throws unless the current request belongs to an authenticated ADMIN.
 * Use at the top of every privileged server action.
 */
export async function requireAdmin() {
  const session = await getAuthSession();
  if (!session?.user || !checkAuthorisation(session.user, "ADMIN")) {
    throw new Error("Non autorizzato");
  }
  return session.user;
}
