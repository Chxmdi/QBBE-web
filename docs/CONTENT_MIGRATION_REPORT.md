# QBBE Website 2.0 — Content Migration Report

## Executive Summary

This migration replaces generic seed content with a structured, bilingual-ready content layer. It preserves source-backed QBBE institutional history, program knowledge, governance context, reports, volunteer material, contact details, research and advocacy context, while explicitly withholding unverified operational claims.

## Source Sites Reviewed

- `https://qbbe.ca/` and accessible linked QBBE-owned pages
- `https://student.qbbe.ca/`
- The Website 2.0 repository and its existing fallback content

## Total Legacy Pages Found

61 meaningful pages, services, initiatives, or records are represented in `content/legacy-inventory.ts`. The final public WordPress API comparison returned 56 indexed pages and recovered two records absent from the earlier inventory: the legacy Programs index and a private parenting Facebook-group form. The inventory also retains QBBE-owned French, student-portal, and homepage service records that are not separate WordPress page-index entries. Several routes returned a verification interstitial; those records are explicitly marked for follow-up.

## Content Classification

| Classification | Count | Treatment |
| --- | ---: | --- |
| Keep | 0 | No legacy item was copied unchanged; all retained material was rewritten, merged, archived, or held for verification |
| Rewrite | 10 | Rewritten into route-specific Website 2.0 content |
| Merge | 10 | Consolidated into the new information architecture |
| Archive | 24 | Retained as historical content, not current operational content |
| Delete | 5 | Internal or orphan utility pages intentionally excluded from public migration |
| Verify with QBBE | 12 | Kept out of current operational claims pending approval |

## Content Migrated

- Formal mission, institutional vision, nonprofit/research identity, and historical context
- 1968 founding era and QBBE’s stated December 29, 1971 legal registration
- Academic Support, Early Literacy, Future Careers, Family First, Learn to Code, BANA, Da Costa Hall, and High School Preparation program records
- PSSP, SEP, and Entrepreneurship/Leadership records in a dedicated institutional archive, each clearly separated from current programs
- Colibri Volunteer Program legacy mission, vision, and values
- Board committee context and a legacy leadership roster held for confirmation
- Legacy FAQ themes, contact data, report records, research, advocacy, and Anti-Racism Hotline status

## Programs Migrated

| Program | Migration state |
| --- | --- |
| Academic Support | Preserved; current portal links to QBBE student site; scope needs program review |
| Early Literacy | Preserved as distinct program; age, schedule, and format need confirmation |
| Future Careers | Preserved as an initiative; active status and commitments need confirmation |
| Family First | Detailed workshop themes migrated; expired 2026 date removed |
| Learn to Code | Legacy learning model preserved; 2024 timing and fee not presented as current |
| BANA | 2025 camp data retained as archived context, not current schedule/pricing |
| Da Costa Hall | Restored as a dedicated program; 2026 registration portal identified |
| High School Preparation | Preserved; current delivery requires confirmation |

## Programs Requiring Verification

Academic Support current grade/course delivery, Early Literacy current cycle, Future Careers current status, Learn to Code cycle/fee/waitlist, BANA 2026 schedule/fees/subsidy, Da Costa Hall current courses, High School Preparation active status, PSSP/SEP/entrepreneurship current status, and the newly recovered Daycare Program.

## Historical Claims Requiring Verification

- BANA and Da Costa Hall historical claim of serving more than 15,000 students since 1968
- Current titles, terms, biographies, and photo consent for all legacy board names
- The current status and scope of the Anti-Racism Hotline

## Contact Information Requiring Verification

The legacy contact page lists `5050 Côte Saint Luc Rd, Montreal, Quebec H3W 2H1`, `(514) 481-9400`, `info@qbbe.ca`, and Monday–Friday 9 am–4 pm. These are centralized in `content/organization.ts` and require QBBE operational approval before launch. A historic High School Preparation source names 5165 Sherbrooke West, Suite 317; it is not used as the public address and must be formally retired or reconciled by Operations.

## Donation/Tax Language Requiring Review

Charity status, tax receipt eligibility, legal payment wording, restricted donation options, and historic wishlist information have not been asserted as current. Finance and legal approval is required before enabling production checkout.

## Registration Data Protection

The new native student/guardian intake is not publicly enabled. QBBE’s existing student portal remains the registration destination while QBBE approves required fields, purpose, consent and media wording, access roles, retention, deletion, and the current Da Costa Hall registration structure.

## French Translation Gaps

Every new content object tracks English and French as `needs-review`. French routes contain French copy rather than a silent English fallback, but institutional, legal, operational, and program-owner review is still required.

## Reports Migrated

- 2020 Annual Report — archived record; file link and publication status require verification
- 2000 Financial Statement — archived record; file link and publication status require verification

## Redirects Added

The core legacy map in `lib/legacy-redirects.ts` covers history, board, partners, FAQ, all identified program URLs, volunteer, donate, contact, events, and the two report routes. New paths remain locale-first.

## Remaining Blockers

1. QBBE source-owner access or a complete export is needed to crawl blocked/orphan pages and PDFs.
2. QBBE approval is required for all current operations, pricing, forms, legal language, partner status, and translations.
3. Sanity needs the full content schemas and approved entries before the fallback content is replaced in production.
4. No current events, testimonials, impact metrics, or tax-receipt claims can be published without approval.

## Final Source Comparison

The final 2026-08-17 WordPress API page-index comparison found no unexplained current-page omission after adding the Programs index and private parenting Facebook Group form to `content/legacy-inventory.ts`. Every meaningful item reached in the QBBE public navigation or API index has an explicit disposition: migrated/re-written, merged, archived, intentionally deleted, or awaiting verification. The remaining differences are intentional: Website 2.0 removes unsupported seed metrics, scheduled events, testimonials, and current operational claims; it does not reproduce blocked legacy pages, expired dates, historic prices, private forms, or unverified partner/leadership data as current content.
