interface NavLink {
  name: string;
  link: string;
}

interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: (boolean) => void;
  links: NavLink[];
}

export type { NavLink, MenuProps };
