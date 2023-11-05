import { Role } from "@prisma/client";

export type NavItem = {
  label: string;
  href: string;
  active: boolean;
  role: Role;
};

export type DashboardNavItem = {
  label: string;
  href: string;
  active: boolean;
};
