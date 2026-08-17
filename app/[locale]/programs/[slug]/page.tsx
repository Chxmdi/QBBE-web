import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { programs } from "@/lib/content";
import { isLocale, localePath } from "@/lib/i18n";

export function generateStaticParams() { return programs.flatMap((program) => ["en", "fr"].map((locale) => ({ locale, slug: program.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const program = programs.find((item) => item.slug === slug);
  if (!program) return {};
  return {
    title: program.title[locale],
    description: program.summary[locale],
    alternates: { canonical: `/${locale}/programs/${slug}`, languages: { en: `/en/programs/${slug}`, fr: `/fr/programs/${slug}`, "x-default": `/en/programs/${slug}` } },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const program = programs.find((item) => item.slug === slug);
  if (!program) notFound();
  const hasRegistration = Boolean(program.registrationUrl);

  return <>
    <PageHero eyebrow={locale === "en" ? "QBBE program" : "Programme QBBE"} title={program.title[locale]} lead={program.summary[locale]} />
    <section className="section"><div className="shell content-grid"><article className="prose">
      {program.fullDescription.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}
      {program.sections.map((section) => <section key={section.heading[locale]}><h2>{section.heading[locale]}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}</section>)}
      {hasRegistration ? <a className="button" href={program.registrationUrl} target="_blank" rel="noreferrer">{locale === "en" ? "Continue to QBBE registration" : "Continuer vers l’inscription QBBE"}<ExternalLink size={16} /></a> : <Link className="button" href={localePath(locale, "/about/contact")}>{locale === "en" ? "Ask QBBE about this program" : "Demander à QBBE au sujet de ce programme"}<ArrowRight size={16} /></Link>}
      {program.relatedPrograms?.length ? <section><h2>{locale === "en" ? "Related programs" : "Programmes connexes"}</h2><p>{program.relatedPrograms.map((related, index) => { const item = programs.find((candidate) => candidate.slug === related); return item ? <span key={related}>{index > 0 ? " · " : ""}<Link href={localePath(locale, `/programs/${related}`)}>{item.title[locale]}</Link></span> : null; })}</p></section> : null}
    </article><aside className="detail-meta"><dl>
      <dt>{locale === "en" ? "Program status" : "État du programme"}</dt><dd>{program.status[locale]}</dd>
      {program.age ? <><dt>{locale === "en" ? "Age" : "Âge"}</dt><dd>{program.age[locale]}</dd></> : null}
      {program.gradeRange ? <><dt>{locale === "en" ? "Grade range" : "Niveaux"}</dt><dd>{program.gradeRange[locale]}</dd></> : null}
      {program.format ? <><dt>{locale === "en" ? "Format" : "Format"}</dt><dd>{program.format[locale]}</dd></> : null}
      {program.schedule ? <><dt>{locale === "en" ? "Schedule" : "Horaire"}</dt><dd>{program.schedule[locale]}</dd></> : null}
      <dt>{locale === "en" ? "Content status" : "État du contenu"}</dt><dd>{locale === "en" ? "Requires QBBE program review" : "Révision par QBBE requise"}</dd>
    </dl></aside></div></section>
  </>;
}
