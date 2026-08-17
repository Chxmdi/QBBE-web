import { defineField, defineType } from "sanity";

const localized = (name: string, title: string) => defineField({ name, title, type: "object", fields: [{ name: "en", type: "string", title: "English" }, { name: "fr", type: "string", title: "Français" }] });

export const impactMetric = defineType({
  name: "impactMetric",
  title: "Impact metric",
  type: "document",
  fields: [
    localized("label", "Label"), defineField({ name: "value", type: "string", validation: (rule) => rule.required() }), defineField({ name: "source", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "sourceUrl", type: "url" }), defineField({ name: "verifiedAt", type: "date" }), defineField({ name: "approved", type: "boolean", initialValue: false }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }), defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
