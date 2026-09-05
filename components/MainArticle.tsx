import Link from "next/link";
import Image from "next/image";

import type { Article } from "@/.velite";

type MainArticleProps = {
  article: Article;
};

export function MainArticle({ article }: Readonly<MainArticleProps>) {
  return (
    <article className="my-5">
      <Link
        href={article.externalURL ?? `/articles/${article.slug}`}
        className="flex flex-col gap-3 md:gap-6 lg:gap-8 md:flex-row items-stretch"
      >
        <div className="relative aspect-video w-full md:w-1/2 shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 100vw"
            className="rounded-md object-cover"
          />
        </div>
        <div className="md:w-1/2 md:py-0 flex flex-col gap-2 items-start">
          <h3 className="text-2xl lg:text-3xl font-semibold">{article.title}</h3>
          <p className="text-justify">{article.excerpt}</p>
          <p className="font-medium">{article.author.join(", ")}</p>
        </div>
      </Link>
    </article>
  );
}
