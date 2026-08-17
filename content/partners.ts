import type { ContentSourceMeta, Partner } from "./types";

const migratedAt = "2026-08-17";
const historical = (sourceUrls: string[], notes: string): ContentSourceMeta => ({
  sourceUrls,
  migratedAt,
  migratedBy: "Website 2.0 migration",
  verificationStatus: "needs-editorial-review",
  notes,
  translation: { en: "needs-review", fr: "needs-review" },
});
const category = (en: string, fr: string) => ({ en, fr });

const acknowledged = (name: string): Partner => ({
  name, category: category("Historical acknowledgement", "Reconnaissance historique"), relationshipStatus: "needs-review",
  description: { en: "Named visually on QBBE’s legacy homepage. QBBE must confirm relationship status and public naming before it is shown as a partner.", fr: "Nommé visuellement sur la page d’accueil historique de QBBE. QBBE doit confirmer l’état de la relation et la dénomination publique avant de le présenter comme partenaire." },
  meta: historical(["https://qbbe.ca/"], "Legacy homepage acknowledgement only; no current relationship is inferred."),
});

export const partners: Partner[] = [
  acknowledged("Dawson"),
  acknowledged("BCRC"),
  acknowledged("Concordia"),
  acknowledged("Canadian Red Cross"),
  {
    name: "Réseau réussite Montréal", category: category("Funder", "Bailleur de fonds"), relationshipStatus: "historical", relatedPrograms: ["pssp"],
    description: { en: "Acknowledged as funder on the historic Parenting Skills Support Program page.", fr: "Reconnu comme bailleur de fonds sur la page historique du Programme de soutien aux compétences parentales." },
    meta: historical(["https://qbbe.ca/pssp/"], "Historic PSSP funder acknowledgement; current relationship requires confirmation."),
  },
  {
    name: "Sommet Jeunes Afro (SDESJ)", category: category("Funder", "Bailleur de fonds"), relationshipStatus: "historical", relatedPrograms: ["sep"],
    description: { en: "Acknowledged on the historic Self-Elevation Project page.", fr: "Reconnu sur la page historique du Projet d’autoélévation." },
    meta: historical(["https://qbbe.ca/sep/"], "Historic SEP acknowledgement; current relationship requires confirmation."),
  },
  {
    name: "Ville de Montréal", category: category("Funder", "Bailleur de fonds"), relationshipStatus: "historical", relatedPrograms: ["sep"],
    description: { en: "Acknowledged on the historic Self-Elevation Project page.", fr: "Reconnue sur la page historique du Projet d’autoélévation." },
    meta: historical(["https://qbbe.ca/sep/"], "Historic SEP acknowledgement; current relationship requires confirmation."),
  },
];
