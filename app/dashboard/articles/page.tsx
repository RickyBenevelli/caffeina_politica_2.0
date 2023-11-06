import React from "react";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

import { columns, Article } from "@/app/dashboard/articles/columns";
import { DataTable } from "@/components/ui/DataTable";

import { allArticles } from "@/.contentlayer/generated";

export default async function DashboardArticles() {
  const session = await getAuthSession();
  const views = await db.views.findMany();

  const data: Article[] = allArticles.map((article) => {
    return {
      slug: article.slug,
      title: article.title,
      author: article.author[0], // TODO: gestire gli autori multipli
      views: views.filter((view) => view.slug === article.slug).length,
      publishedAt: new Date(article.date),
      timeToRead: article.readingTime,
    };
  });

  return (
    <div className="w-full m-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
