"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { pages, programs } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";

export function SearchPage({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const programResults = programs.map((item) => ({ type: locale === "en" ? "Program" : "Programme", title: item.title[locale], href: `/programs/${item.slug}`, description: item.summary[locale] }));
    const pageResults = Object.entries(pages).map(([path, item]) => ({ type: locale === "en" ? "Page" : "Page", title: item.title[locale], href: `/${path}`, description: item.lead[locale] }));
    return [...programResults, ...pageResults].filter((item) => !needle || `${item.title} ${item.description}`.toLowerCase().includes(needle));
  }, [locale, query]);

  return <><section className="page-hero"><div className="shell"><p className="eyebrow">{locale === "en" ? "Search" : "Recherche"}</p><h1 className="display">{locale === "en" ? "Find what you need." : "Trouvez ce qu’il vous faut."}</h1></div></section><section className="section"><div className="shell" style={{ maxWidth: 800 }}><label className="field"><span>{locale === "en" ? "Search QBBE" : "Rechercher sur QBBE"}</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "en" ? "Programs, history, resources…" : "Programmes, histoire, ressources…"} /></label><div className="search-results" aria-live="polite">{results.map((result) => <Link key={result.href} className="search-result" href={localePath(locale, result.href)}><p className="eyebrow" style={{ color: "var(--blue)" }}>{result.type}</p><h2 className="display" style={{ fontSize: "2rem", margin: ".25rem 0" }}>{result.title}</h2><p>{result.description}</p></Link>)}{query && !results.length && <p>{locale === "en" ? "No results found." : "Aucun résultat trouvé."}</p>}</div></div></section></>;
}
