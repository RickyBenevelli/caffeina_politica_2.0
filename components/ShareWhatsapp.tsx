"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/Icons";

const ShareWhatsapp = () => {
  const pathname = usePathname();

  return (
    <Link
      href={`https://wa.me/?text=${process.env["BASE_URL"]+pathname}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.whatsapp className="w-8 h-8" />
    </Link>
  );
};

export default ShareWhatsapp;
