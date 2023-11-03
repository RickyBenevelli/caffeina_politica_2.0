import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { compareDesc, format, parseISO } from "date-fns";

import { authOptions, getAuthSession } from "@/lib/auth";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";

import { allArticles, Article } from "@/.contentlayer/generated";

export default async function Home() {
  const session = await getAuthSession();
  // const session = await getServerSession(authOptions);

  const articles = allArticles.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <main className="w-full max-w-5xl min-h-screen px-10 m-auto">
      <Title />
      <Separator />
      <div className="">

        <div className="flex items-stretch">
          <div className="w-1/2 py-4 px-2">
            <AspectRatio ratio={16 / 9}>
              <Link href={`/articles/${articles[0].slug}`}>
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="rounded-md object-cover"
                />
              </Link>
            </AspectRatio>
          </div>
          <div className="w-1/2 py-4 px-2 flex flex-col gap-2 items-start">
            <h3 className="text-4xl font-semibold">{articles[0].title}</h3>
            <p className="text-justify">{articles[0].excerpt}</p>
            <p className="font-medium">{articles[0].author}</p>
          </div>
        </div>

        <div className="">

        </div>
      </div>
    </main>
  );
}
