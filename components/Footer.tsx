import React from "react";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="w-full flex flex-row justify-center bg-gray-600">
            <main className="w-full max-w-5xl px-6 py-4 flex flex-col md:flex-row justify-center items-center md:items-start text-slate-100 text-sm">
                <div className="md:w-1/5">
                    <Link href={ "/privacy-policy" }>Privacy Policy</Link>
                </div>
                <div className="md:w-3/5 flex flex-col items-center text-center">
                    <p>&copy; 2024 Caffeina Politica. Tutti i diritti riservati.</p>
                    <p>Made by <Link href={"https://riccardobenevelli.com/"} target="_blank" >Riccardo Benevelli</Link></p>
                </div>
                <div className="md:w-1/5">

                </div>
            </main>
        </div>
    );
}
