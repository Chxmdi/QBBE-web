import type { ContentSourceMeta, LocalizedString } from "./types";

const meta: ContentSourceMeta = {
  sourceUrls: ["https://qbbe.ca/donate/"],
  migratedAt: "2026-08-17",
  migratedBy: "Website 2.0 migration",
  verificationStatus: "needs-legal-review",
  notes: "QBBE's Donate page, checked 2026-08-17 and modified 2026-04-15, refers to an item wish list for an elementary-student classroom. Confirm the provider, list availability, shipping address, receipts, and privacy before linking or enabling it.",
  translation: { en: "needs-review", fr: "needs-review" },
};

export const donationContent: { inKind: { heading: LocalizedString; body: LocalizedString; meta: ContentSourceMeta } } = {
  inKind: {
    heading: { en: "Give items directly", fr: "Donner des articles directement" },
    body: { en: "QBBE’s current public Donate page refers to an item wish list for a classroom where elementary students can take courses and do homework. The list, provider, shipping address, and receipt treatment must be confirmed by QBBE before a link is published. Contact QBBE to ask about approved in-kind support.", fr: "La page publique actuelle des dons de QBBE fait référence à une liste de souhaits d’articles pour une salle de classe où les élèves du primaire peuvent suivre des cours et faire leurs devoirs. La liste, le fournisseur, l’adresse d’expédition et le traitement des reçus doivent être confirmés par QBBE avant la publication d’un lien. Communiquez avec QBBE pour vous renseigner sur les dons en nature approuvés." },
    meta,
  },
};
