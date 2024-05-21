import Link from "next/link";
import Image from "next/image";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";

import Presentazione from "@/components/Presentazione";
import { Icons } from "@/components/Icons";

import Placeholder from "@/public/placeholder.jpeg";
import FirebaseImage from "@/components/FirebaseImage";

const dataFounder = [
  {
    name: "Elia Campanini",
    image: "/profiles/elli.webp",
    description: `Ho ventun anni, studio scienze politiche, sociali e internazionali a Bologna e voglio sempre comprendere il perchè, di tutto. Il mio interesse alla politica, al sociale, all'argomentare e al dibattere si lega anche a una domanda: "la politica" può ancora cambiare qualcosa? A Caffeina Politica cercherò di darmi una risposta e di comprendere se, nonostante le divisioni sempre più marcate nella società, il confronto è ancora possibile.`
  },
  {
    name: "Gabriele Consolini",
    image: "/profiles/cons.webp",
    description: "Mi chiamo Gabriele, e ho 24 anni. Sono convinto che sia fondamentale, nella vita di tutti i giorni, e quindi anche per approcciarsi a temi di politica e attualità, partire da un dibattito informato, basato sui dati reali. Per questo credo in Caffeina Politica, per approcciarsi a qualsiasi tema in maniera non ideologica, ma razionale."
  },
  {
    name: "Gaia Foschi",
    image: "/profiles/gaia.webp",
    description: "Mi chiamo Gaia, ho 21 anni e studio Sviluppo e Cooperazione Internazionale a Bologna. Mi sono interessata inizialmente ai temi sociali, come i diritti umani, per poi arrivare alla politica, essendo strettamente collegati. A Caffeina politica affrontiamo temi molto importanti, per comprendere punti di vista molto diversi, anche attraverso dati e grafici."
  },
  {
    name: "Riccardo Benevelli",
    image: "/profiles/ricky.webp",
    description: `Studio informatica a Trento e faccio scout nel gruppo di RE2. Ritengo l'interessamento politico e civile un valore e un dovere per essere cittadini attivi all'interno della nostra società. Tramite Caffeina Politica desidero portare avanti un dibattito e un confronto costruttivo, che possano arricchirmi e farmi vedere le cose da nuovi punti di vista`
  },
]

export default async function AboutUs() {

  return (
    <main className="w-full max-w-5xl min-h-screen px-6">
      <Title />

      <h2 className="w-full text-left font-bold text-slate-700 text-4xl py-2">
        Il progetto
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-4 py-2">
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <FirebaseImage path={"/project/foto1.webp"} className="rounded-md object-cover h-full w-full" />
          </AspectRatio>
        </div>
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <FirebaseImage path={"/project/foto2.webp"} className="rounded-md object-cover h-full w-full" />
          </AspectRatio>
        </div>
        <div className="md:w-1/3">
          <AspectRatio ratio={16 / 9} className="">
            <FirebaseImage path={"/project/foto3.webp"} className="rounded-md object-cover h-full w-full" />
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

      {dataFounder.map((founder, index) => (
          <Presentazione key={index} reverse={(index+1) % 2 === 0} founder={founder}/>
      ))}


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
