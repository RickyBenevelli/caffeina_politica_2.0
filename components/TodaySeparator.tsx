import { format, parseISO, compareDesc } from "date-fns";
import { it } from "date-fns/locale";
import { Separator } from "@/components/ui/Separator";

export function TodaySeparator() {
  return (
    <div className="flex items-center text-orange-600">
      <p className="font-medium pr-2">Oggi</p>
      {/* <Separator className="bg-orange-600 h-[2px]" /> */}
      <hr className="text-orange-600 bg-orange-600 border-none  h-[2px] grow" />
      <p className="capitalize pl-2 inline">
        {format(new Date(), "d LLLL", {
          locale: it,
        })}
      </p>
    </div>
  );
}
