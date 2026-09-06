import Link from "next/link";

import Title from "@/components/Title";

export default function NotFound() {
  return (
    <main className="w-full max-w-5xl min-h-screen px-6 text-center">
      <Title />
      <h2 className="text-2xl font-medium pt-6">Questa pagina non esiste</h2>
      <p className="pt-4 text-slate-700">
        Il link che hai seguito è sbagliato, oppure la pagina è stata spostata.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Link href="/" className="font-medium underline underline-offset-4">
          Torna al magazine
        </Link>
        <Link href="/eventi" className="font-medium underline underline-offset-4">
          Guarda gli eventi
        </Link>
        <Link href="/about-us" className="font-medium underline underline-offset-4">
          Scopri chi siamo
        </Link>
      </div>
    </main>
  );
}
