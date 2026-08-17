# QBBE Content Editorial Workflow

The Website 2.0 fallback content is a traceable migration layer, not a replacement for QBBE editorial approval. The Sanity schemas provide the handoff model for the approved production content.

## Approval rule

An editor may publish a record only when:

1. Its QBBE owner is identified.
2. Its English and French status are both `approved`, or the record is intentionally language-specific and that decision is documented.
3. The source URL or source document is attached.
4. Its `verificationStatus` is `verified`.
5. `lastReviewed` and `nextReview` are populated.

Do not publish a payment plan, a metric, event, contact detail, tax statement, registration requirement, partner logo, staff/board profile, hotline, or program availability merely because a legacy source includes it.

## Content-specific gates

| Content type | Required QBBE approver | Additional publishing gate |
| --- | --- | --- |
| Program | Program lead | Current dates, eligibility, delivery, fee, capacity, registration, and safeguarding language are confirmed. |
| Membership plan | Executive and Finance | `active` is true, `requiresApproval` is false, benefits are current, and the Stripe Price ID is approved. |
| Donation or tax content | Finance and Legal | Charity, receipt, processing, and restricted-fund language is approved. |
| Contact settings | Operations | Every public contact value is confirmed and superseded addresses are retired. |
| Person | Board secretary or Operations | Current status, role, term, photo and biography consent are confirmed. |
| Partner/funder | Partnerships | Relationship status, logo rights, category, and program association are confirmed. |
| Event | Event owner | Date, venue/virtual details, accessibility, speakers, registration, and cancellation policy are confirmed. |
| Metric | Data owner and Executive | Source, calculation period, verification date, and `approved` are confirmed. |
| Hotline/support | Service owner | Status, scope, hours, privacy language, limits, and emergency guidance are approved. |

## Migration order

1. Create/approve organization settings and route-specific pages.
2. Create the program, FAQ, person, partner, report, and archive records with their source URLs.
3. Review French content with the French content owner.
4. Replace the fallback record only after the validation gates above are satisfied.
5. Retain a legacy record as `historical` rather than deleting it when it carries institutional value.

## Current status

See [CONTENT_VERIFICATION_REQUIRED.md](CONTENT_VERIFICATION_REQUIRED.md) for every approval currently blocking a production claim and [CONTENT_MIGRATION_REPORT.md](CONTENT_MIGRATION_REPORT.md) for the legacy disposition inventory.
