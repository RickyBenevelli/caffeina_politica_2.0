"use client";

import PlausibleProvider from "next-plausible";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="caffeinapolitica.com">
      {children}
    </PlausibleProvider>
  );
}
