import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import MobileMenu from "@/components/MobileMenu";

import Logo from "@/public/logo.png";

import MainNav from "@/components/MainNav";
import { Separator } from "@/components/ui/Separator";

import { UserAccountNavProps } from "@/components/UserAccountNav";

export default async function NavBar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 h-fit bg-white z-30">
      <div className="container h-full py-4 flex items-center justify-between">
        <div className="w-full flex items-center gap-6 md:gap-10">
          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo di Caffeina Politica"
              className="rounded-xl w-28 h-10 md:w-36 lg:w-40 md:h-12 object-cover"
              priority
            />
          </Link>

          <MainNav className="max-sm:hidden" />
        </div>

        <div className="max-sm:hidden">
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
        <div className="sm:hidden">
          {session?.user ? (
            <MobileMenu user={session?.user} />
          ) : null}
        </div>
      </div>

      <Separator />
    </div>
  );
}
