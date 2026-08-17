import type { Locale } from "@/lib/i18n";

export type LocalizedString = Record<Locale, string>;
export type LocalizedRichText = LocalizedString[];
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
  /** Preferred concise description for cards, metadata, and program discovery. */
  shortSummary?: LocalizedString;
  /** Retained while existing program-discovery components migrate to shortSummary. */
  summary: LocalizedString;
  audience: string[];
  needs: string[];
  age?: LocalizedString;
  gradeRange?: LocalizedString;
  subjects?: string[];
  goals?: LocalizedRichText;
  activities?: LocalizedRichText;
  format?: LocalizedString;
  location?: LocalizedString;
  status: LocalizedString;
  registrationStatus?: LocalizedString;
  schedule?: LocalizedString;
  fullDescription: LocalizedRichText;
  eligibility?: LocalizedRichText;
  fees?: LocalizedRichText;
  memberBenefits?: LocalizedRichText;
  subsidies?: LocalizedRichText;
  outcomes?: LocalizedRichText;
  history?: LocalizedRichText;
  sections: ContentSection[];
  registrationUrl?: string;
  relatedPrograms?: string[];
  partners?: string[];
  funders?: string[];
  faq?: FAQItem[];
  /** Duplicates meta.sourceUrls for CMS and API consumers that need only program provenance. */
  sourceUrls?: string[];
  verificationStatus?: "verified" | "needs-review";
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
  /** Public document file, when QBBE has a verified asset URL distinct from its legacy landing page. */
  fileUrl?: string;
  publishedAt?: string;
  archived: boolean;
  meta: ContentSourceMeta;
};

export type FAQItem = { question: LocalizedString; answer: LocalizedString; category: string; meta: ContentSourceMeta };

export type Person = {
  name: string;
  role?: LocalizedString;
  category: "board" | "staff";
  bio?: LocalizedRichText;
  photo?: string;
  linkedin?: string;
  term?: string;
  status: "current" | "historical" | "needs-review";
  meta: ContentSourceMeta;
};

export type Partner = {
  name: string;
  category: LocalizedString;
  logo?: string;
  website?: string;
  description?: LocalizedString;
  relatedPrograms?: string[];
  relationshipStatus: "current" | "historical" | "needs-review";
  meta: ContentSourceMeta;
};
