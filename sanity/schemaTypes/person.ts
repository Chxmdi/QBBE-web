import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    localized("role", "Role"), localized("bio", "Biography", "text"),
    defineField({ name: "category", type: "string", options: { list: ["board", "staff"] }, validation: (rule) => rule.required() }),
    defineField({ name: "status", type: "string", options: { list: ["current", "historical", "needs-review"] }, initialValue: "needs-review" }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }), defineField({ name: "linkedin", type: "url" }), defineField({ name: "term", type: "string" }),
    defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
