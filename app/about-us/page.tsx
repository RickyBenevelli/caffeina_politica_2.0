import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Chi siamo: un gruppo di giovani che porta dati e fatti nel dibattito pubblico.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About us",
    description:
      "Chi siamo: un gruppo di giovani che porta dati e fatti nel dibattito pubblico.",
    url: "/about-us",
  },
};

import Link from "next/link";
import Image from "next/image";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";

import Presentazione from "@/components/Presentazione";
import { Icons } from "@/components/Icons";

// Revalidate daily so the ages computed from birthYear stay current.
export const revalidate = 86400;

const dataFounder = [
  {
    name: "Elia Campanini",
    birthYear: 2002,
    image: "/profiles/elli.webp",
    description: `Ho {eta} anni, mi sono laureato in scienze politiche, sociali e internazionali a Bologna e voglio sempre comprendere il perchè, di tutto. Il mio interesse alla politica, al sociale, all'argomentare e al dibattere si lega anche a una domanda: "la politica" può ancora cambiare qualcosa? A Caffeina Politica cercherò di darmi una risposta e di comprendere se, nonostante le divisioni sempre più marcate nella società, il confronto è ancora possibile.`
  },
  {
    name: "Gabriele Consolini",
    birthYear: 1999,
    image: "/profiles/cons.webp",
    description: "Mi chiamo Gabriele, e ho {eta} anni. Sono convinto che sia fondamentale, nella vita di tutti i giorni, e quindi anche per approcciarsi a temi di politica e attualità, partire da un dibattito informato, basato sui dati reali. Per questo credo in Caffeina Politica, per approcciarsi a qualsiasi tema in maniera non ideologica, ma razionale."
  },
  {
    name: "Gaia Foschi",
    birthYear: 2003,
    image: "/profiles/gaia.webp",
    description: "Mi chiamo Gaia, ho {eta} anni e mi sono laureata in Sviluppo e Cooperazione Internazionale a Bologna. Mi sono interessata inizialmente ai temi sociali, come i diritti umani, per poi arrivare alla politica, essendo strettamente collegati. A Caffeina politica affrontiamo temi molto importanti, per comprendere punti di vista molto diversi, anche attraverso dati e grafici."
  },
  {
    name: "Riccardo Benevelli",
    birthYear: 2003,
    image: "/profiles/ricky.webp",
    description: `Mi sono laureato in informatica a Trento e faccio scout nel gruppo di RE2. Ritengo l'interessamento politico e civile un valore e un dovere per essere cittadini attivi all'interno della nostra società. Tramite Caffeina Politica desidero portare avanti un dibattito e un confronto costruttivo, che possano arricchirmi e farmi vedere le cose da nuovi punti di vista`
  },
]

export default async function AboutUs() {
  const currentYear = new Date().getFullYear();
  const founders = dataFounder.map((founder) => ({
    ...founder,
    description: founder.description.replace(
      "{eta}",
      String(currentYear - founder.birthYear)
    ),
  }));

  return (
    <main className="w-full max-w-5xl min-h-screen px-6">
      <Title />

      <h2 className="w-full text-left font-bold text-slate-700 text-4xl py-2">
        Il progetto
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-4 py-2">
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image src="/project/foto1.webp" alt="foto del progetto Caffeina Politica" fill sizes="(min-width: 1024px) 330px, (min-width: 768px) 33vw, 100vw" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image src="/project/foto2.webp" alt="foto del progetto Caffeina Politica" fill sizes="(min-width: 1024px) 330px, (min-width: 768px) 33vw, 100vw" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <Image src="/project/foto3.webp" alt="foto del progetto Caffeina Politica" fill sizes="(min-width: 1024px) 330px, (min-width: 768px) 33vw, 100vw" className="rounded-md object-cover" />
          </AspectRatio>
        </div>
        
      </div>

      <div className="w-full text-justify pt-3 pb-5">
        Caffeina Politica è un progetto di giovani per giovani, nato dall&apos;idea di quattro studenti universitari e
        che ha coinvolto complessivamente più di cento giovani di Reggio e presto si allargherà anche a Bologna.
        <br/>
        Crediamo che questo spazio di discussione debba fondarsi su dati reali ed esperienze, senza ideologismi e
        pregiudizi, in modo apartitico e totalmente gratuito. Il nostro obiettivo è che questa visione possa diventare
        un approccio più presente nella società.
        <br/>
        Nasce dalla volontà di affrontare un dialogo e un dibattito più approfondito sulle tematiche sociali e politiche
        oggi più importanti.
        <br/>
        Ai nostri incontri partiamo sempre da approfondimenti o ospiti di eccezione a precedere l&apos;immancabile
        dibattito tra tutti i partecipanti. Il nostro progetto è rivolto a tutti gli appassionati di politica, persone
        interessate all’attualità o al sociale e a coloro che desiderano approfondire questi argomenti o ascoltare.
      </div>

      <h2 className="w-full text-left font-bold text-slate-700 text-4xl py-2">
        About us
      </h2>

      {founders.map((founder, index) => (
          <Presentazione key={founder.name} reverse={(index+1) % 2 === 0} founder={founder}/>
      ))}

      <div className="w-full text-justify pt-3 pb-5">
        Accanto a noi quattro, Caffeina Politica va avanti grazie ad altri ragazzi e ragazze che
        collaborano agli incontri, alla ricerca e agli articoli del magazine.
      </div>

      <h2 className="w-full text-left font-bold text-slate-700 text-4xl py-2">
        Social
      </h2>

      <div className="w-full px-10 m-auto my-10 flex flex-col sm:flex-row justify-center gap-28 text-slate-700">
        <Link className="flex flex-col items-center" href="https://www.instagram.com/caffeina_politica/" target="_blank">
          <Icons.instagram className="w-16 h-16" />
          <p className="text-xs py-2">@caffeina_politica</p>
        </Link>
        <Link className="flex flex-col items-center" href="https://t.me/CaffeinaPolitica" target="_blank">
          <Icons.telegram className="w-16 h-16" />
          <p className="text-xs py-2">t.me/CaffeinaPolitica</p>
        </Link>
        <Link className="flex flex-col items-center" href="mailto:caffeinapolitica@gmail.com" target="_blank">
          <Icons.mail className="w-16 h-16" />
          <p className="text-xs py-2">caffeinapolitica@gmail.com</p>
        </Link>
      </div>

    </main>
  );
}
