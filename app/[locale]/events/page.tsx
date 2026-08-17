import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { events } from "@/lib/content";
import { isLocale, localePath } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <><PageHero eyebrow={locale === "en" ? "Events" : "Événements"} title={locale === "en" ? "Gather, learn and grow together." : "Se rassembler, apprendre et grandir ensemble."} lead={locale === "en" ? "Find opportunities for students, families, educators, Allies and the wider community." : "Trouvez des occasions pour les élèves, les familles, les éducateurs, les alliés et toute la communauté."} /><section className="section"><div className="shell"><div className="filter-list" style={{ marginBottom: "2rem" }}><button aria-pressed="true">{locale === "en" ? "Upcoming" : "À venir"}</button><button>{locale === "en" ? "Students" : "Élèves"}</button><button>{locale === "en" ? "Families" : "Familles"}</button><button>{locale === "en" ? "Educators" : "Éducateurs"}</button><button>{locale === "en" ? "Community" : "Communauté"}</button></div><div className="event-list">{events.map((event) => <Link className="list-item" href={localePath(locale, `/events/${event.slug}`)} key={event.slug}><time>{formatDate(event.date, locale)}<br />{event.type[locale]}</time><div><h3>{event.title[locale]}</h3><p>{event.description[locale]}</p></div><ArrowUpRight /></Link>)}</div></div></section></>; }
