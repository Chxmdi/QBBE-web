"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { programs } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";

const audiences = ["student", "parent", "educator", "community"];
const needs = ["academic", "literacy", "career", "technology", "family", "mentorship"];
const labels: Record<string, Record<Locale, string>> = {
  student: { en: "Student", fr: "Élève" }, parent: { en: "Parent", fr: "Parent" }, educator: { en: "Educator", fr: "Éducateur" }, community: { en: "Community member", fr: "Membre de la communauté" },
  academic: { en: "Academic support", fr: "Soutien scolaire" }, literacy: { en: "Literacy", fr: "Lecture" }, career: { en: "Career development", fr: "Développement de carrière" }, technology: { en: "Technology", fr: "Technologie" }, family: { en: "Family support", fr: "Soutien aux familles" }, mentorship: { en: "Mentorship", fr: "Mentorat" },
};

export function ProgramFinder({ locale }: { locale: Locale }) {
  const [audience, setAudience] = useState<string>(); const [need, setNeed] = useState<string>();
  const visible = useMemo(() => programs.filter((program) => (!audience || program.audience.includes(audience)) && (!need || program.needs.includes(need))), [audience, need]);
  return <section className="section"><div className="shell finder"><div><p className="eyebrow">{locale === "en" ? "Programs" : "Programmes"}</p><h2 className="display section-heading">{locale === "en" ? "Find the right support." : "Trouvez le bon soutien."}</h2><p className="lede">{locale === "en" ? "Start with what you need, not an organizational chart." : "Commencez par ce dont vous avez besoin, et non par un organigramme."}</p>
    <fieldset className="filter-group"><legend>{locale === "en" ? "I am a…" : "Je suis…"}</legend><div className="filter-list">{audiences.map((value) => <button key={value} aria-pressed={audience === value} onClick={() => setAudience(audience === value ? undefined : value)}>{labels[value][locale]}</button>)}</div></fieldset>
    <fieldset className="filter-group"><legend>{locale === "en" ? "I’m looking for…" : "Je cherche…"}</legend><div className="filter-list">{needs.map((value) => <button key={value} aria-pressed={need === value} onClick={() => setNeed(need === value ? undefined : value)}>{labels[value][locale]}</button>)}</div></fieldset>
  </div><div className="program-list" aria-live="polite">{visible.map((program) => <Link className="program-row" href={localePath(locale, `/programs/${program.slug}`)} key={program.slug}><div><h3>{program.title[locale]}</h3><p>{program.summary[locale]}</p></div><ArrowUpRight aria-hidden="true" /></Link>)}{visible.length === 0 && <p>{locale === "en" ? "No exact match yet. Explore all programs." : "Aucun résultat exact. Explorez tous les programmes."}</p>}</div></div></section>;
}
