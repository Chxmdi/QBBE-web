import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    localized("title", "Title"), defineField({ name: "slug", type: "object", fields: [{ name: "en", type: "slug", title: "English", options: { source: "title.en" } }, { name: "fr", type: "slug", title: "Français", options: { source: "title.fr" } }] }),
    localized("description", "Description", "text"), defineField({ name: "startDate", type: "datetime", validation: (rule) => rule.required() }), defineField({ name: "endDate", type: "datetime" }),
    localized("location", "Location"), defineField({ name: "format", type: "string", options: { list: ["in-person", "virtual", "hybrid"] } }), defineField({ name: "audience", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "registrationUrl", type: "url" }), defineField({ name: "image", type: "image", options: { hotspot: true } }), defineField({ name: "speakers", type: "array", of: [{ type: "reference", to: [{ type: "person" }] }] }),
    defineField({ name: "status", type: "string", options: { list: ["upcoming", "past", "cancelled"] }, validation: (rule) => rule.required() }),
    defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }), defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review"] }, initialValue: "needs-editorial-review" }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }), defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
