import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi",
  description:
    "Gli incontri di Caffeina Politica: dibattiti pubblici con esperti e cittadini.",
  alternates: { canonical: "/eventi" },
  openGraph: {
    title: "Eventi",
    description:
      "Gli incontri di Caffeina Politica: dibattiti pubblici con esperti e cittadini.",
    url: "/eventi",
  },
};

import Image from "next/image";

import { compareDesc, parseISO } from "date-fns";


import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { EventCard, CustomEvent } from "@/components/EventCard";
import { TodaySeparator } from "@/components/TodaySeparator";

import Events from "@/json/events.json";

// Revalidate hourly so "today" and the upcoming/past split do not freeze at build time.
export const revalidate = 3600;

export default async function Eventi() {

  const toBeAnnounced = Events.filter((event: CustomEvent) => !event.dateAndTime);
  const scheduled = Events.filter((event: CustomEvent) => event.dateAndTime);

  scheduled.sort((a: CustomEvent, b: CustomEvent) => {
    return compareDesc(parseISO(a.dateAndTime), parseISO(b.dateAndTime));
  });
  const upcomingEvents = scheduled.filter((event: CustomEvent) => {
    return compareDesc(parseISO(event.dateAndTime), new Date()) === -1;
  });
  const pastEvents = scheduled.filter((event: CustomEvent) => {
    return compareDesc(parseISO(event.dateAndTime), new Date()) === 1;
  });

  return (
    <main className="w-full max-w-5xl min-h-screen px-6">
      <Title />
      <h2 className="text-2xl font-medium text-center">
        Lo spazio di dibattito pubblico
      </h2>
      <h2 className="text-2xl font-medium text-center">
        Da giovani per giovani
      </h2>
      <div className="w-full mt-10">
        
        <AspectRatio ratio={16 / 9} >
            <Image src="/events/eventsCover.webp" alt="immagine degli eventi" fill priority sizes="(min-width: 1024px) 976px, 100vw" className="rounded-md object-cover"/>
        </AspectRatio>
      </div>
      <div className="w-full py-10">
        {toBeAnnounced.map((event: CustomEvent) => {
          return <EventCard key={event.title} event={event} />;
        })}

        {upcomingEvents.length > 0 &&
          upcomingEvents.map((event: CustomEvent) => {
            return <EventCard key={event.dateAndTime} event={event} />;
          })}
        
        <TodaySeparator />

        {pastEvents.length > 0 &&
          pastEvents.map((event: CustomEvent) => {
            return <EventCard key={event.dateAndTime} event={event} />;
          })}
      </div>
    </main>
  );
}
