"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

import { checkAuthorisation } from "@/lib/role";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const { data: session, status } = useSession();

  const routes: NavItem[] = [
    {
      label: "Magazine",
      href: "/",
      active: pathname === `/`,
      role: "USER",
    },
    {
      label: "Eventi",
      href: "/eventi",
      active: pathname === `/eventi`,
      role: "USER",
    },
    {
      label: "About us",
      href: "/about-us",
      active: pathname === `/about-us`,
      role: "USER",
    },{
      label: "Firma",
      href: "/firma",
      active: pathname === `/firma`,
      role: "USER",
      baseColor: "bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 bg-clip-text text-transparent",
    },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    //   active: pathname === `/dashboard`,
    //   role: "ADMIN",
    // },
  ];

  return (
    <nav
      className={cn(
        "flex flex-col sm:flex-row items-center gap-6 md:gap-10",
        className
      )}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            `max-sm:text-lg font-medium transition-colors hover:text-primary`,
            route.active
              ? "font-bold text-black dark:text-white"
              : `text-muted-foreground ${route.baseColor}`
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
