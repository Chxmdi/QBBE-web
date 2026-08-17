import type { MetadataRoute } from "next";
import { pages, programs } from "@/lib/content";

const foundationRoutes = ["", "/programs", "/events", "/get-involved/membership", "/register", "/donate", "/search"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qbbe.ca";
  const lastModified = new Date("2026-08-17");
  const contentRoutes = Object.keys(pages).map((path) => `/${path}`);
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);
  return ["en", "fr"].flatMap((locale) => [...foundationRoutes, ...contentRoutes, ...programRoutes].map((route) => ({ url: `${base}/${locale}${route}`, lastModified, changeFrequency: route === "" ? "monthly" as const : "weekly" as const, priority: route === "" ? 1 : route.startsWith("/programs/") ? .8 : .7 })));
}
