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

import { allArticles, Article } from "@/.contentlayer/generated";

import Placeholder from "@/public/placeholder.jpeg";

export default async function Home() {
  const session = await getAuthSession();
  // const session = await getServerSession(authOptions);

  return (
    <main className="w-full max-w-5xl min-h-screen px-10 m-auto">
      <Title />

      <h2 className="w-full text-left font-bold text-slate-700 text-4xl">
        Il progetto
      </h2>

      <div className="w-full flex gap-4 py-2">
        <div className="w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        </div>
        <div className="w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        </div>
        <div className="w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        </div>
        
      </div>

      <div className="w-full text-justify">
        Caffeina Politica è un progetto da giovani e per giovani, nata
        dall&apos;idea di quattro studenti universitari di affrontare un dialogo
        e un dibattito più approfondito sulle tamatiche sociale e politiche ad
        oggi più importanti. Crediamo che ogni discussione debba fondarsi su
        dati reali, senza ideologismi e pregiudizi, in modo apartitico e
        totalmente gratuito. Ci troviamo ogni ultima domenica del mese per
        analizzare tematiche sempre diverse, con approfondimenti o ospiti di
        eccezione a precedere l&apos;immancabile dibattito tra tutti i
        partecipanti. Il nostro progetto è rivolto a tutti gli appassionati di
        politica e a coloro che desiderano approfondire questi argomenti.
      </div>
    </main>
  );
}
