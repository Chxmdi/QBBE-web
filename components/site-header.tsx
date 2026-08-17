"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { copy, localePath, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[locale];
  const otherLocale = locale === "en" ? "fr" : "en";
  const languageDestination = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${otherLocale}`);

  return <>
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href={localePath(locale)} onClick={() => setOpen(false)}>QBBE <b>EST. 1968</b></Link>
        <div className="nav-links">
          {t.nav.map(([label, href]) => <Link key={href} href={localePath(locale, href)}>{label}</Link>)}
        </div>
        <div className="nav-actions">
          <Link href={languageDestination} aria-label={locale === "en" ? "Passer en français" : "Switch to English"}>{otherLocale.toUpperCase()}</Link>
          <Link href={localePath(locale, "/search")} aria-label={locale === "en" ? "Search" : "Rechercher"}><Search size={18} /></Link>
          <Link className="button button--light" href={localePath(locale, "/register")}>{t.register}</Link>
          <Link className="button button--gold" href={localePath(locale, "/donate")}>{t.donate}</Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? (locale === "en" ? "Close menu" : "Fermer le menu") : (locale === "en" ? "Open menu" : "Ouvrir le menu")} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
    </header>
    {open && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label={locale === "en" ? "Navigation menu" : "Menu de navigation"}>
      {t.nav.map(([label, href]) => <Link key={href} onClick={() => setOpen(false)} href={localePath(locale, href)}>{label}</Link>)}
      <div className="hero-actions" style={{ marginTop: "2rem" }}>
        <Link className="button button--light" onClick={() => setOpen(false)} href={localePath(locale, "/register")}>{t.register}</Link>
        <Link className="button button--gold" onClick={() => setOpen(false)} href={localePath(locale, "/donate")}>{t.donate}</Link>
      </div>
    </div>}
  </>;
}
