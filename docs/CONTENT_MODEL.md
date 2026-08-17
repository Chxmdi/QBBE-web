# Content model

All localized editorial fields use `en` and `fr` variants with an editorial owner and review date. The initial Sanity schema includes Program; extend the same localized pattern to Event, Impact Story, Report, Resource, History Milestone, Partner, FAQ and Organization Settings before content migration.

Membership prices are deliberately not editorial content: they are stored in Supabase and linked to Stripe Price IDs.
