import type { Locale } from "@/lib/i18n";

export type LocalizedString = Record<Locale, string>;
export type TranslationStatus = "not-started" | "draft" | "needs-review" | "approved";
export type VerificationStatus = "verified" | "needs-editorial-review" | "needs-program-review" | "needs-legal-review";

export type ContentSourceMeta = {
  sourceUrls: string[];
  migratedAt: string;
  migratedBy: string;
  verificationStatus: VerificationStatus;
  notes?: string;
  translation: Record<Locale, TranslationStatus>;
};

export type ContentSection = { heading: LocalizedString; paragraphs: LocalizedString[]; bullets?: LocalizedString[] };

export type Program = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  audience: string[];
  needs: string[];
  age?: LocalizedString;
  gradeRange?: LocalizedString;
  format?: LocalizedString;
  status: LocalizedString;
  schedule?: LocalizedString;
  fullDescription: LocalizedString[];
  sections: ContentSection[];
  registrationUrl?: string;
  relatedPrograms?: string[];
  meta: ContentSourceMeta;
};

export type PageContent = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  lead: LocalizedString;
  sections: ContentSection[];
  cta?: { href: string; label: LocalizedString };
  meta: ContentSourceMeta;
};

export type Report = {
  title: LocalizedString;
  year: number;
  type: "annual-report" | "financial-statement" | "research-report" | "governance" | "other";
  language: "en" | "fr" | "bilingual";
  description: LocalizedString;
  sourceUrl: string;
  archived: boolean;
  meta: ContentSourceMeta;
};

export type FAQItem = { question: LocalizedString; answer: LocalizedString; category: string; meta: ContentSourceMeta };
