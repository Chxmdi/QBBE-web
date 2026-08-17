# Architecture

QBBE is a Next.js App Router application. Public editorial content is localized and managed in Sanity; secure operational records live in Supabase; Stripe owns card data and emits signed webhooks to QBBE.

## Data boundaries

- Sanity: pages, programs, events, resources, stories, reports, metadata, translations, review status.
- Supabase: registrations, memberships, donations, newsletters, contact submissions, roles and audit records.
- Stripe: checkout, recurring billing and payment lifecycle. Never store card details in QBBE systems.

All browser-facing data access must use the publishable Supabase key and RLS. The service role is server-only and is used by validated route handlers/webhooks.
