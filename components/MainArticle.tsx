import Link from "next/link";
import Image from "next/image";

import { Article } from "@/.contentlayer/generated";

import { AspectRatio } from "./ui/AspectRatio";

type MainArticleProps = {
  article: Article;
};

export function MainArticle({ article }: MainArticleProps) {
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
        <div className="w-full md:w-1/2">
          {/* <AspectRatio ratio={16 / 9} className=""> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="aspect-video rounded-md object-cover"
            />
          {/* </AspectRatio> */}
        </div>

        <div className="md:w-1/2 md:py-0 flex flex-col gap-2 items-start">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            {article.title}
          </h3>
          <p className="text-justify">{article.excerpt}</p>
          <p className="font-medium">{article.author}</p>
        </div>
      </Link>
    </article>
  );
}
