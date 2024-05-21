import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Montserrat } from "next/font/google";

import Provider from "@/components/context/Provider";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/Toaster";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Caffeina Politica",
    description: "Lo spazio di dibattito pubblico. Da giovani per giovani",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={ inter.className }>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <Provider>
            <NavBar/>
            <div className="w-full flex flex-col pt-20 items-center">{ children }</div>
            <Toaster/>
        </Provider>
        </body>
        </html>
    );
}
