import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    localized("question", "Question"), localized("answer", "Answer", "text"),
    defineField({ name: "category", type: "string", options: { list: ["about", "programs", "donations", "membership", "volunteering", "contact"] } }),
    defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review", "needs-legal-review", "needs-program-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
