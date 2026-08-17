import { notFound } from "next/navigation";
import { DonationForm } from "@/components/donation-form";
import { isLocale } from "@/lib/i18n";
import { routeSeo } from "@/lib/content";
import { localizedMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? localizedMetadata(locale, "/donate", routeSeo.donate.title, routeSeo.donate.description) : {};
}

export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <DonationForm locale={locale} checkoutEnabled={process.env.QBBE_DONATIONS_ENABLED === "true"} />; }
