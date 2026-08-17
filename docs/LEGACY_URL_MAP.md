# Legacy URL Map

All destinations are locale-first. The proxy issues a permanent redirect for the listed English legacy routes. French mappings are added only where the legacy French path was observed; unknown French slugs remain an editorial follow-up instead of being guessed.

| Old URL | New URL | 301/308 | Content state | New SEO title | Canonical |
| --- | --- | --- | --- | --- | --- |
| `/about-us/` | `/en/about` | Yes | Rewritten | About QBBE | `/en/about` |
| `/programs/` | `/en/programs` | Yes | Merged | Programs | `/en/programs` |
| `/history/` | `/en/about/history` | Yes | Rewritten | A history grounded in educational equity. | `/en/about/history` |
| `/board-of-directors/` | `/en/about/leadership` | Yes | Rewritten | Governance in service of educational equity. | `/en/about/leadership` |
| `/partners/` | `/en/about/partners` | Yes | Verify | Partnerships should be named with care. | `/en/about/partners` |
| `/faqs/` | `/en/resources/faq` | Yes | Rewritten | Clear answers, with clear limits. | `/en/resources/faq` |
| `/programs/academic-support/` | `/en/programs/academic-support` | Yes | Verify | Academic Support | `/en/programs/academic-support` |
| `/programs/early-literacy-program/` | `/en/programs/early-literacy` | Yes | Verify | Early Literacy | `/en/programs/early-literacy` |
| `/programs/future-careers/` | `/en/programs/future-careers` | Yes | Verify | Future Careers | `/en/programs/future-careers` |
| `/family-first-program/` | `/en/programs/family-first` | Yes | Rewritten | Family First | `/en/programs/family-first` |
| `/learn-to-code/` | `/en/programs/learn-to-code` | Yes | Verify | Learn to Code | `/en/programs/learn-to-code` |
| `/programs/the-bana-program-2/` | `/en/programs/bana` | Yes | Archived context | BANA Summer Day Camp | `/en/programs/bana` |
| `/programs/the-dacosta-hall-program/` | `/en/programs/da-costa-hall` | Yes | Rewritten | Da Costa Hall | `/en/programs/da-costa-hall` |
| `/programs/high-school-preparation-program/` | `/en/programs/high-school-preparation` | Yes | Verify | High School Preparation | `/en/programs/high-school-preparation` |
| `/pssp/` | `/en/resources/archived-initiatives` | Yes | Archived context | Institutional archive | `/en/resources/archived-initiatives` |
| `/sep/` | `/en/resources/archived-initiatives` | Yes | Archived context | Institutional archive | `/en/resources/archived-initiatives` |
| `/programs/entrepreneurship-leadership-program/` | `/en/resources/archived-initiatives` | Yes | Archived context | Institutional archive | `/en/resources/archived-initiatives` |
| `/private-parenting-facebook-group/` | `/en/resources/parents` | Yes | Archived privacy-sensitive form | Resources for parents | `/en/resources/parents` |
| `/volunteers/` | `/en/get-involved/volunteer` | Yes | Rewritten | One Drop at a Time. | `/en/get-involved/volunteer` |
| `/donate/` | `/en/donate` | Yes | Rewritten | Donate | `/en/donate` |
| `/product/donation/` | `/en/donate` | Yes | Archived legacy checkout | Donate | `/en/donate` |
| `/product/registration/` | `/en/register` | Yes | Archived legacy checkout | Register | `/en/register` |
| `/contact-2/` | `/en/about/contact` | Yes | Rewritten | Speak with QBBE. | `/en/about/contact` |
| `/upcoming-events-3/` | `/en/events` | Yes | Verify | Gather when details are confirmed. | `/en/events` |
| `/membership-plans/` | `/en/get-involved/membership` | Yes | Archived 2021 source | Support QBBE through an Ally relationship. | `/en/get-involved/membership` |
| `/family-first-program-registration/` | `/en/programs/family-first` | Yes | Archived registration route | Family First | `/en/programs/family-first` |
| `/programs/future-careers/jobs-of-the-future-myel-program-registration/` | `/en/programs/future-careers` | Yes | Archived registration route | Future Careers | `/en/programs/future-careers` |
| `/our-history/` | `/en/about/history` | Yes | Merged duplicate | A history grounded in educational equity. | `/en/about/history` |
| `/reports/2020-annual-report/` | `/en/impact/reports` | Yes | Archived record | A public record that distinguishes current from historical. | `/en/impact/reports` |
| `/reports/2000-financial-statement/` | `/en/impact/financial-transparency` | Yes | Archived record | Records should be clear, current, and contextual. | `/en/impact/financial-transparency` |
| `/fr/lhistoire/` | `/fr/about/history` | Yes | Rewritten | Une histoire ancrée dans l’équité en éducation. | `/fr/about/history` |
| `/fr/faq/` | `/fr/resources/faq` | Yes | Rewritten | Des réponses claires, avec des limites claires. | `/fr/resources/faq` |

The redirect map is implemented in `lib/legacy-redirects.ts`. It should be expanded after QBBE supplies a complete old-site URL export and confirms French legacy slugs.
