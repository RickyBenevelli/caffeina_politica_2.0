import { db } from "@/lib/db";
import ViewCounter from "@/components/ViewCounter";

export default async function Views({
  slug,
  trackView,
  show = true,
}: {
  slug: string;
  trackView?: boolean;
  show?: boolean;
}) {
  let count: number = 0;
  try {
    count = await db.views.count({ where: { slug } });
  } catch (error) {
    console.error("ERROR_VIEWS_COUNT: " + error);
  }

  return <ViewCounter count={count} slug={slug} trackView={trackView} show={show} />;
}
