"use client";

import React from "react";

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
  const [copied, setCopied] = React.useState(false);

  const idString = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const handleTitleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${idString}`;
    window.location.hash = idString;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Errore durante la copia dell'URL:", error);
    }
  };

  return (
    <div className={cn("flex flex-col pt-8", className)} id={idString}>
      <button
        type="button"
        onClick={handleTitleClick}
        className="text-xl font-bold text-left group flex items-center gap-2"
      >
        {title}
        <span className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
          #
        </span>
        {copied && <span className="text-sm font-normal text-gray-500">Link copiato</span>}
      </button>
      <p className="text-md text-justify py-2">{children}</p>
    </div>
  );
}
