import Link from "next/link";
import { organization } from "@/content/organization";
import { localePath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div><h3>QBBE</h3><p style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.6, maxWidth: 360 }}>{locale === "en" ? "Supporting students, families, and educational opportunity across Quebec." : "Soutenir les élèves, les familles et les possibilités éducatives partout au Québec."}</p><Link className="button button--gold" href={localePath(locale, "/donate")}>{locale === "en" ? "Support our mission" : "Soutenir notre mission"}</Link></div>
      <div><h3>{locale === "en" ? "Explore" : "Explorer"}</h3><Link href={localePath(locale, "/programs")}>{locale === "en" ? "Programs" : "Programmes"}</Link><Link href={localePath(locale, "/impact")}>Impact</Link><Link href={localePath(locale, "/events")}>{locale === "en" ? "Events" : "Événements"}</Link><Link href={localePath(locale, "/resources")}>{locale === "en" ? "Resources" : "Ressources"}</Link></div>
      <div><h3>{locale === "en" ? "Connect" : "Nous joindre"}</h3><Link href={localePath(locale, "/get-involved/membership")}>{locale === "en" ? "Become an Ally" : "Devenir allié"}</Link><Link href={localePath(locale, "/get-involved/volunteer")}>{locale === "en" ? "Volunteer" : "Bénévolat"}</Link><Link href={localePath(locale, "/about/contact")}>{locale === "en" ? "Contact" : "Contact"}</Link><a href={`mailto:${organization.primaryEmail}`}>{organization.primaryEmail}</a></div>
    </div>
    <div className="shell footer-bottom">© {new Date().getFullYear()} Quebec Board of Black Educators · {locale === "en" ? "Built for community." : "Construit pour la communauté."}</div>
  </footer>;
}
