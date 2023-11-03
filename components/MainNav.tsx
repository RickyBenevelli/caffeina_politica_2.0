"use client";
import React from "react";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes: NavItem[] = [
    {
      label: "Magazine",
      href: "/",
      active: pathname === `/`,
    },
    {
      label: "About",
      href: "/about",
      active: pathname === `/about`,
    },
    {
      label: "Contact",
      href: "/contact",
      active: pathname === `/contact`,
    },
  ];

  return (
    <nav
      className={cn("w-full gap-10 md:flex items-center", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}