# QBBE Website 2.0

## Run locally

1. Copy `.env.example` to `.env.local` and add provider credentials as available.
2. Run `npm install` then `npm run dev`.
3. Apply `supabase/migrations/20260817165507_qbbe_initial_schema.sql` to the linked Supabase project after review.

Without external credentials, the site runs with bilingual seed content and safe no-op transactional fallbacks. The Stripe webhook and Supabase writes activate only when their server-side keys are configured.

## Content migration

- [Content migration report](docs/CONTENT_MIGRATION_REPORT.md)
- [QBBE verification register](docs/CONTENT_VERIFICATION_REQUIRED.md)
- [Legacy URL map](docs/LEGACY_URL_MAP.md)

The fallback content is deliberately source-traceable and marks English/French approval status. It is not a substitute for QBBE program, legal, finance, and translation approval in Sanity.

## Before production

- Replace image placeholders with approved QBBE media and documented consent/alt text.
- Configure Sanity schemas/content and edit workflows.
- Set production Supabase project URL, publishable key, service role key, Stripe keys and webhook secret in Vercel.
- Confirm data-retention, consent, tax-receipt, restricted-fund, email, and financial policies.
- Build and validate the legacy redirect inventory from qbbe.ca.
