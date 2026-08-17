import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { MembershipPlans } from "@/components/membership-plans";
import { isLocale } from "@/lib/i18n";
export default async function MembershipPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <><PageHero eyebrow="QBBE Ally" title={locale === "en" ? "How would you like to support QBBE?" : "Comment aimeriez-vous soutenir QBBE?"} lead={locale === "en" ? "Choose the Ally path that reflects how you want to create sustained educational impact." : "Choisissez le parcours d’allié qui reflète votre manière de créer un impact éducatif durable."} /><section className="section"><div className="shell"><MembershipPlans locale={locale} /></div></section></>; }
