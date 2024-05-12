"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/Icons";


const ShareWhatsapp = () => {
  const pathname = usePathname();

  return (
    <Link
      href={`https://t.me/share/url?url=${process.env["BASE_URL"]+pathname}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.telegram className="w-8 h-8" />
    </Link>
  );
};

export default ShareWhatsapp;
