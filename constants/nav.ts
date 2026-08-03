export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Tech Stack", href: "#stack", id: "stack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];
