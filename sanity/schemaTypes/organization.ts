import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });
const status = (name: string, title: string) => defineField({ name, title, type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" });

export const organization = defineType({
  name: "organizationSettings",
  title: "Organization settings",
  type: "document",
  fields: [
    defineField({ name: "legalName", title: "Legal name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "publicName", title: "Public name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "address", type: "text" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "primaryEmail", title: "Primary email", type: "string", validation: (rule) => rule.email() }),
    localized("officeHours", "Office hours", "text"),
    defineField({ name: "socialLinks", type: "object", fields: [
      defineField({ name: "instagram", type: "url" }), defineField({ name: "facebook", type: "url" }),
      defineField({ name: "linkedin", type: "url" }), defineField({ name: "youtube", type: "url" }),
    ] }),
    defineField({ name: "charityNumber", type: "string" }),
    defineField({ name: "sourceUrls", title: "Source URLs", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "verificationStatus", type: "string", options: { list: ["verified", "needs-editorial-review", "needs-legal-review"] }, initialValue: "needs-editorial-review" }),
    status("enStatus", "English status"), status("frStatus", "French status"),
    defineField({ name: "owner", type: "string" }), defineField({ name: "lastReviewed", type: "date" }), defineField({ name: "nextReview", type: "date" }),
  ],
});
