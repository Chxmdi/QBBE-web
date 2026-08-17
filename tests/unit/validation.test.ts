import { describe, expect, it } from "vitest";
import { donationSchema, newsletterSchema } from "@/lib/validation";
describe("validation", () => { it("accepts a valid newsletter subscription", () => expect(newsletterSchema.safeParse({ email: "hello@example.org", locale: "en" }).success).toBe(true)); it("rejects an invalid donation amount", () => expect(donationSchema.safeParse({ amount: 0, frequency: "once", locale: "en", donor: { name: "A", email: "a@example.org", designation: "general" } }).success).toBe(false)); });
