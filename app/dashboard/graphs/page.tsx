import React from "react";

import AllViewsGraph from "@/components/graphs/AllViewsGraph";
import ArticleViewsGraph from "@/components/graphs/ArticleViewsGraph";
import ViewsPerArticle from "@/components/graphs/ViewsPerArticle";
import { compareAsc, format } from "date-fns";

import { db } from "@/lib/db";
import { Views } from "@prisma/client";

export type ViewsComputedData = {
  day: string;
  number: number;
};

export default async function Graph() {
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

  const resultArray = Array.from(
    computedData,
    ([day, number]: [day: string, number: number]) => ({
      day,
      number,
    })
  );
  resultArray.sort((a: ViewsComputedData, b: ViewsComputedData) =>
    compareAsc(new Date(a.day), new Date(b.day))
  );

  const singleArticleData = Array.from(
    data
      .filter((item) => item.slug === "il-caso-assange")
      .reduce((acc, item) => {
        const timestamp = new Date(item.time);
        // const dayKey = timestamp.toISOString().split("T")[0]; // Estrai il giorno dalla data

        const dayKey = format(timestamp, "d MMM yyyy");

        if (!acc.has(dayKey)) {
          acc.set(dayKey, 1);
        } else {
          acc.set(dayKey, (acc.get(dayKey) as number) + 1);
        }

        return acc;
      }, new Map<string, number>()),
    ([day, number]: [day: string, number: number]) => ({
      day,
      number,
    })
  ).sort((a: ViewsComputedData, b: ViewsComputedData) =>
    compareAsc(new Date(a.day), new Date(b.day))
  );

  const viewsPerArticleData = Array.from(
    data.reduce((acc, item) => {
      if (!acc.has(item.slug)) {
        acc.set(item.slug, 1);
      } else {
        acc.set(item.slug, (acc.get(item.slug) as number) + 1);
      }

      return acc;
    }, new Map<string, number>()),
    ([slug, numberOfViews]: [slug: string, numberOfViews: number]) => ({
      slug,
      numberOfViews,
    })
  );

  return (
    <div className="w-full m-auto">
      <h3 className="text-xl font-bold text-center py-5">All views</h3>
      <AllViewsGraph data={resultArray} />

      <h3 className="text-xl font-bold text-center py-5">Views of &quot;Il caso Assange&quot;</h3>
      <ArticleViewsGraph data={singleArticleData} />

      <h3 className="text-xl font-bold text-center py-5">Views per Article</h3>
      <ViewsPerArticle data={viewsPerArticleData} />
    </div>
  );
}
