import { defineField, defineType } from "sanity";

const localized = (name: string, title: string) => defineField({ name, title, type: "object", fields: [{ name: "en", type: "string", title: "English" }, { name: "fr", type: "string", title: "Français" }] });

export const partner = defineType({
  name: "partner",
  title: "Partner or funder",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }), localized("category", "Category"), localized("description", "Description"),
    defineField({ name: "relationshipStatus", type: "string", options: { list: ["current", "historical", "needs-review"] }, initialValue: "needs-review" }),
    defineField({ name: "logo", type: "image", options: { hotspot: true } }), defineField({ name: "website", type: "url" }),
    defineField({ name: "relatedPrograms", type: "array", of: [{ type: "reference", to: [{ type: "program" }] }] }),
    defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
