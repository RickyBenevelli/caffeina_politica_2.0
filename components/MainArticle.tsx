import Link from "next/link";
import Image from "next/image";

import { Article } from "@/.contentlayer/generated";

import { AspectRatio } from "./ui/AspectRatio";

type MainArticleProps = {
  article: Article;
};

export function MainArticle({ article }: MainArticleProps) {
  return (
    <article>
      <Link
        href={`/articles/${article.slug}`}
        className="flex flex-col md:flex-row items-stretch"
      >
        <div className="md:w-1/2 w-full">
          <AspectRatio ratio={16 / 9}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>

        <div className="md:w-1/2 py-4 md:px-2 flex flex-col gap-2 items-start">
          <h3 className="text-2xl md:text-4xl font-semibold">
            {article.title}
          </h3>
          <p className="text-justify">{article.excerpt}</p>
          <p className="font-medium">{article.author}</p>
        </div>
      </Link>
    </article>
  );
}
