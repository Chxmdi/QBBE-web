import { notFound } from "next/navigation";
import { DonationForm } from "@/components/donation-form";
import { isLocale } from "@/lib/i18n";
export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <DonationForm locale={locale} />; }
