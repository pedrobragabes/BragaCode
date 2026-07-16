"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";

const navigation = [
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/artigos", label: "Artigos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const focusTimer = window.setTimeout(() => {
      mobileMenuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 0);
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("menu-is-open");
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("bragacode-theme", nextTheme);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar entre tema claro e escuro"
            title="Alternar entre tema claro e escuro"
          >
            <span aria-hidden="true">◐</span>
          </button>
          <a className="button button-small header-cta" href={whatsappUrl("a página inicial")} target="_blank" rel="noreferrer">
            Solicitar orçamento <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        ref={mobileMenuRef}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="container" aria-label="Navegação mobile">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
          <a className="button" href={whatsappUrl("o menu do site")} target="_blank" rel="noreferrer">
            Falar sobre um projeto <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
