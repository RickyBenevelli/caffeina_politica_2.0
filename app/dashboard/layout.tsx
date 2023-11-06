import { redirect } from "next/navigation";

import { Toaster } from "@/components/ui/Toaster";
import { getAuthSession } from "@/lib/auth";
import DashboardNav from "@/components/DashboardNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <section className="w-full max-w-5xl m-auto py-20 flex ">
      <DashboardNav className="w-1/6" />
      <div className="w-5/6">{children}</div>
    </section>
  );
}
