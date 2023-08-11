import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "./ui/Button";
import { navConfig } from "@/config/navitems";
import { UserAccountNav } from "./UserAccountNav";

export default async function NavBar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 h-fit py-2 bg-transparent z-20">
      <div className="container max-w-7xl h-full mx-auto flex items-center gap-6 md:gap-10">
        <Link href="/" className="font-bold">
          Caffeina
        </Link>

        {navConfig.mainNav ? (
          <nav className="gap-6 md:flex w-full items-center">
            {navConfig.mainNav.map((item: NavItem) => (
              <Link href={item.href} key={item.title} className="">
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link
            href="http://localhost:3000/sign-in"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 text-zinc-800"
            )}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
