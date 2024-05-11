import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { compareDesc, format, parseISO } from "date-fns";

import { authOptions, getAuthSession } from "@/lib/auth";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";
import CardArticle2 from "@/components/CardArticle2";
import CardArticle3 from "@/components/CardArticle3";
import { MainArticle } from "@/components/MainArticle";
import { Skeleton } from "@/components/ui/skeleton"

import { allArticles, Article } from "@/.contentlayer/generated";

export default async function Home() {

  const articles = allArticles.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="w-full max-w-5xl min-h-screen px-6">
      <Title />
      <Separator />
      <div>
        {/* contenitore articoli  */}
        <MainArticle article={articles[0]} />
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-stretch">
          <CardArticle2 article={articles[1]} />
          <CardArticle2 article={articles[2]} />
          <CardArticle2 article={articles[3]} />
        </div>
        <Separator />
        <div className="pt-6 flex flex-col gap-4">
          {articles.slice(4).map((article: Article) => (
            <CardArticle3 key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
