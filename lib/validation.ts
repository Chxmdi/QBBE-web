import { z } from "zod";

export const newsletterSchema = z.object({ email: z.string().email().max(254), locale: z.enum(["en", "fr"]) });
export const donationSchema = z.object({ amount: z.number().positive().max(100000), frequency: z.enum(["once", "monthly"]), locale: z.enum(["en", "fr"]), donor: z.object({ name: z.string().trim().min(1).max(150), email: z.string().email().max(254), designation: z.literal("general").optional() }) });
