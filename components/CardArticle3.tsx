import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/AspectRatio";
import { Article } from "@/.contentlayer/generated";

import Views from "@/components/Views";

export interface CardArticle2Props
  extends React.HTMLAttributes<HTMLDivElement> {
  article: Article;
}

export default function CardArticle3({
  article,
  className,
  ...props
}: CardArticle2Props) {
  return (
    <Link
      className={cn("w-full flex", className)}
      href={`/articles/${article.slug}`}
    >
      <div className="w-1/3 py-2 flex items-start justify-center">
        <AspectRatio ratio={16 / 9}>
          <img
            className="rounded-md object-cover h-full w-full"
            src={article.image}
            alt={article.title}
          />
        </AspectRatio>
      </div>

      <div className="w-2/3 py-2 pl-4 flex flex-col justify-start items-start gap-2">
        <h3 className="font-medium text-xl">{article.title}</h3>
        <p className="text-justify">{article.excerpt}</p>
        <p className="font-medium">{article.author}</p>
        <Views slug={article.slug} />
      </div>
    </Link>
  );
}