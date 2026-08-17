import Link from "next/link";
import { legacyMembershipPlans } from "@/content/membership";
import { localePath, type Locale } from "@/lib/i18n";

const audiences = [
  { en: "Corporate Allies", fr: "Alliés corporatifs" },
  { en: "Local Business Allies", fr: "Alliés entreprises locales" },
  { en: "Allies in Education", fr: "Alliés en éducation" },
  { en: "Community & Individual Allies", fr: "Alliés communautaires et individuels" },
];

export function MembershipPlans({ locale }: { locale: Locale }) {
  return <>
    <div className="notice">{locale === "en" ? "QBBE Ally is distinct from a donation. Plan pricing, benefits, eligibility, and payment availability are awaiting QBBE leadership and finance approval, so no checkout is offered yet." : "L’adhésion Allié QBBE est distincte d’un don. Les prix, avantages, critères d’admissibilité et la disponibilité des paiements sont en attente de l’approbation de la direction et des finances de QBBE; aucun paiement n’est donc offert pour le moment."}</div>
    <div className="ally-grid" style={{ marginTop: "2rem" }}>{audiences.map((audience) => <article className="ally-item" key={audience.en}><p className="eyebrow" style={{ color: "var(--blue)" }}>QBBE Ally</p><h3>{audience[locale]}</h3><p>{locale === "en" ? "Tell QBBE how you would like to support the work. A team member will share approved membership options when available." : "Indiquez à QBBE comment vous aimeriez soutenir le travail. Une personne de l’équipe vous communiquera les options d’adhésion approuvées lorsqu’elles seront disponibles."}</p></article>)}</div>
    <details className="notice" style={{ marginTop: "2rem" }}><summary>{locale === "en" ? "View the preserved 2021 QBBE donor-program record" : "Voir le dossier préservé du programme de donateurs QBBE de 2021"}</summary><div className="resource-list" style={{ marginTop: "1rem" }}>{legacyMembershipPlans.map((plan) => <article className="list-item" key={`${plan.audience.en}-${plan.tier}`}><time>{plan.tier}<br />{plan.capacity} {locale === "en" ? "members" : "membres"}</time><div><h3>{plan.audience[locale]} · ${plan.price}/{locale === "en" ? "year" : "an"}</h3><p>{plan.benefits[0][locale]}</p></div></article>)}</div></details>
    <Link className="button" href={localePath(locale, "/about/contact")}>{locale === "en" ? "Ask about QBBE Ally" : "Se renseigner sur Allié QBBE"}</Link>
  </>;
}
