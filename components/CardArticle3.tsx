import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Article } from "@/.contentlayer/generated";

export interface CardArticle3Props extends React.HTMLAttributes<HTMLDivElement> {
  article: Article;
}

export default function CardArticle3({ article, className }: CardArticle3Props) {
  return (
    <Link
      className={cn("w-full flex flex-col md:flex-row", className)}
      href={`/articles/${article.slug}`}
    >
      <div className="md:w-1/3 py-2 flex items-start justify-center">
        <div className="relative aspect-video w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 330px, (min-width: 768px) 33vw, 100vw"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="md:w-2/3 py-2 md:pl-4 flex flex-col justify-start items-start gap-2">
        <h3 className="font-medium text-xl">{article.title}</h3>
        <p className="text-justify">{article.excerpt}</p>
        <p className="font-medium">{article.author.join(", ")}</p>
      </div>
    </Link>
  );
}
