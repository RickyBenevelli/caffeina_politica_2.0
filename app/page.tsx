import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { authOptions, getAuthSession } from "@/lib/auth";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";

export default async function Home() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);

  return (
    <main className="w-full max-w-5xl min-h-screen pt-20 mx-5 m-auto">
      <Title />
      <Separator />
    </main>
  );
}
