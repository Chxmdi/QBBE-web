import { defineField, defineType } from "sanity";

const localized = (name: string, title: string) => defineField({ name, title, type: "object", fields: [{ name: "en", type: "string", title: "English" }, { name: "fr", type: "string", title: "Français" }] });

export const membershipPlan = defineType({
  name: "membershipPlan",
  title: "QBBE Ally plan",
  type: "document",
  fields: [
    localized("audienceType", "Audience type"), defineField({ name: "tier", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "price", type: "number", validation: (rule) => rule.min(0) }), defineField({ name: "currency", type: "string", initialValue: "CAD" }),
    defineField({ name: "billingPeriod", type: "string", options: { list: ["year"] }, initialValue: "year" }),
    defineField({ name: "benefits", type: "array", of: [{ type: "object", fields: [{ name: "en", type: "string", title: "English" }, { name: "fr", type: "string", title: "Français" }] }] }),
    defineField({ name: "active", type: "boolean", initialValue: false }), defineField({ name: "requiresApproval", type: "boolean", initialValue: true }), defineField({ name: "capacity", type: "number", validation: (rule) => rule.min(0) }),
    defineField({ name: "stripePriceId", title: "Stripe Price ID", type: "string", hidden: ({ document }) => !document?.active }),
    defineField({ name: "sourceStatus", type: "string", options: { list: ["verified", "needs-review"] }, initialValue: "needs-review" }), defineField({ name: "sourceUrls", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "enStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }), defineField({ name: "frStatus", type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" }),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
