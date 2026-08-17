import type { ContentSection, ContentSourceMeta } from "./types";

const sourceUrl = "https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf";
const meta: ContentSourceMeta = {
  sourceUrls: [sourceUrl],
  migratedAt: "2026-08-17",
  migratedBy: "Website 2.0 migration",
  verificationStatus: "needs-editorial-review",
  notes: "Extracted from QBBE's verified public 2020 Annual Report. Statements remain historical unless QBBE confirms current applicability.",
  translation: { en: "needs-review", fr: "needs-review" },
};

export type PageContentSupplement = { sections: ContentSection[]; meta: ContentSourceMeta };

export const annualReportAdditions: Record<string, PageContentSupplement> = {
  "about/history": {
    meta,
    sections: [{
      heading: { en: "Other historic records", fr: "Autres dossiers historiques" },
      paragraphs: [{
        en: "QBBE’s 2020 Annual Report names Da Costa Hall, BANA, and a 17 Point Agreement in connection with a PSBGM Parity Committee study on barriers facing Black students. Website 2.0 preserves this reference but does not explain or revive the agreement until QBBE provides the underlying record and approved context.",
        fr: "Le rapport annuel 2020 de QBBE nomme Da Costa Hall, BANA et une entente en 17 points en lien avec une étude du comité de parité du PSBGM sur les obstacles auxquels font face les élèves noirs. Website 2.0 préserve cette référence, sans expliquer ni réactiver l’entente tant que QBBE n’aura pas fourni le document sous-jacent et le contexte approuvé.",
      }],
    }, {
      heading: { en: "Founding-year review", fr: "Révision de l’année de fondation" },
      paragraphs: [{
        en: "The legacy History page identifies 1968 as QBBE’s founding era, while the 2020 Annual Report uses 1969 when describing its formation. QBBE must confirm the canonical founding year before either date is treated as final.",
        fr: "La page historique indique 1968 comme époque de fondation de QBBE, tandis que le rapport annuel 2020 utilise 1969 pour décrire sa création. QBBE doit confirmer l’année de fondation officielle avant que l’une ou l’autre date soit considérée définitive.",
      }],
    }],
  },
  "about/mission": {
    meta,
    sections: [{
      heading: { en: "Historic sector record", fr: "Dossier historique des secteurs" },
      paragraphs: [{
        en: "QBBE’s 2020 Annual Report identifies multicultural and intercultural families, elementary students, and high-school students across the French, English, and private school sectors. Other QBBE materials also identify educators and English-speaking Black communities. QBBE should confirm current service scope before making operational claims.",
        fr: "Le rapport annuel 2020 de QBBE identifie les familles multiculturelles et interculturelles, les élèves du primaire et du secondaire des secteurs scolaire français, anglais et privé. D’autres documents de QBBE identifient aussi les éducatrices et éducateurs ainsi que les communautés noires anglophones. QBBE doit confirmer la portée actuelle des services avant toute affirmation opérationnelle.",
      }],
    }],
  },
  "resources/archived-initiatives": {
    meta,
    sections: [{
      heading: { en: "Black Family Support Program (2020 record)", fr: "Programme de soutien aux familles noires (dossier de 2020)" },
      paragraphs: [{
        en: "QBBE’s 2020 Annual Report describes a Black Family Support Program (PSFN) that supported families’ social and economic integration and aimed to strengthen family dynamics. The historical record mentions self-identity, emotional regulation, respectful behaviour, weekly materials, and food-basket deliveries. It is retained as a historic program record, not a current service offer.",
        fr: "Le rapport annuel 2020 de QBBE décrit un programme de soutien aux familles noires (PSFN) qui appuyait l’intégration sociale et économique des familles et visait à renforcer la dynamique familiale. Le dossier historique mentionne l’identité personnelle, la régulation des émotions, les comportements respectueux, des documents hebdomadaires et des livraisons de paniers alimentaires. Il est conservé comme dossier de programme historique, et non comme offre de service actuelle.",
      }],
    }],
  },
};
