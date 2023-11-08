import { AspectRatio } from "@/components/ui/AspectRatio";
import { Button } from "@/components/ui/Button";

import { format, parseISO, compareDesc } from "date-fns";
import { it } from "date-fns/locale";

export type CustomEvent = {
  title: string;
  image?: string;
  dateAndTime: string;
  place: string;
  guest: string;
  excerpt: string;
  description: string;
  url?: string;
  tags: string[];
};

export function EventCard({ event }: { event: CustomEvent }) {
  return (
    <div className="w-full py-5 flex flex-col gap-2">
      {compareDesc(parseISO(event.dateAndTime), new Date()) === -1 && (
        <p className="text-2xl font-bold text-orange-600 uppercase">
          IN PROGRAMMA
        </p>
      )}

      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="md:w-2/5 flex flex-col items-start">
          <AspectRatio ratio={4 / 3}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.image}
              alt={event.title}
              className="rounded-md object-cover w-full h-full"
            />
          </AspectRatio>
        </div>

        <div className="md:w-3/5 flex flex-col gap-6 items-center justify-between grow">
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="text-xl md:text-2xl font-semibold">{event.title}</h3>
            {event.guest && <p>con {event.guest}</p>}
            <p className="text-lg font-medium text-orange-600 capitalize">
              {format(parseISO(event.dateAndTime), "iiii d LLLL, HH:mm", {
                locale: it,
              })}
            </p>
            <p className="font-medium">{event.place}</p>
          </div>

          <div className="w-full flex flex-col items-center">
            <Button className="bg-orange-600">Più informazioni</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
