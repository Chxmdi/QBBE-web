import { faqs, pages, programs, reports } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export type SearchResultKind = "program" | "page" | "report" | "faq";
export type SearchEntry = { kind: SearchResultKind; title: string; description: string; href: string };

export function publicSearchEntries(locale: Locale): SearchEntry[] {
  const programEntries = programs.map((program) => ({ kind: "program" as const, title: program.title[locale], description: (program.shortSummary ?? program.summary)[locale], href: `/programs/${program.slug}` }));
  const pageEntries = Object.entries(pages).map(([path, page]) => ({ kind: "page" as const, title: page.title[locale], description: page.lead[locale], href: `/${path}` }));
  const reportEntries = reports.map((report) => ({ kind: "report" as const, title: report.title[locale], description: report.description[locale], href: report.type === "financial-statement" ? "/impact/financial-transparency" : "/impact/reports" }));
  const faqEntries = faqs.map((faq) => ({ kind: "faq" as const, title: faq.question[locale], description: faq.answer[locale], href: "/resources/faq" }));
  return [...programEntries, ...pageEntries, ...reportEntries, ...faqEntries];
}
