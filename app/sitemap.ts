import type { MetadataRoute } from "next";
const routes = ["", "/about", "/programs", "/impact", "/events", "/get-involved", "/get-involved/membership", "/resources", "/register", "/donate"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qbbe.ca"; return ["en", "fr"].flatMap((locale) => routes.map((route) => ({ url: `${base}/${locale}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : .7 }))); }
