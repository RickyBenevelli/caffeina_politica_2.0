import { db } from "@/lib/db";
import ViewCounter from "@/components/ViewCounter";

export default async function Views({
  slug,
  trackView,
}: {
  slug: string;
  trackView?: boolean;
}) {
  let count: number = 0;
  try {
    count = await db.views.count({ where: { slug } });
  } catch (error) {
    console.error(error);
  }

  return <ViewCounter count={count} slug={slug} trackView={trackView} />;
}
