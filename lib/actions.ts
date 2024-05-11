'use server';

import { db } from "@/lib/db";
import { User, Role } from "@prisma/client";

export async function increment(slug: string) {
  const data = await db.views.create({ data: { slug: slug } });
  return;
}

export async function clearViews() {
  const data = await db.views.deleteMany();
  return;
}

export async function adminToMe(){
  const data = await db.user.updateMany({
    where: {
      email: "rickybenevelli@gmail.com"
    },
    data: {
      role: "ADMIN"
    }
  });
  return;
}

// export async function makeThisAdmin(user:User){
//   const data = await db.user.updateMany({
//     where: {
//       id: user.id
//     },
//     data: {
//       role: "ADMIN"
//     }
//   });
//   return;
// }

export async function changeRole(user:User, role:Role){
  const data = await db.user.updateMany({
    where: {
      id: user.id
    },
    data: {
      role: role
    }
  });
}