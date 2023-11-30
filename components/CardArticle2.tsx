import React, { Suspense } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./ui/AspectRatio";
import { Article } from "@/.contentlayer/generated";
import { Skeleton } from "@/components/ui/skeleton";
import Views from "@/components/Views";

export interface CardArticle2Props
  extends React.HTMLAttributes<HTMLDivElement> {
  article: Article;
}

export default function CardArticle2({
  article,
  className,
  ...props
}: CardArticle2Props) {
  return (
    <Link
      className={cn("flex flex-col gap-4 py-2 md:w-1/3", className)}
      href={`/articles/${article.slug}`}
    >
      <AspectRatio ratio={16 / 9}>
        <Suspense
          fallback={<Skeleton className="aspect-video rounded-md w-full" />}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-md object-cover h-full w-full"
            src={article.image}
            alt={article.title}
          />
        </Suspense>
      </AspectRatio>
      <div className="flex flex-col justify-start items-start gap-2">
        <Views slug={article.slug} show={false} />
        <Suspense
          fallback={
            <div className="w-full flex flex-col justify-start gap-3">
              <Skeleton className="rounded-md w-full h-5" />
              <Skeleton className="rounded-md w-3/4 h-5" />
            </div>
          }
        >
          <h3 className="font-medium text-xl">{article.title}</h3>
        </Suspense>
        <Suspense
          fallback={
            <div className="w-full flex flex-col justify-start gap-3">
              <Skeleton className="rounded-md w-full h-4" />
              <Skeleton className="rounded-md w-full h-4" />
              <Skeleton className="rounded-md w-full h-4" />
              <Skeleton className="rounded-md w-1/2 h-4" />
            </div>
          }
        >
          <p className="text-justify">{article.excerpt}</p>
        </Suspense>
        <Suspense fallback={<Skeleton className="rounded-md w-1/2 h-4" />}>
          <p className="font-medium">{article.author}</p>
        </Suspense>
      </div>
    </Link>
  );
}
