import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { authOptions, getAuthSession } from "@/lib/auth";

export default async function Home() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <Link href="/sign-in">Sign In</Link>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      <Link href="/prova">Prova</Link>
      <Link href="/sign-up">Sign Up</Link>

    </main>
  );
}
