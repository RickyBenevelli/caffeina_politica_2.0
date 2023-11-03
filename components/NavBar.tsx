import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";

import MainNav from "@/components/MainNav";
import { Separator } from "@/components/ui/Separator";

export default async function NavBar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 h-fit bg-white z-20">
      <div className="container max-w-7xl h-full mx-auto py-4 flex items-center gap-6 md:gap-10">
        <Link href="/" className="font-bold text-lg">
          Caffeina
        </Link>

        <MainNav />

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 text-zinc-800"
            )}
          >
            Login
          </Link>
        )}
      </div>

      <Separator />
    </div>
  );
}
