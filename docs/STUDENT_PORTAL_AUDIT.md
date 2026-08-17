# QBBE Student Portal — Public Registration Audit

## Scope and method

This is a limited, public-source audit completed on 2026-08-17. It reviewed the unauthenticated landing page at `https://student.qbbe.ca/`; it did not submit a form, create an account, inspect staff-only data, or collect applicant information.

## Publicly observed entry points

| Observation | Treatment in Website 2.0 |
| --- | --- |
| The portal declares English and French alternatives. | Preserve the Website 2.0 locale-first experience and hand off to the portal without assuming equivalent registration content. |
| The landing page identifies itself as the QBBE Membership and Registration Portal. | Treat it as the current operational registration destination. |
| It links to `dacosta-registration/` and states that Da Costa Hall summer-school registrations are open; the published flyer is dated 2026. | Keep the Da Costa Hall portal handoff and mark the current course, exam, eligibility, capacity, and fee details for QBBE confirmation. |
| It links to `online-support-registration/` for Academic Support. | Keep the Academic Support portal handoff; do not infer grade, subject, format, schedule, or capacity from the landing page. |
| It links to `membership/`. | Do not migrate historic membership checkout or benefits into a new payment flow until QBBE approves them. |

## Intake-data signal, not a replacement specification

Public implementation markup contains legacy field-label selectors that refer to categories such as student identity, guardian/contact details, address, school board, language of instruction, grade, course priorities, referral source, payment method, and registration for more than one child. This is evidence that the operational process may handle sensitive student and family data. It is **not** evidence that each field is currently active, required, appropriate, or approved for a new platform.

Website 2.0 therefore does not reproduce these fields or enable a native student/guardian application. The existing portal remains the handoff while QBBE reviews the operational process.

## QBBE decisions required before native registration

1. Confirm each field’s purpose, necessity, legal basis, required/optional status, and approved bilingual wording.
2. Approve guardian authority, emergency/contact handling, consent and media language, and safeguarding/escalation workflow.
3. Set staff roles, least-privilege access, audit logging, retention period, deletion/export process, and an incident response owner.
4. Confirm the active programs, current schedule, eligibility, course selection, waitlist/capacity, payment policy, and confirmation-email content.
5. Test the approved flow with QBBE staff before changing the public handoff.

## Migration decision

The Website 2.0 `/en/register` and `/fr/register` routes remain safe portal handoffs. The portal observation is linked to the verification register and does not authorize a Supabase-backed native intake.
