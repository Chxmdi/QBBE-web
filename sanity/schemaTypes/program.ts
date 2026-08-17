import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });
const translationStatus = (name: string, title: string) => defineField({ name, title, type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" });

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    localized("title", "Title"),
    defineField({ name: "slug", title: "Slug", type: "object", fields: [{ name: "en", type: "slug", title: "English", options: { source: "title.en" } }, { name: "fr", type: "slug", title: "Français", options: { source: "title.fr" } }] }),
    localized("summary", "Short summary", "text"),
    localized("fullDescription", "Full description", "text"),
    defineField({ name: "audience", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "needs", type: "array", of: [{ type: "string" }] }),
    localized("ageRange", "Age range"),
    localized("gradeRange", "Grade range"),
    localized("format", "Format"),
    localized("schedule", "Schedule"),
    localized("registrationStatus", "Registration status"),
    defineField({ name: "registrationUrl", type: "url" }),
    defineField({ name: "relatedPrograms", type: "array", of: [{ type: "reference", to: [{ type: "program" }] }] }),
    defineField({ name: "sourceUrls", title: "Source URLs", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review", "needs-program-review", "needs-legal-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "migrationNotes", type: "text" }),
    translationStatus("enStatus", "English status"),
    translationStatus("frStatus", "French status"),
    defineField({ name: "owner", type: "string" }),
    defineField({ name: "lastReviewed", type: "date" }),
    defineField({ name: "nextReview", type: "date" }),
  ],
});
