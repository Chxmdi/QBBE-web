import type { ContentSourceMeta, Person } from "./types";

const meta: ContentSourceMeta = {
  sourceUrls: ["https://qbbe.ca/board-of-directors/"],
  migratedAt: "2026-08-17",
  migratedBy: "Website 2.0 migration",
  verificationStatus: "needs-editorial-review",
  notes: "Names appeared on QBBE's legacy Board of Directors page. No current title, term, biography, photo, or consent is inferred.",
  translation: { en: "needs-review", fr: "needs-review" },
};

export const legacyBoardMembers: Person[] = [
  "Alix Adrien", "Nadine Collins", "Qaadira De Coteau", "Martial Joseph", "Jamie Sylvester",
  "Otis L. Delaney", "Dr. Clarence Bayne", "Dr. Horace Goddard", "Curtis George", "Garvin Jeffers",
].map((name) => ({ name, category: "board", status: "historical", meta }));
