import { defineField, defineType } from "sanity";

const localized = (name: string, title: string) => defineField({ name, title, type: "object", fields: [{ name: "en", type: "string", title: "English" }, { name: "fr", type: "string", title: "Français" }] });

export const report = defineType({
  name: "report",
  title: "Report or publication",
  type: "document",
  fields: [
    localized("title", "Title"), localized("description", "Description"), defineField({ name: "year", type: "number" }),
    defineField({ name: "type", type: "string", options: { list: ["annual-report", "financial-statement", "research-report", "governance", "other"] } }),
    defineField({ name: "language", type: "string", options: { list: ["en", "fr", "bilingual"] } }), defineField({ name: "file", type: "file" }),
    defineField({ name: "archived", type: "boolean", initialValue: false }), defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review", "needs-legal-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
