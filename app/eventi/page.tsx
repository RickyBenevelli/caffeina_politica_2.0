import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { compareDesc, format, parseISO } from "date-fns";

import { authOptions, getAuthSession } from "@/lib/auth";

import Title from "@/components/Title";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";

import EventiImage from "@/public/EventiImage.webp";


export default async function Eventi() {
  const session = await getAuthSession();
  
  return (
    <main className="w-full max-w-5xl min-h-screen px-10 m-auto">
      <Title />
      <h2 className="text-2xl font-medium text-center">Lo spazio di dibattito pubblico</h2>
      <h2 className="text-2xl font-medium text-center">Da giovani per giovani</h2>
      <div className="w-full m-auto mt-10">
        {/* TODO: sistemare l'aspectRatio e la foto */}
        <AspectRatio ratio={16 / 9} className="bg-cover">
            <Image src={EventiImage} className="rounded-md" alt="immagine degli eventi"/>
        </AspectRatio>
      </div>
    </main>
  );
}
