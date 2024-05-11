"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { Button } from "./ui/Button";
import { Icons } from "@/components/Icons";
import { db } from "@/lib/db";

export default function SaveArticle({ slug }: { slug: string }) {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  /* TODO: gestire la logica di isLoading
  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [status]); */

  const handleAddBookmark = async () => {
    // TODO: creare una route api per aggiungere un bookmark
    // const userId = await db.user.findUnique({
    //   where: {
    //     email: session?.user?.email as string,
    //   },
    // });
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      //   onClick={handleAddBookmark}
      isLoading={isLoading}
    >
      <Icons.bookmarked className="w-5 h-5" />
    </Button>
  );
}
