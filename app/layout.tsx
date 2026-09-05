import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Provider from "@/components/context/Provider";
import NavBar from "@/components/NavBar";
import React from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


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
        <html lang="it">
        <body className={ inter.className }>
        <Provider>
            <NavBar/>
            <div className="w-full flex flex-col pt-20 items-center">{ children }</div>
            <Footer/>
        </Provider>
        </body>
        </html>
    );
}
