import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./ui/AspectRatio";
import { Article } from "@/.contentlayer/generated";
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
      className={cn("flex flex-col gap-4 py-2 px-3 md:w-1/3", className)}
      href={`/articles/${article.slug}`}
    >
      <AspectRatio ratio={16 / 9}>
        <img
          className="rounded-md object-cover h-full w-full"
          src={article.image}
          alt={article.title}
        />
      </AspectRatio>
      <div className="flex flex-col justify-start items-start gap-2">
        <Views slug={article.slug} />
        <h3 className="font-medium text-xl">{article.title}</h3>
        <p className="text-justify">{article.excerpt}</p>
        <p className="font-medium">{article.author}</p>
      </div>
    </Link>
  );
}
