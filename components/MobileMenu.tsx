"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

import { User } from "next-auth";

import { Icons } from "@/components/Icons";
import MainNav from "@/components/MainNav";
import { UserAvatar } from "@/components/UserAvatar";

export interface MobileMenuProps {
  user?: Pick<User, "name" | "image" | "email">;
}

export default function MobileMenu({ user }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "auto";
      document.body.style.userSelect = "auto";
    } else {
      document.body.style.overflow = "hidden"; // disable scroll
      document.body.style.userSelect = "none"; // disable mouse selection
    }
  };

  return (
    <>
      <nav>
        <Icons.menu onClick={handleMenu} />
      </nav>
      <div
        className={`absolute inset-0 w-screen h-[100lvh] ${isOpen ? "" : "hidden"}`}
        onClick={handleMenu}
      />
      <div
        className={`absolute h-[100lvh] top-[4.5rem] bottom-0 right-0 w-[300px] flex flex-col items-center justify-between pt-10 pb-16 bg-slate-100 z-10 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <MainNav onClick={handleMenu} />
        <div className="w-full flex justify-center gap-5 px-2 py-10">
          {user ? (
            <>
              <UserAvatar
                user={{ name: user.name || null, image: user.image || null }}
                className="h-10 w-10"
              />
              <div className="flex flex-col space-y-1 leading-none">
                {user.name && <p className="font-medium">{user.name}</p>}
                {user.email && (
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    {user.email}
                  </p>
                )}
              </div>
            </>
          ) : (
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "default" }),
                "px-4 w-[200px] bg-orange-500"
              )}
              onClick={handleMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
