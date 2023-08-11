export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  // TODO: aggiungere il ruolo necessario per accedere alla pagina
};

export type NavConfig = {
    mainNav: NavItem[];
};