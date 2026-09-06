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
    },
    {
      label: "Eventi",
      href: "/eventi",
      active: pathname === `/eventi`,
    },
    {
      label: "About us",
      href: "/about-us",
      active: pathname === `/about-us`,
    },
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
            route.active ? "font-bold text-black" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
