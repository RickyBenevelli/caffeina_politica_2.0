import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import AllViewsGraph from "@/components/graphs/AllViewsGraph";
import { compareAsc, format, parseISO } from "date-fns";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { Views } from "@prisma/client";

export type ViewsComputedData = {
  day: string;
  number: number;
};

export default async function Graph() {
  const session = await getAuthSession();
  const data: Views[] = await db.views.findMany();

  const computedData = data.reduce((acc, item) => {
    const timestamp = new Date(item.time);
    // const dayKey = timestamp.toISOString().split("T")[0]; // Estrai il giorno dalla data

    const dayKey = format(timestamp, "d MMM yyyy");

    if (!acc.has(dayKey)) {
      acc.set(dayKey, 1);
    } else {
      acc.set(dayKey, (acc.get(dayKey) as number) + 1);
    }

    return acc;
  }, new Map<string, number>());

  const resultArray = Array.from(computedData, ([day, number]:[day:string, number:number]) => ({
    day,
    number,
  }));
  resultArray.sort((a:ViewsComputedData, b:ViewsComputedData) => compareAsc(new Date(a.day), new Date(b.day)));

  return (
    <div className="w-full m-auto">
      <AllViewsGraph data={resultArray} />
    </div>
  );
}
