import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { MembershipPlans } from "@/components/membership-plans";
import { isLocale } from "@/lib/i18n";
export default async function MembershipPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <><PageHero eyebrow="QBBE Ally" title={locale === "en" ? "Support QBBE through an Ally relationship." : "Soutenez QBBE par une relation d’allié."} lead={locale === "en" ? "Corporate, local business, education, and community/individual pathways are retained while QBBE confirms plans, benefits, and payment details." : "Les voies corporative, entreprise locale, éducation et communauté/individu sont préservées pendant que QBBE confirme les plans, avantages et détails de paiement."} /><section className="section"><div className="shell"><MembershipPlans locale={locale} /></div></section></>; }
