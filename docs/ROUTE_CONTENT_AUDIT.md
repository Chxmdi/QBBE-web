# Route Content Audit

This is the internal Phase 1 route map for the source-backed fallback layer. Every record in `content/pages.ts` carries source URLs, an owner/review status, and separate English/French status. “Ready for editorial review” means the route is structurally complete and source-traceable; it does **not** mean that operational claims or translations are approved for production.

| Route | Current content source | Current status | Content quality | Migration required |
| --- | --- | --- | --- | --- |
| `/about` | Route-specific fallback + QBBE institutional sources | Ready for editorial review | Institutional identity | Approve identity wording |
| `/about/our-story` | Route-specific fallback + history source | Ready for editorial review | Founding narrative | Approve French institutional copy |
| `/about/history` | Route-specific fallback + history source | Ready for editorial review | Verified 1968/1971 chronology only | Confirm any additional milestones |
| `/about/mission` | Route-specific fallback + mission source | Legal/editorial review | Formal mission and vision | Approve formal French wording |
| `/about/leadership` | Structured historic board records | Editorial review | Historic governance, no current roster claim | Supply approved current board/staff data |
| `/about/partners` | Structured historical acknowledgements and funders | Editorial review | No current partnership claim | Confirm category, status, and logo rights |
| `/about/contact` | Centralized organization settings | Operations review | One public contact source | Confirm values and retire former address |
| `/impact` | Route-specific fallback | Editorial review | No unsupported metrics | Provide approved metrics if desired |
| `/impact/stories` | Route-specific fallback | Editorial review | Institution-level narrative only | Supply consented stories/testimonials |
| `/impact/reports` | Structured report archive | Editorial review | Historic report records | Supply approved files and metadata |
| `/impact/research` | Route-specific fallback | Editorial review | Research purpose, no fake database | Confirm current research activity |
| `/impact/advocacy` | Route-specific fallback | Editorial review | Historic advocacy context | Confirm current advocacy activity |
| `/impact/financial-transparency` | Structured report archive | Finance/legal review | Historic record only | Supply approved financial documents |
| `/impact/youth-empowerment` | Route-specific fallback | Editorial review | Strategic theme, not a program | Confirm whether a current initiative exists |
| `/resources` | Route-specific fallback | Editorial review | Resource hub | Approve collection priorities |
| `/resources/research` | Route-specific fallback | Editorial review | Research-resource framing | Supply approved resources |
| `/resources/publications` | Structured report archive | Editorial review | Publication/archive surface | Supply files and labels |
| `/resources/parents` | Route-specific fallback | Editorial review | Parent-facing context | Approve current resources |
| `/resources/students` | Route-specific fallback | Editorial review | Student-facing context | Approve current resources |
| `/resources/educators` | Route-specific fallback | Editorial review | Educator-facing context | Approve current resources |
| `/resources/faq` | Structured FAQ records | Editorial/legal review | Source-backed answers with legal limits | Approve financial/legal responses |
| `/resources/anti-racism-support` | Route-specific fallback | Service-owner review | Hotline status explicitly unresolved | Approve status/scope/details or archive |
| `/resources/archived-initiatives` | PSSP, SEP, Entrepreneurship legacy sources | Program-owner review | Historic knowledge preserved | Approve reactivation or continued archive |
| `/get-involved` | Route-specific fallback | Editorial review | Engagement overview | Confirm named opportunity owners |
| `/get-involved/volunteer` | Colibri legacy program source | Program-owner review | Historic mission/values retained | Confirm name, roles, screening, privacy |
| `/get-involved/educators` | Route-specific fallback | Program-owner review | Interest pathway | Confirm opportunities |
| `/get-involved/corporate-partners` | Route-specific fallback | Editorial review | Inquiry pathway, no partner claim | Confirm offering and acknowledgement rules |
| `/get-involved/community-partners` | Route-specific fallback | Editorial review | Inquiry pathway, no partner claim | Confirm offering and acknowledgement rules |

Related transactional routes (`/register`, `/donate`, `/get-involved/membership`, `/events`, and `/search`) are implemented separately. Their operational, financial, privacy, and event-data gates are tracked in [CONTENT_VERIFICATION_REQUIRED.md](CONTENT_VERIFICATION_REQUIRED.md).
