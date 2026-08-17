import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { isLocale, localePath } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><PageHero eyebrow={locale === "en" ? "Events" : "Événements"} title={locale === "en" ? "Gather when details are confirmed." : "Se rassembler lorsque les détails sont confirmés."} lead={locale === "en" ? "QBBE events are published only after their date, audience, location or virtual format, accessibility information, and registration status are confirmed." : "Les événements de QBBE ne sont publiés qu’après confirmation de leur date, public, lieu ou format virtuel, renseignements d’accessibilité et état des inscriptions."} /><section className="section"><div className="shell content-grid"><article className="prose"><h2>{locale === "en" ? "No upcoming events are published yet." : "Aucun événement à venir n’est encore publié."}</h2><p>{locale === "en" ? "The previous Website 2.0 seed events were removed because QBBE had not verified them. Subscribe for approved updates or contact QBBE about community programming." : "Les événements fictifs de Website 2.0 ont été retirés parce que QBBE ne les avait pas vérifiés. Inscrivez-vous pour recevoir les mises à jour approuvées ou communiquez avec QBBE au sujet de la programmation communautaire."}</p><Link className="button" href={localePath(locale, "/about/contact")}>{locale === "en" ? "Contact QBBE" : "Communiquer avec QBBE"}</Link></article><aside className="detail-meta"><dl><dt>{locale === "en" ? "Publication standard" : "Norme de publication"}</dt><dd>{locale === "en" ? "Source-backed and approved" : "Sourcé et approuvé"}</dd></dl></aside></div></section></>;
}
