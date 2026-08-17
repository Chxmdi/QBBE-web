import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { programs } from "@/lib/content";
import { isLocale, localePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/seo";

const audienceLabels = {
  student: { en: "Students", fr: "Élèves" },
  parent: { en: "Parents and guardians", fr: "Parents et personnes tutrices" },
  educator: { en: "Educators", fr: "Éducatrices et éducateurs" },
  community: { en: "Community members", fr: "Membres de la communauté" },
} as const;

export function generateStaticParams() { return programs.flatMap((program) => ["en", "fr"].map((locale) => ({ locale, slug: program.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const program = programs.find((item) => item.slug === slug);
  if (!program) return {};
  return localizedMetadata(locale, `/programs/${slug}`, program.title, program.shortSummary ?? program.summary);
}

export default async function ProgramPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const program = programs.find((item) => item.slug === slug);
  if (!program) notFound();
  const hasRegistration = Boolean(program.registrationUrl);
  const contentVerified = program.verificationStatus === "verified";
  const audiences = program.audience.map((audience) => audienceLabels[audience as keyof typeof audienceLabels]?.[locale] ?? audience).join(", ");

  return <>
    <PageHero eyebrow={locale === "en" ? "QBBE program" : "Programme QBBE"} title={program.title[locale]} lead={(program.shortSummary ?? program.summary)[locale]} />
    <section className="section"><div className="shell content-grid"><article className="prose">
      {program.fullDescription.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}
      {program.goals?.length ? <section><h2>{locale === "en" ? "Goals" : "Objectifs"}</h2>{program.goals.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.activities?.length ? <section><h2>{locale === "en" ? "Activities and learning" : "Activités et apprentissage"}</h2>{program.activities.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.eligibility?.length ? <section><h2>{locale === "en" ? "Eligibility" : "Admissibilité"}</h2>{program.eligibility.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.fees?.length ? <section><h2>{locale === "en" ? "Fees" : "Frais"}</h2>{program.fees.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.memberBenefits?.length ? <section><h2>{locale === "en" ? "Member benefits" : "Avantages membres"}</h2>{program.memberBenefits.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.subsidies?.length ? <section><h2>{locale === "en" ? "Subsidies and support" : "Subventions et soutien"}</h2>{program.subsidies.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.outcomes?.length ? <section><h2>{locale === "en" ? "Intended outcomes" : "Résultats visés"}</h2>{program.outcomes.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.history?.length ? <section><h2>{locale === "en" ? "Historical context" : "Contexte historique"}</h2>{program.history.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section> : null}
      {program.sections.map((section) => <section key={section.heading[locale]}><h2>{section.heading[locale]}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}{section.bullets?.length ? <ul>{section.bullets.map((item) => <li key={item[locale]}>{item[locale]}</li>)}</ul> : null}</section>)}
      {program.faq?.length ? <section className="faq-list" aria-label={locale === "en" ? `${program.title.en} frequently asked questions` : `Foire aux questions — ${program.title.fr}`}><h2>{locale === "en" ? "Frequently asked questions" : "Foire aux questions"}</h2>{program.faq.map((item) => <details key={item.question.en}><summary>{item.question[locale]}</summary><p>{item.answer[locale]}</p></details>)}</section> : null}
      {hasRegistration ? <a className="button" href={program.registrationUrl} target="_blank" rel="noreferrer">{locale === "en" ? "Continue to QBBE registration" : "Continuer vers l’inscription QBBE"}<ExternalLink size={16} /></a> : <Link className="button" href={localePath(locale, "/about/contact")}>{locale === "en" ? "Ask QBBE about this program" : "Demander à QBBE au sujet de ce programme"}<ArrowRight size={16} /></Link>}
      {program.relatedPrograms?.length ? <section><h2>{locale === "en" ? "Related programs" : "Programmes connexes"}</h2><p>{program.relatedPrograms.map((related, index) => { const item = programs.find((candidate) => candidate.slug === related); return item ? <span key={related}>{index > 0 ? " · " : ""}<Link href={localePath(locale, `/programs/${related}`)}>{item.title[locale]}</Link></span> : null; })}</p></section> : null}
    </article><aside className="detail-meta"><dl>
      <dt>{locale === "en" ? "Program status" : "État du programme"}</dt><dd>{program.status[locale]}</dd>
      <dt>{locale === "en" ? "For" : "Pour"}</dt><dd>{audiences}</dd>
      {program.age ? <><dt>{locale === "en" ? "Age" : "Âge"}</dt><dd>{program.age[locale]}</dd></> : null}
      {program.gradeRange ? <><dt>{locale === "en" ? "Grade range" : "Niveaux"}</dt><dd>{program.gradeRange[locale]}</dd></> : null}
      {program.format ? <><dt>{locale === "en" ? "Format" : "Format"}</dt><dd>{program.format[locale]}</dd></> : null}
      {program.schedule ? <><dt>{locale === "en" ? "Schedule" : "Horaire"}</dt><dd>{program.schedule[locale]}</dd></> : null}
      {program.location ? <><dt>{locale === "en" ? "Location" : "Lieu"}</dt><dd>{program.location[locale]}</dd></> : null}
      {program.subjects?.length ? <><dt>{locale === "en" ? "Source-record subjects" : "Matières consignées dans la source"}</dt><dd>{program.subjects.join(", ")}</dd></> : null}
      <dt>{locale === "en" ? "Content status" : "État du contenu"}</dt><dd>{contentVerified ? (locale === "en" ? "Verified QBBE content" : "Contenu QBBE vérifié") : (locale === "en" ? "Requires QBBE program review" : "Révision par QBBE requise")}</dd>
    </dl></aside></div></section>
  </>;
}
