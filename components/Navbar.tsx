"use client";

import { useState } from "react";
import { navLinks } from "@/constants/nav";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToId } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(navLinks.map((l) => l.id));
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    scrollToId(href);
    setMenuOpen(false);
  }

  return (
    <>
      <header className={cn("nav", scrolled && "scrolled")} id="site-nav">
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
            JC<span className="logo-dot">.</span>dev
          </a>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={active === link.id ? "active" : ""}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              className={cn("hamburger", menuOpen && "open")}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("menu-backdrop", menuOpen && "open")} onClick={() => setMenuOpen(false)} />
      <div className={cn("mobile-menu", menuOpen && "open")}>
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
