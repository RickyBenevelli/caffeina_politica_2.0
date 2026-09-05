"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/Icons";
import { absoluteUrl } from "@/lib/site";

export default function ShareTelegram() {
  const pathname = usePathname();

  return (
    <Link
      href={`https://t.me/share/url?url=${encodeURIComponent(absoluteUrl(pathname))}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Condividi su Telegram"
    >
      <Icons.telegram className="w-8 h-8" />
    </Link>
  );
}
