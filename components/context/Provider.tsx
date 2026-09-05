"use client";

import PlausibleProvider from "next-plausible";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="caffeina-politica-2-0.vercel.app" selfHosted={true}>
      {children}
    </PlausibleProvider>
  );
}
