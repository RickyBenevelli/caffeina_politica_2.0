import React, {Suspense} from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/AspectRatio";
import { Article } from "@/.contentlayer/generated";

import Views from "@/components/Views";
import FirebaseImage from "@/components/FirebaseImage";
import {Skeleton} from "@/components/ui/skeleton";

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
      className={cn("w-full flex flex-col md:flex-row", className)}
      href={`/articles/${article.slug}`}
    >
      <div className="md:w-1/3 py-2 flex items-start justify-center">
        <AspectRatio ratio={16 / 9}>
          <Suspense
              fallback={<Skeleton className="aspect-video rounded-md w-full" />}
          >
            <FirebaseImage path={article.image} alt={article.title}/>
          </Suspense>
        </AspectRatio>
      </div>

      <div className="md:w-2/3 py-2 md:pl-4 flex flex-col justify-start items-start gap-2">
        <h3 className="font-medium text-xl">{article.title}</h3>
        <p className="text-justify">{article.excerpt}</p>
        <p className="font-medium">
          {article.author.map((author, index) => (
            <span key={index}>
              {author}
              {index !== article.author.length - 1 && ", "}
            </span>
          ))}
        </p>
        <Views slug={article.slug} show={false} />
      </div>
    </Link>
  );
}
