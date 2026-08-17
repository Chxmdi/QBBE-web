# Content Migration Completion Audit

Reviewed: 2026-08-17. This audit records the evidence currently available in the repository. “Approval required” is an intentional safety gate, not an assertion that the underlying historic record is false.

| Requirement | Evidence | Current result | Remaining proof needed |
| --- | --- | --- | --- |
| Formal mission and vision | `content/pages.ts` → `about/mission` | Migrated as separate, source-traceable sections | Institutional and French approval |
| Institutional identity and who QBBE serves | `about`, `about/our-story`, `about/mission` | Education, research, advocacy, community, students/families/educators preserved | Sector-specific audience claims need confirmation |
| Verified history | `about/history` | Late-1960s context, 1968 formation, and Dec. 29, 1971 registration retained; filler omitted | Additional milestones only if QBBE sources them |
| Academic Support | `content/programs.ts` → `academic-support` | Portal pathway, historic subjects and delivery model structured | Current course, grade, format, and schedule approval |
| Early Literacy | `content/programs.ts` → `early-literacy` | Under-five historic record, literacy focus, environment, snacks and historic session context retained | Current age, cycle, fee, membership status |
| Learn to Code | `content/programs.ts` → `learn-to-code` | Legacy age/curriculum/activity/fee caveat retained | Current age, cycle, fee, waiting-list status |
| Family First | `content/programs.ts` → `family-first` | Family audiences, goals, and detailed workshop themes retained | Current series and registration approval |
| BANA | `content/programs.ts` → `bana` | 2025 summer-camp model, academics, activities, historic fees/subsidies separated from current claims | Current summer schedule, ages, pricing, subsidies |
| Da Costa Hall | `content/programs.ts` → `da-costa-hall` | Dedicated secondary remediation record and current student-portal pathway | Current courses, exams, grades, eligibility |
| High School Preparation | `content/programs.ts` → `high-school-preparation` | Transition goals, workshop themes, and historical intended outcome retained | Confirm active delivery |
| Future Careers | `content/programs.ts` → `future-careers` | Legacy initiative retained without salary/course promise | Confirm active, archive, or remove |
| PSSP, SEP, Entrepreneurship | `resources/archived-initiatives`, inventory and redirects | Historical curriculum/funder knowledge retained in institutional archive | Confirm continued archive or reactivation |
| Youth Empowerment | `impact/youth-empowerment` | Preserved as institutional theme, not invented active program | Confirm current initiative status |
| Advocacy | `impact/advocacy` | Historic and research-informed context migrated | Confirm current activity before claims |
| Research and publications | `impact/research`, `resources/research`, `resources/publications` | Purpose and resource architecture present; no fake database claim | Approved current resources and publications |
| Anti-Racism Hotline | `resources/anti-racism-support` | Status expressly unresolved; no unsafe contact detail | Service-owner decision and public protocol |
| Volunteer / Colibri | `get-involved/volunteer` | Historic mission, vision, and values retained with interest-only form | Current name, roles, screening, privacy, contact |
| FAQ | `content/organization.ts` → `faqs` | Structured, bilingual FAQ records and legal caveats | Legal/finance approval for tax/donation content |
| Reports/transparency | `reports`, report routes, `sanity/schemaTypes/report.ts` | 2020/2000 legacy records retained as archive | Approved source files, dates, publishing status |
| Legacy document attachments | `LEGACY_ATTACHMENT_AUDIT.md` | All 21 public application attachments classified; 2020 Annual Report, 2000 Financial Statement, and 2021 AGM Minutes verified and linked | Confirm any newer approved documents and resolve two unknown/historic workshop files |
| Leadership | `content/leadership.ts`, `about/leadership` | Historic board names structured and visibly marked non-current | Current board/staff roster, terms, consent |
| Partners/funders | `content/partners.ts`, `about/partners` | Historical acknowledgements/funders structured and non-current | Status, category, logo rights, naming approval |
| Centralized contact data | `content/organization.ts`, contact route | One settings record drives public contact display | Operations decision on public address/hours |
| Donation content | `/donate`, `components/donation-form.tsx` | No unsupported impact-per-dollar, tax, or restricted-fund claim | Finance/legal/payment policy approval |
| Ally membership | `content/membership.ts`, `membershipPlan` schema | 2021 record structured, inactive, approval-gated | Current benefits, price, Stripe setup |
| Registration | `/register`, student portal handoff | New sensitive intake not exposed before retention/consent review | Approved fields, purpose, RLS, retention, deletion |
| Events | `/events`, `event` schema | No fake event remains; future events have a CMS model | Approved event records |
| Metrics/testimonials | homepage, `impactMetric` schema | Seed metrics/testimonials removed; approval-gated model present | Sourced/consented approved records |
| English/French status | `ContentSourceMeta`, content records, Sanity schemas | Every migrated fallback object records EN/FR status; French routes contain French copy | QBBE language approval |
| Page-specific content | `content/pages.ts`, route tests | 28 distinct route records; unique-title/lead test enforced | Editorial review per route |
| Legacy inventory/disposition | `content/legacy-inventory.ts` | 70 discovered records carry a required disposition; final WordPress API page, post, product, and verified-annual-report comparison has no unexplained omission | Complete old-site export and inaccessible route verification |
| Redirects and SEO | `lib/legacy-redirects.ts`, `lib/seo.ts`, `content/route-seo.ts`, `docs/LEGACY_URL_MAP.md`, sitemap tests | Core routes map permanently; every managed, program, and foundation route has localized title/description, canonical, `hreflang`, and Open Graph metadata; EN/FR sitemap coverage tested | Complete legacy URL export, French slug confirmation |
| Sanity editorial handoff | `sanity/schemaTypes/*`, `CONTENT_EDITORIAL_WORKFLOW.md` | Models exist for pages, programs, organization, reports, people, partners, FAQs, plans, events, metrics | QBBE project/dataset, approved entries, preview/revalidation setup |
| Build and regression checks | `npm run lint`, `npm test`, `npm run build` | Passed on 2026-08-17; 16 migration-focused tests | Browser/device/accessibility audit against deployed preview |

## Final source comparison status

The 70-record inventory is the authoritative comparison baseline currently available from QBBE-owned public sources. A final 2026-08-17 comparison with the 56-page public WordPress API index, five-post public index, two-product public index, and verified 2020 Annual Report found no unexplained reviewed-content omission. All records are classified `keep`, `rewrite`, `merge`, `archive`, `delete`, or `verify`; none were copied unchanged as `keep`. The differences intentionally retained in Website 2.0 are: blocked legacy pages, expired operational dates, historic prices, private forms, historic vacancies, inactive checkouts, unapproved translations, unverified current contact/leadership/partner information, unapproved documents, and absent current events/metrics/testimonials. Those differences are listed with owners in [CONTENT_VERIFICATION_REQUIRED.md](CONTENT_VERIFICATION_REQUIRED.md).

The migration cannot be declared complete until QBBE resolves the approval-required rows and provides an authoritative old-site export or access to verify inaccessible records.
