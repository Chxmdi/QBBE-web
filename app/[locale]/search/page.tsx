"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { pages, programs } from "@/lib/content";
import { isLocale, localePath, type Locale } from "@/lib/i18n";

export default function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const [query, setQuery] = useState("");
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => { void params.then(({ locale: value }) => { if (isLocale(value)) setLocale(value); }); }, [params]);
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const programResults = programs.map((item) => ({ type: locale === "en" ? "Program" : "Programme", title: item.title[locale], href: `/programs/${item.slug}`, description: item.summary[locale] }));
    const pageResults = Object.entries(pages).map(([path, item]) => ({ type: locale === "en" ? "Page" : "Page", title: item.title[locale], href: `/${path}`, description: item.lead[locale] }));
    return [...programResults, ...pageResults].filter((item) => !needle || `${item.title} ${item.description}`.toLowerCase().includes(needle));
  }, [locale, query]);
  return <><section className="page-hero"><div className="shell"><p className="eyebrow">{locale === "en" ? "Search" : "Recherche"}</p><h1 className="display">{locale === "en" ? "Find what you need." : "Trouvez ce qu’il vous faut."}</h1></div></section><section className="section"><div className="shell" style={{ maxWidth: 800 }}><label className="field"><span>{locale === "en" ? "Search QBBE" : "Rechercher sur QBBE"}</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "en" ? "Programs, history, resources…" : "Programmes, histoire, ressources…"} /></label><div className="search-results" aria-live="polite">{results.map((result) => <Link key={result.href} className="search-result" href={localePath(locale, result.href)}><p className="eyebrow" style={{ color: "var(--blue)" }}>{result.type}</p><h2 className="display" style={{ fontSize: "2rem", margin: ".25rem 0" }}>{result.title}</h2><p>{result.description}</p></Link>)}{query && !results.length && <p>{locale === "en" ? "No results found." : "Aucun résultat trouvé."}</p>}</div></div></section></>;
}
