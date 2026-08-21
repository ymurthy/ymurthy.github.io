"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/awards/", label: "Awards" },
  { href: "/publications/", label: "Publications" },
  { href: "/teaching/", label: "Teaching" },
  { href: "/service/", label: "Service" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-title" href="/" aria-label="Yashaswini Murthy, home">
          Yashaswini Murthy
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
