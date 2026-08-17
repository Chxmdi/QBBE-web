import { z } from "zod";

export const newsletterSchema = z.object({ email: z.string().email().max(254), locale: z.enum(["en", "fr"]) });
export const registrationSchema = z.object({ type: z.enum(["program", "event", "membership"]), locale: z.enum(["en", "fr"]), program: z.string().max(100).optional(), event: z.string().max(100).optional(), membership: z.string().max(100).optional(), firstName: z.string().trim().max(100).optional(), lastName: z.string().trim().max(100).optional(), email: z.string().email().max(254).optional(), phone: z.string().trim().max(40).optional(), school: z.string().trim().max(1000).optional(), consent: z.literal("yes").optional() });
export const donationSchema = z.object({ amount: z.number().positive().max(100000), frequency: z.enum(["once", "monthly"]), locale: z.enum(["en", "fr"]), donor: z.object({ name: z.string().trim().min(1).max(150), email: z.string().email().max(254), designation: z.enum(["general", "academic", "family", "technology"]) }) });
