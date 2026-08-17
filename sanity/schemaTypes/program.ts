import { defineField, defineType } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") => defineField({ name, title, type: "object", fields: [{ name: "en", type, title: "English" }, { name: "fr", type, title: "Français" }] });
const localizedText = (name: string, title: string) => localized(name, title, "text");
const translationStatus = (name: string, title: string) => defineField({ name, title, type: "string", options: { list: ["not-started", "draft", "needs-review", "approved"] }, initialValue: "not-started" });

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    localized("title", "Title"),
    defineField({ name: "slug", title: "Slug", type: "object", fields: [{ name: "en", type: "slug", title: "English", options: { source: "title.en" } }, { name: "fr", type: "slug", title: "Français", options: { source: "title.fr" } }] }),
    localizedText("summary", "Short summary"),
    localizedText("fullDescription", "Full description"),
    defineField({ name: "audience", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "needs", type: "array", of: [{ type: "string" }] }),
    localized("ageRange", "Age range"),
    localized("gradeRange", "Grade range"),
    defineField({ name: "subjects", type: "array", of: [{ type: "string" }] }),
    localizedText("goals", "Goals"),
    localizedText("activities", "Activities and learning"),
    localized("format", "Format"),
    localized("location", "Location"),
    localized("schedule", "Schedule"),
    localized("registrationStatus", "Registration status"),
    localizedText("eligibility", "Eligibility"),
    localizedText("fees", "Fees"),
    localizedText("memberBenefits", "Member benefits"),
    localizedText("subsidies", "Subsidies and support"),
    localizedText("outcomes", "Intended outcomes"),
    localizedText("history", "Historical context"),
    defineField({ name: "registrationUrl", type: "url" }),
    defineField({ name: "relatedPrograms", type: "array", of: [{ type: "reference", to: [{ type: "program" }] }] }),
    defineField({ name: "partners", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "funders", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "faq", title: "Program FAQs", type: "array", of: [{ type: "object", fields: [localized("question", "Question"), localizedText("answer", "Answer")] }] }),
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
