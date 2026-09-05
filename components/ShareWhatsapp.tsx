"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/Icons";
import { absoluteUrl } from "@/lib/site";

export default function ShareWhatsapp() {
  const pathname = usePathname();

  return (
    <Link
      href={`https://wa.me/?text=${encodeURIComponent(absoluteUrl(pathname))}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Condividi su WhatsApp"
    >
      <Icons.whatsapp className="w-8 h-8" />
    </Link>
  );
}
