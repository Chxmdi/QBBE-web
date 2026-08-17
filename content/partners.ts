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
  {
    name: "Red Rush Basketball Program", category: category("Historical program partner", "Partenaire de programme historique"), relationshipStatus: "historical",
    description: { en: "QBBE’s 2021 Summer Institute article describes a collaboration with Red Rush combining educational support with basketball, physical and mental well-being, and leadership. It is not presented as a current offer or partnership.", fr: "L’article de QBBE sur l’Institut d’été 2021 décrit une collaboration avec Red Rush combinant le soutien éducatif, le basketball, le bien-être physique et mental ainsi que le leadership. Elle n’est pas présentée comme une offre ou un partenariat actuel." },
    meta: historical(["https://qbbe.ca/qbbe-and-red-rush-form-partnership-for-summer-institute-2021/"], "Historic 2021 Summer Institute collaboration; current relationship requires confirmation."),
  },
  {
    name: "JAM VOCAL Foundation", category: category("Historical program partner", "Partenaire de programme historique"), relationshipStatus: "historical", relatedPrograms: ["bana"],
    description: { en: "A 2023 BANA/JAM VOCAL Camp Director posting identifies the foundation as a collaborator for that summer camp. It is not presented as a current partnership.", fr: "Une offre de poste de direction du camp BANA/JAM VOCAL de 2023 identifie la fondation comme collaboratrice de ce camp estival. Elle n’est pas présentée comme un partenariat actuel." },
    meta: historical(["https://qbbe.ca/camp-director/"], "Historic 2023 BANA/JAM VOCAL summer-camp collaboration; current relationship requires confirmation."),
  },
  {
    name: "Centraide", category: category("Historical funder", "Bailleur de fonds historique"), relationshipStatus: "historical",
    description: { en: "QBBE’s 2020 Annual Report credits Centraide funding with supporting website rebranding and online classes, tutoring, and academic support during that period. It is not presented as a current grant.", fr: "Le rapport annuel 2020 de QBBE attribue au financement de Centraide le soutien à la refonte du site Web ainsi qu’aux cours en ligne, au tutorat et au soutien scolaire pendant cette période. Il n’est pas présenté comme une subvention actuelle." },
    meta: historical(["https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf"], "Historic 2020 Annual Report acknowledgement; current relationship requires confirmation."),
  },
  {
    name: "Groupe 3737", category: category("Historical funder", "Bailleur de fonds historique"), relationshipStatus: "historical",
    description: { en: "Listed in QBBE’s 2020 Annual Report financial overview as a primary funder for that reporting period. It is not presented as a current funder.", fr: "Mentionné dans l’aperçu financier du rapport annuel 2020 de QBBE comme bailleur de fonds principal pour cette période. Il n’est pas présenté comme bailleur de fonds actuel." },
    meta: historical(["https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf"], "Historic 2020 Annual Report acknowledgement; current relationship requires confirmation."),
  },
  {
    name: "EMSB", category: category("Historical funder", "Bailleur de fonds historique"), relationshipStatus: "historical",
    description: { en: "Listed in QBBE’s 2020 Annual Report financial overview as an EMSB grant for that reporting period. It is not presented as a current grant.", fr: "Mentionné dans l’aperçu financier du rapport annuel 2020 de QBBE comme subvention de l’EMSB pour cette période. Il n’est pas présenté comme une subvention actuelle." },
    meta: historical(["https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf"], "Historic 2020 Annual Report acknowledgement; current relationship requires confirmation."),
  },
  {
    name: "The Summit 4C", category: category("Historical funder", "Bailleur de fonds historique"), relationshipStatus: "historical",
    description: { en: "Listed in QBBE’s 2020 Annual Report financial overview as a primary funder for that reporting period. It is not presented as a current funder.", fr: "Mentionné dans l’aperçu financier du rapport annuel 2020 de QBBE comme bailleur de fonds principal pour cette période. Il n’est pas présenté comme bailleur de fonds actuel." },
    meta: historical(["https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf"], "Historic 2020 Annual Report acknowledgement; current relationship requires confirmation."),
  },
];
