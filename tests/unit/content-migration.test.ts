import { describe, expect, it } from "vitest";
import { legacyContentInventory } from "@/content/legacy-inventory";
import { pages, programs } from "@/lib/content";

describe("QBBE content migration", () => {
  it("preserves the named legacy programs as distinct records", () => {
    expect(programs.map((program) => program.slug)).toEqual(expect.arrayContaining([
      "academic-support", "early-literacy", "future-careers", "family-first", "learn-to-code", "bana", "da-costa-hall", "high-school-preparation",
    ]));
  });

  it("does not reuse generic content for history and leadership", () => {
    expect(pages["about/history"].title.en).not.toBe(pages["about/leadership"].title.en);
    expect(pages["about/history"].sections[0].paragraphs[0].en).not.toBe(pages["about/leadership"].sections[0].paragraphs[0].en);
  });

  it("gives every inventory record a disposition", () => {
    expect(legacyContentInventory.length).toBeGreaterThan(20);
    expect(legacyContentInventory.every((item) => Boolean(item.status))).toBe(true);
  });
});
