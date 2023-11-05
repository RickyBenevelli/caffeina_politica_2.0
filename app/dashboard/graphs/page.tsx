import React, { useState } from "react";


import Link from "next/link";
import Image from "next/image";
import AllViewsGraph from "@/components/graphs/AllViewsGraph";
import { compareDesc, format, parseISO } from "date-fns";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

const data = [
  {
    name: "Sun",
    value: 10,
  },
  {
    name: "Mon",
    value: 30,
  },
  {
    name: "Tue",
    value: 100,
  },
  {
    name: "Wed",
    value: 30,
  },
  {
    name: "Thu",
    value: 23,
  },
  {
    name: "Fri",
    value: 34,
  },
  {
    name: "Sat",
    value: 11,
  },
];

export default async function Home() {
  const session = await getAuthSession();
//   const data: any = db.views.findMany();

  return (
    <div className="w-full m-auto">
      <AllViewsGraph data={data} />
    </div>
  );
}
