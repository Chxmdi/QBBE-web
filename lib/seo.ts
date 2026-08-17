import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { LocalizedString } from "@/content/types";

export function localizedMetadata(locale: Locale, path: string, title: LocalizedString, description: LocalizedString): Metadata {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const canonical = `/${locale}${normalizedPath}`;
  const alternateLocale = locale === "en" ? "fr" : "en";
  return {
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical,
      languages: { en: `/en${normalizedPath}`, fr: `/fr${normalizedPath}`, "x-default": `/en${normalizedPath}` },
    },
    openGraph: {
      title: title[locale],
      description: description[locale],
      url: canonical,
      locale: locale === "en" ? "en_CA" : "fr_CA",
      alternateLocale: alternateLocale === "en" ? "en_CA" : "fr_CA",
    },
  };
}
