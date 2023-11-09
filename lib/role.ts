"use server";

import { Role } from "@prisma/client";
import { User } from "next-auth";

export async function checkAuthorisation(
  user: User,
  permissionRequired: Role
): Promise<boolean> {
  if (user.role === "ADMIN") return true;
  if (user.role === "USER" && permissionRequired === "USER") return true;

  return false;
}
