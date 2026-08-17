import { describe, expect, it } from "vitest";
import { legacyContentInventory } from "@/content/legacy-inventory";
import { legacyMembershipPlans } from "@/content/membership";
import { legacyBoardMembers } from "@/content/leadership";
import { partners } from "@/content/partners";
import { annualReportAdditions } from "@/content/annual-report-additions";
import { redirects } from "@/lib/legacy-redirects";
import { pages, programs, routeSeo } from "@/lib/content";
import { localizedMetadata } from "@/lib/seo";
import { donationContent } from "@/content/donation";
import sitemap from "@/app/sitemap";

describe("QBBE content migration", () => {
  it("preserves the named legacy programs as distinct records", () => {
    expect(programs.map((program) => program.slug)).toEqual(expect.arrayContaining([
      "academic-support", "early-literacy", "future-careers", "family-first", "learn-to-code", "bana", "da-costa-hall", "high-school-preparation", "daycare-program",
    ]));
  });

  it("does not reuse generic content for history and leadership", () => {
    expect(pages["about/history"].title.en).not.toBe(pages["about/leadership"].title.en);
    expect(pages["about/history"].sections[0].paragraphs[0].en).not.toBe(pages["about/leadership"].sections[0].paragraphs[0].en);
  });

  it("gives every inventory record a disposition", () => {
    expect(legacyContentInventory).toHaveLength(70);
    expect(legacyContentInventory.every((item) => Boolean(item.status))).toBe(true);
    expect(legacyContentInventory.some((item) => item.sourceUrl === "https://qbbe.ca/private-parenting-facebook-group/" && item.status === "archive")).toBe(true);
    expect(legacyContentInventory.some((item) => item.sourceUrl === "https://qbbe.ca/qbbe-and-red-rush-form-partnership-for-summer-institute-2021/" && item.status === "archive")).toBe(true);
    expect(legacyContentInventory.some((item) => item.sourceUrl === "https://qbbe.ca/product/donation/" && item.proposedNewRoute === "/en/donate")).toBe(true);
    expect(legacyContentInventory.some((item) => item.title === "17 Point Agreement reference" && item.status === "verify")).toBe(true);
    expect(legacyContentInventory.some((item) => item.sourceUrl === "https://qbbe.ca/daycare-program/" && item.status === "verify" && item.proposedNewRoute === "/en/programs/daycare-program")).toBe(true);
  });

  it("keeps source-backed program detail fields and bilingual review state in the content layer", () => {
    const daCosta = programs.find((program) => program.slug === "da-costa-hall");
    expect(daCosta?.subjects).toHaveLength(2);
    expect(daCosta?.sourceUrls).toContain("https://student.qbbe.ca/");
    expect(programs.every((program) => program.meta.translation.en && program.meta.translation.fr)).toBe(true);
  });

  it("uses verified public document files for historical reports", async () => {
    const { reports } = await import("@/content/organization");
    expect(reports).toEqual(expect.arrayContaining([
      expect.objectContaining({ year: 2020, type: "annual-report", fileUrl: "https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf" }),
      expect.objectContaining({ year: 2000, type: "financial-statement", fileUrl: "https://qbbe.ca/wp-content/uploads/2020/11/Financial-Statements-2000.pdf" }),
      expect.objectContaining({ year: 2021, type: "governance", fileUrl: "https://qbbe.ca/wp-content/uploads/Minutes-of-AGM-2021.pdf" }),
    ]));
  });

  it("describes the verified report files accurately while retaining an approval gate", () => {
    const reportLead = pages["impact/reports"].lead.en;
    expect(reportLead).toContain("verified public archival records");
    expect(reportLead).toContain("must still approve");
    expect(reportLead).not.toContain("pending file verification");
  });

  it("keeps historic Ally plans inactive until QBBE approves a current offer", () => {
    expect(legacyMembershipPlans.length).toBeGreaterThan(0);
    expect(legacyMembershipPlans.every((plan) => plan.billingPeriod === "year" && !plan.active && plan.requiresApproval && plan.sourceStatus === "needs-review")).toBe(true);
  });

  it("maps preserved initiatives to the institutional archive", () => {
    expect(redirects).toEqual(expect.arrayContaining([
      expect.objectContaining({ source: "/pssp", destination: "/en/resources/archived-initiatives", permanent: true }),
      expect.objectContaining({ source: "/sep", destination: "/en/resources/archived-initiatives", permanent: true }),
      expect.objectContaining({ source: "/private-parenting-facebook-group", destination: "/en/resources/parents", permanent: true }),
      expect.objectContaining({ source: "/product/donation", destination: "/en/donate", permanent: true }),
      expect.objectContaining({ source: "/daycare-program", destination: "/en/programs/daycare-program", permanent: true }),
    ]));
  });

  it("preserves historical leadership and funder records without representing them as current", () => {
    expect(legacyBoardMembers).toHaveLength(10);
    expect(legacyBoardMembers.every((member) => member.status === "historical")).toBe(true);
    expect(partners.some((partner) => partner.name === "Réseau réussite Montréal" && partner.relationshipStatus === "historical")).toBe(true);
    expect(partners.some((partner) => partner.name === "Red Rush Basketball Program" && partner.relationshipStatus === "historical")).toBe(true);
    expect(partners.some((partner) => partner.name === "Centraide" && partner.relationshipStatus === "historical")).toBe(true);
    expect(partners.every((partner) => partner.relationshipStatus !== "current")).toBe(true);
  });

  it("keeps annual-report migration additions traceable and historical", () => {
    expect(annualReportAdditions["about/history"].meta.sourceUrls).toContain("https://qbbe.ca/wp-content/uploads/QBBE-Annual-Report-2020-digital-copy.pdf");
    expect(annualReportAdditions["resources/archived-initiatives"].sections[0].heading.en).toContain("Black Family Support Program");
  });

  it("gives every route-specific page unique, traceable bilingual content", () => {
    const content = Object.values(pages);
    const identity = content.map((page) => `${page.title.en}::${page.lead.en}`);
    expect(new Set(identity)).toHaveProperty("size", content.length);
    expect(content.every((page) => page.meta.sourceUrls.length > 0 && page.meta.translation.en && page.meta.translation.fr)).toBe(true);
  });

  it("uses centralized public contact data in route content", async () => {
    const { organization } = await import("@/content/organization");
    const contactCopy = pages["about/contact"].sections[0].paragraphs[0];
    const faqHelpCopy = pages["resources/faq"].sections[0].paragraphs[0];
    expect(contactCopy.en).toContain(organization.address);
    expect(contactCopy.en).toContain(organization.phone);
    expect(contactCopy.en).toContain(organization.primaryEmail);
    expect(faqHelpCopy.en).toContain(organization.phone);
    expect(faqHelpCopy.en).toContain(organization.primaryEmail);
  });

  it("includes each managed page in both locale sitemaps", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of Object.keys(pages)) {
      expect(urls).toContain(`https://qbbe.ca/en/${path}`);
      expect(urls).toContain(`https://qbbe.ca/fr/${path}`);
    }
  });

  it("gives every foundation route source-traceable localized SEO metadata", () => {
    expect(Object.values(routeSeo).every((entry) => entry.meta.sourceUrls.length > 0 && entry.meta.translation.en && entry.meta.translation.fr)).toBe(true);
    const metadata = localizedMetadata("fr", "/register", routeSeo.register.title, routeSeo.register.description);
    expect(metadata).toMatchObject({
      title: routeSeo.register.title.fr,
      description: routeSeo.register.description.fr,
      alternates: { canonical: "/fr/register", languages: { en: "/en/register", fr: "/fr/register", "x-default": "/en/register" } },
      openGraph: { locale: "fr_CA", alternateLocale: "en_CA" },
    });
  });

  it("retains the current in-kind giving reference without publishing an unverified provider link", () => {
    expect(donationContent.inKind.meta.sourceUrls).toContain("https://qbbe.ca/donate/");
    expect(donationContent.inKind.body.en).toContain("item wish list");
    expect(donationContent.inKind.body.en).toContain("must be confirmed");
    expect(donationContent.inKind.body.en).not.toMatch(/https?:\/\//);
  });
});
