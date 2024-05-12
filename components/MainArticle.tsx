import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Article } from "@/.contentlayer/generated";
import { Skeleton } from "@/components/ui/skeleton";

import { AspectRatio } from "./ui/AspectRatio";
import FirebaseImage from "@/components/FirebaseImage";

type MainArticleProps = {
  article: Article;
};

export function MainArticle({ article }: Readonly<MainArticleProps>) {
  return (
    <article className="my-5">
      <Link
        href={
          article?.externalURL !== undefined
            ? article.externalURL
            : `/articles/${article.slug}`
        }
        className="flex flex-col gap-3 md:gap-6 lg:gap-8 md:flex-row items-stretch"
      >
        <Suspense
          fallback={<Skeleton className="aspect-video w-full md:w-1/2" />}
        >
          <div className="w-full md:w-1/2">
              <FirebaseImage path={article.image} />
          </div>
        </Suspense>

        <div className="md:w-1/2 md:py-0 flex flex-col gap-2 items-start">
          <Suspense
            fallback={
              <div className="w-full flex flex-col justify-start gap-4">
                <Skeleton className="rounded-md w-full h-6" />
                <Skeleton className="rounded-md w-3/4 h-6" />
              </div>
            }
          >
            <h3 className="text-2xl lg:text-3xl font-semibold">
              {article.title}
            </h3>
          </Suspense>
          <Suspense
            fallback={
              <div className="w-full flex flex-col gap-3">
                <Skeleton className="rounded-md w-full h-4" />
                <Skeleton className="rounded-md w-full h-4" />
                <Skeleton className="rounded-md w-full h-4" />
                <Skeleton className="rounded-md w-1/2 h-4" />
              </div>
            }
          >
            <p className="text-justify">{article.excerpt}</p>
          </Suspense>
          <Suspense fallback={<Skeleton className="rounded-md w-1/3 h-4" />}>
            <p className="font-medium">{article.author}</p>
          </Suspense>
        </div>
      </Link>
    </article>
  );
}
