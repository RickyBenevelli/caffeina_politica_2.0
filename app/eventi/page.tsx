import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { compareDesc, format, parseISO } from "date-fns";

import { authOptions, getAuthSession } from "@/lib/auth";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";
import { EventCard } from "@/components/EventCard";
import { CustomEvent } from "@/components/EventCard";
import { TodaySeparator } from "@/components/TodaySeparator";

import Events from "@/json/events.json";
import EventiImage from "@/public/EventiImage.webp";

export default async function Eventi() {
  const session = await getAuthSession();

  Events.sort((a: CustomEvent, b: CustomEvent) => {
    return compareDesc(parseISO(a.dateAndTime), parseISO(b.dateAndTime));
  });
  const upcomingEvents = Events.filter((event: CustomEvent) => {
    return compareDesc(parseISO(event.dateAndTime), new Date()) === -1;
  });
  const pastEvents = Events.filter((event: CustomEvent) => {
    return compareDesc(parseISO(event.dateAndTime), new Date()) === 1;
  });

  return (
    <main className="w-full max-w-5xl min-h-screen md:px-10 m-auto">
      <Title />
      <h2 className="text-2xl font-medium text-center">
        Lo spazio di dibattito pubblico
      </h2>
      <h2 className="text-2xl font-medium text-center">
        Da giovani per giovani
      </h2>
      {/* <div className="w-full my-20">
        
        <AspectRatio ratio={16 / 9} >
            <Image src={EventiImage} className="rounded-md object-cover" alt="immagine degli eventi"/>
        </AspectRatio>
      </div> */}
      <div className="w-full px-6 md:px-0 py-10">
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
