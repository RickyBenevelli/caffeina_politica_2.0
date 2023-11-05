import React from "react";

import Link from "next/link";
import Image from "next/image";

import { compareDesc, format, parseISO } from "date-fns";

import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div>
      Ciao
    </div>
  );
}
