"use client";

import { useState } from "react";

import { Icons } from "@/components/Icons";
import MainNav from "@/components/MainNav";

export default function MobileMenu() {
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
        {/* Negative margin widens the tap target to 44px without moving the layout. */}
        <button
          type="button"
          onClick={handleMenu}
          aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          className="-m-2.5 p-2.5 flex items-center justify-center"
        >
          <Icons.menu aria-hidden="true" />
        </button>
      </nav>
      <div
        className={`absolute inset-0 w-screen h-[100lvh] ${isOpen ? "" : "hidden"}`}
        onClick={handleMenu}
        aria-hidden="true"
      />
      <div
        id="menu-mobile"
        className={`absolute h-[100lvh] top-[4.5rem] bottom-0 right-0 w-[300px] flex flex-col items-center justify-between pt-10 pb-16 bg-slate-100 z-10 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <MainNav onClick={handleMenu} />
      </div>
    </>
  );
}
