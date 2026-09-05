"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

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
