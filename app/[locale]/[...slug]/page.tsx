import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { faqs, organization, pages, reports } from "@/lib/content";
import { isLocale, localePath } from "@/lib/i18n";

const formTypes = {
  "about/contact": "contact",
  "get-involved/volunteer": "volunteer",
  "get-involved/corporate-partners": "partner",
  "get-involved/community-partners": "partner",
} as const;

function reviewLabel(locale: "en" | "fr", status: string) {
  if (status === "verified") return locale === "en" ? "Verified QBBE content" : "Contenu QBBE vérifié";
  return locale === "en" ? "Editorial verification in progress" : "Vérification éditoriale en cours";
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = isLocale(locale) ? pages[slug.join("/")] : undefined;
  if (!content || !isLocale(locale)) return {};
  const alternateLocale = locale === "en" ? "fr" : "en";
  return {
    title: content.title[locale],
    description: content.lead[locale],
    alternates: { canonical: `/${locale}/${slug.join("/")}`, languages: { en: `/en/${slug.join("/")}`, fr: `/fr/${slug.join("/")}`, "x-default": `/en/${slug.join("/")}` } },
    openGraph: { title: content.title[locale], description: content.lead[locale], locale: locale === "en" ? "en_CA" : "fr_CA", alternateLocale: alternateLocale === "en" ? "en_CA" : "fr_CA" },
  };
}

export default async function ContentPage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const path = slug.join("/");
  const content = pages[path];
  if (!content) notFound();
  const formType = formTypes[path as keyof typeof formTypes];
  const isFaq = path === "resources/faq";
  const isReports = path === "impact/reports" || path === "resources/publications";

  return <>
    <PageHero eyebrow={content.eyebrow[locale]} title={content.title[locale]} lead={content.lead[locale]} />
    <section className="section">
      <div className="shell content-grid">
        <article className="prose">
          {content.sections.map((section) => <section key={section.heading[locale]}>
            <h2>{section.heading[locale]}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph[locale]}>{paragraph[locale]}</p>)}
            {section.bullets && <ul>{section.bullets.map((item) => <li key={item[locale]}>{item[locale]}</li>)}</ul>}
          </section>)}
          {isFaq && <section className="faq-list" aria-label={locale === "en" ? "Frequently asked questions" : "Foire aux questions"}>
            {faqs.map((item) => <details key={item.question.en}><summary>{item.question[locale]}</summary><p>{item.answer[locale]}</p></details>)}
          </section>}
          {isReports && <section className="resource-list" aria-label={locale === "en" ? "Report archive" : "Archives des rapports"}>
            {reports.map((report) => <a className="list-item" href={report.sourceUrl} key={report.sourceUrl} target="_blank" rel="noreferrer"><time>{report.year}<br />{report.archived ? (locale === "en" ? "Archive" : "Archives") : ""}</time><div><h3>{report.title[locale]}</h3><p>{report.description[locale]}</p></div><ExternalLink aria-hidden="true" /></a>)}
          </section>}
          {!formType && <Link className="button" href={content.cta?.href ? localePath(locale, content.cta.href) : localePath(locale, path.startsWith("get-involved") ? "/get-involved/membership" : "/programs")}>
            {content.cta?.label[locale] ?? (locale === "en" ? "Explore QBBE programs" : "Explorer les programmes QBBE")}<ArrowRight size={16} />
          </Link>}
        </article>
        <aside className="detail-meta">
          <dl>
            <dt>{locale === "en" ? "Content status" : "État du contenu"}</dt>
            <dd>{reviewLabel(locale, content.meta.verificationStatus)}</dd>
            <dt>{locale === "en" ? "Language review" : "Révision linguistique"}</dt>
            <dd>{locale === "en" ? "English and French require QBBE approval" : "L’anglais et le français nécessitent l’approbation de QBBE"}</dd>
            {path === "about/contact" && <>
              <dt>{locale === "en" ? "Phone" : "Téléphone"}</dt><dd>{organization.phone}</dd>
              <dt>Email</dt><dd>{organization.primaryEmail}</dd>
              <dt>{locale === "en" ? "Office hours" : "Heures de bureau"}</dt><dd>{organization.officeHours[locale]}</dd>
            </>}
          </dl>
        </aside>
      </div>
      {formType && <div className="shell" style={{ marginTop: "3rem" }}><ContactForm locale={locale} type={formType} /></div>}
    </section>
  </>;
}
