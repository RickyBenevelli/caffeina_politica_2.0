import { Toaster } from "@/components/ui/Toaster";

import DashboardNav from "@/components/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-5xl m-auto py-20 flex ">
      <DashboardNav className="w-1/6" />
      <div className="w-5/6">{children}</div>
    </section>
  );
}
