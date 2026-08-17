import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "path", title: "Locale-free path", type: "string", validation: (rule) => rule.required() }),
    localized("eyebrow", "Eyebrow"), localized("title", "Title"), localized("lead", "Lead", "text"), localized("body", "Body", "text"),
    defineField({ name: "sourceUrls", title: "Source URLs", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review", "needs-program-review", "needs-legal-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "enStatus", title: "English status", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "frStatus", title: "French status", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
