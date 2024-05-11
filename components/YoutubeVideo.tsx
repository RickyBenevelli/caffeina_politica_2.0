import React from "react";
import { Youtube } from "lucide-react";
import Link from "next/link";

interface YoutubeVideoProps {
  href: string;
  children: React.ReactNode;
}

export function YoutubeVideo({ href, children }: YoutubeVideoProps) {
  return (
    <div className="w-full flex justify-center">
      <Link
        className="inline-block hover:bg-[#FF0000]/80 bg-slate-100 text-[#FF0000] hover:text-white transition-colors  ease-in-out duration-300 px-2 py-1 rounded-2xl min-content"
        href={href}
        target="_blank"
      >
        <div className="flex space-x-3 pr-2 items-center">
          <Youtube size={32} className="  text-inherit" />
          <p className="font-medium text-[#282828]">{children}</p>
        </div>
      </Link>
    </div>
  );
}
