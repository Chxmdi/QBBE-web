import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) { const parsed = newsletterSchema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: "Invalid email address" }, { status: 400 }); const client = createAdminClient(); if (client) { const { error } = await client.from("newsletter_subscribers").upsert({ email: parsed.data.email, locale: parsed.data.locale, consented_at: new Date().toISOString() }, { onConflict: "email" }); if (error) return NextResponse.json({ error: "Unable to subscribe" }, { status: 500 }); } return NextResponse.json({ ok: true }); }
