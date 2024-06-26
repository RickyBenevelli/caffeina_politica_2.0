import { Role } from "@prisma/client";

export type NavItem = {
  label: string;
  href: string;
  active: boolean;
  role: Role;
  baseColor?: string;
};

export type DashboardNavItem = {
  label: string;
  href: string;
  active: boolean;
};

export type ViewsPerArticle = {
  slug: string;
  numberOfViews: number;
}