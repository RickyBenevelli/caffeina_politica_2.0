import Image from "next/image";

import { compareDesc, parseISO } from "date-fns";


import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { EventCard, CustomEvent } from "@/components/EventCard";
import { TodaySeparator } from "@/components/TodaySeparator";

import Events from "@/json/events.json";
import EventiImage from "@/public/EventiImage.webp";
import FirebaseImage from "@/components/FirebaseImage";

export default async function Eventi() {

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
            <FirebaseImage path={"/events/eventsCover.webp"} fetchPriority="high" className="rounded-md object-cover h-full w-full" alt="immagine degli eventi"/>
        </AspectRatio>
      </div>
      <div className="w-full py-10">
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
