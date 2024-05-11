import { redirect } from "next/navigation";

import { Toaster } from "@/components/ui/Toaster";
import { getAuthSession } from "@/lib/auth";
import { checkAuthorisation } from "@/lib/role";
import DashboardNav from "@/components/DashboardNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/");

  /* const session = await getAuthSession();

  if (!session) {
    redirect("/sign-in");
  }

  if(!(session?.user && await checkAuthorisation(session?.user, "ADMIN"))) {
    redirect("/");
    // TODO: Show toaster
  }

  return (
    <section className="w-full max-w-5xl min-h-screen py-10 md:py-20 px-6 flex flex-col md:flex-row items-center md:items-start">
      <DashboardNav className="md:w-1/6" />
      <div className="w-5/6">{children}</div>
    </section>
  ); */
}
