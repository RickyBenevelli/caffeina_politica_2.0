import React from "react";

import { db } from "@/lib/db";

import { columns } from "@/app/dashboard/columns";
import { DataTable } from "@/components/ui/DataTable";

export default async function DashboardUser() {
  const data = await db.user.findMany();

  return (
    <div className="w-full m-auto">
      <DataTable columns={columns} data={data as any} />
    </div>
  );
}
