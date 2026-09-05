"use client";

import React from "react";
import toast from "react-hot-toast";

import { cn } from "@/lib/utils";

export default function Petizione({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const idString = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const handleTitleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${idString}`;
    window.location.hash = idString;
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("URL copiato negli appunti!"))
      .catch((err) => console.error("Errore durante la copia dell'URL:", err));
  };

  return (
    <div className={cn("flex flex-col pt-8", className)} id={idString}>
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-xl font-bold cursor-pointer" onClick={handleTitleClick}>
          {title}
          {isHovered && <span className="ml-2 text-gray-500">#</span>}
        </p>
      </div>
      <p className="text-md text-justify py-2">{children}</p>
    </div>
  );
}
