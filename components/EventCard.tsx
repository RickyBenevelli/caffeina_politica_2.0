import Image from "next/image";
import { AspectRatio } from "@/components/ui/AspectRatio";

import { formatEventDate, nowKey, wallClockKey } from "@/lib/eventDate";

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
    const isScheduled = Boolean(event.dateAndTime);
    const isUpcoming = !isScheduled || wallClockKey(event.dateAndTime) > nowKey();

    return (
        <div className="w-full py-5 flex flex-col gap-2">
            { isUpcoming && (
                <p className="text-2xl font-bold text-orange-600 uppercase">
                    IN PROGRAMMA
                </p>
            ) }

            {/* Mobile: image above the text. Tablet/desktop: two columns, image 2/5 on the left.
                Events without an image show the text at full width. */ }
            <div className="w-full flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
                { event.image && (
                    <div className="w-full md:w-2/5 md:shrink-0">
                        <AspectRatio ratio={ 4 / 3 }>
                            <Image src={ event.image } alt={ event.title } fill
                                   sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 100vw"
                                   className="rounded-md object-cover"/>
                        </AspectRatio>
                    </div>
                ) }

                <div className="min-w-0 flex flex-col gap-4 md:flex-1">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-xl md:text-2xl font-semibold">{ event.title }</h3>
                        { event.guest && <p>con { event.guest }</p> }
                        <p className="text-lg font-medium text-orange-600">
                            { isScheduled
                                ? formatEventDate(event.dateAndTime)
                                : "data e ospiti in definizione" }
                        </p>
                        { event.place && <p className="font-medium">{ event.place }</p> }
                    </div>
                    { (event.description || event.excerpt) && (
                        <div
                            className="lg:text-justify [&_p+p]:mt-2"
                            dangerouslySetInnerHTML={ { __html: event.description || event.excerpt } }
                        />
                    ) }

                    {/*<div className="w-full flex flex-col items-center">
            <Button className="bg-orange-600">Più informazioni</Button>
          </div>*/ }
                </div>
            </div>
        </div>
    );
}
