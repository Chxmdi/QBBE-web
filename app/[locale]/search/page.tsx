import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchPage } from "@/components/search-page";
import { routeSeo } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? localizedMetadata(locale, "/search", routeSeo.search.title, routeSeo.search.description) : {};
}

export default async function SearchRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SearchPage locale={locale} />;
}
