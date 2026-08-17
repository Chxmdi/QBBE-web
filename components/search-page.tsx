"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { localePath, type Locale } from "@/lib/i18n";
import { publicSearchEntries, type SearchResultKind } from "@/lib/search";

const resultKinds: SearchResultKind[] = ["program", "page", "report", "faq"];
const resultLabels: Record<SearchResultKind, Record<Locale, string>> = {
  program: { en: "Programs", fr: "Programmes" },
  page: { en: "Pages", fr: "Pages" },
  report: { en: "Reports", fr: "Rapports" },
  faq: { en: "Frequently asked questions", fr: "Foire aux questions" },
};

export function SearchPage({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return publicSearchEntries(locale).filter((item) => !needle || `${item.title} ${item.description}`.toLowerCase().includes(needle));
  }, [locale, query]);
  const groups = resultKinds.map((kind) => ({ kind, results: results.filter((result) => result.kind === kind) })).filter((group) => group.results.length > 0);

  return <><section className="page-hero"><div className="shell"><p className="eyebrow">{locale === "en" ? "Search" : "Recherche"}</p><h1 className="display">{locale === "en" ? "Find what you need." : "Trouvez ce qu’il vous faut."}</h1></div></section><section className="section"><div className="shell" style={{ maxWidth: 800 }}><label className="field"><span>{locale === "en" ? "Search QBBE" : "Rechercher sur QBBE"}</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "en" ? "Programs, reports, history, resources…" : "Programmes, rapports, histoire, ressources…"} /></label><div className="search-results" aria-live="polite">{groups.map((group) => <section key={group.kind} aria-label={resultLabels[group.kind][locale]}><p className="eyebrow" style={{ color: "var(--blue)", marginTop: "2rem" }}>{resultLabels[group.kind][locale]}</p>{group.results.map((result) => <Link key={`${result.kind}-${result.title}`} className="search-result" href={localePath(locale, result.href)}><h2 className="display" style={{ fontSize: "2rem", margin: ".25rem 0" }}>{result.title}</h2><p>{result.description}</p></Link>)}</section>)}{query && !results.length && <p>{locale === "en" ? "No results found." : "Aucun résultat trouvé."}</p>}</div></div></section></>;
}
