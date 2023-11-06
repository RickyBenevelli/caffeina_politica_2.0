import React from "react";

import Link from "next/link";
import Image from "next/image";

import { compareDesc, format, parseISO } from "date-fns";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

import { columns } from "@/app/dashboard/columns";
import { DataTable } from "@/components/ui/DataTable";

export default async function DashboardUser() {
  const session = await getAuthSession();
  const data = await db.user.findMany();

  return (
    <div className="w-full m-auto">
      <DataTable columns={columns} data={data as any} />
    </div>
  );
}
