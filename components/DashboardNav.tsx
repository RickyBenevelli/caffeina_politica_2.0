"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { DashboardNavItem } from "@/types";

export default function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const baseUrl = "/dashboard";
  const routes: DashboardNavItem[] = [
    {
      label: "Users",
      href: "/",
      active: pathname === `${baseUrl}`,
    },
    {
      label: "Articles",
      href: "/articles",
      active: pathname === `${baseUrl}/articles`,
    },
    {
      label: "Graphs",
      href: "/graphs",
      active: pathname === `${baseUrl}/graphs`,
    },
  ];

  return (
    <nav
      className={cn("w-full gap-10 flex flex-col items-center", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={`${baseUrl}/${route.href}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            route.active ? "bg-accent text-accent-foreground" : ""
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
