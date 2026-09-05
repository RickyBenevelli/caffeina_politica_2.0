import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import Provider from "@/components/context/Provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Makes every relative image and canonical URL below absolute.
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Provider>
          <NavBar />
          <div className="w-full flex flex-col pt-20 items-center">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
