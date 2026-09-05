import type { Role } from "@prisma/client";
import type { User } from "next-auth";

export function checkAuthorisation(
  user: User | undefined | null,
  permissionRequired: Role
): boolean {
  if (!user) return false;
  if (user.role === "ADMIN") return true;
  if (user.role === "USER" && permissionRequired === "USER") return true;

  return false;
}
