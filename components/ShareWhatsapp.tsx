"use client";
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/Icons";

const ShareWhatsapp = () => {
  //   const pathname = usePathname();
  //   const params = useParams();
  //   console.log(pathname, params);
  return (
    <Link
      href={`https://wa.me/?text=${window.location.href}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.whatsapp className="w-8 h-8" />
    </Link>
  );
};

export default ShareWhatsapp;
