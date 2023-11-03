'use server';

import { db } from "@/lib/db";

export async function increment(slug: string) {
  const data = await db.views.create({ data: { slug: slug } });
  return;
}

export async function clearViews() {
  const data = await db.views.deleteMany();
  return;
}