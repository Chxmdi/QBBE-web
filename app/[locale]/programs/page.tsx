import { PageHero } from "@/components/page-hero";
import { ProgramFinder } from "@/components/program-finder";
import { isLocale } from "@/lib/i18n";
import { routeSeo } from "@/lib/content";
import { localizedMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? localizedMetadata(locale, "/programs", routeSeo.programs.title, routeSeo.programs.description) : {};
}

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <><PageHero eyebrow={locale === "en" ? "Programs" : "Programmes"} title={locale === "en" ? "Support for every step forward." : "Du soutien à chaque étape."} lead={locale === "en" ? "QBBE programs help students, families and educators access opportunity, build skills and flourish." : "Les programmes de QBBE aident les élèves, les familles et les éducateurs à accéder aux occasions, à développer leurs compétences et à s’épanouir."} /><ProgramFinder locale={locale} /></>; }
