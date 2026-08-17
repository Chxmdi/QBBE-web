import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanity = projectId ? createClient({ projectId, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production", apiVersion: "2026-08-17", useCdn: process.env.NODE_ENV === "production" }) : null;

export const programQuery = `*[_type == "program" && defined(slug[$locale].current)] | order(title[$locale] asc) { "slug": slug[$locale].current, "title": title[$locale], "summary": summary[$locale], audience, needs, ageRange, languages, deliveryFormat }`;
