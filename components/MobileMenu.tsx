"use client";

import { useState } from "react";

import { User } from "next-auth";

import { Icons } from "@/components/Icons";
import MainNav from "@/components/MainNav";
import { UserAvatar } from "@/components/UserAvatar";

import { UserAccountNavProps } from "@/components/UserAccountNav";

export default function MobileMenu({ user }: UserAccountNavProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <Icons.menu onClick={() => setIsOpen(!isOpen)} />
      </nav>
      <div
        className={`absolute h-screen top-[4.5rem] bottom-0 right-0 w-[300px] flex flex-col items-center pt-20 bg-slate-200 z-10 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <MainNav />
        <div className="w-full flex justify-center gap-5 px-2 py-10">
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
        </div>
      </div>
    </>
  );
}
