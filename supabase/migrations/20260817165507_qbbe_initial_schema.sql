create extension if not exists "pgcrypto";

create type public.locale_code as enum ('en', 'fr');
create type public.membership_status as enum ('pending_payment', 'active', 'cancelled', 'expired');
create type public.user_role as enum ('member', 'volunteer', 'staff', 'content_editor', 'program_manager', 'finance', 'administrator');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  phone text,
  preferred_locale public.locale_code not null default 'en',
  role public.user_role not null default 'member',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.membership_plans (
  id uuid primary key default gen_random_uuid(),
  plan_key text not null unique,
  audience_type text not null check (audience_type in ('corporate', 'business', 'educator', 'individual')),
  tier text not null,
  annual_price_cents integer not null check (annual_price_cents > 0),
  currency text not null default 'cad' check (currency = 'cad'),
  capacity integer check (capacity is null or capacity > 0),
  active boolean not null default true,
  stripe_price_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.membership_benefits (
  id uuid primary key default gen_random_uuid(),
  benefit_key text not null unique,
  label_en text not null,
  label_fr text not null,
  created_at timestamptz not null default now()
);

create table public.membership_plan_benefits (
  membership_plan_id uuid not null references public.membership_plans(id) on delete cascade,
  membership_benefit_id uuid not null references public.membership_benefits(id) on delete cascade,
  sort_order smallint not null default 0,
  primary key (membership_plan_id, membership_benefit_id)
);

create table public.membership_interest (
  id uuid primary key default gen_random_uuid(),
  plan_key text not null,
  email text not null,
  first_name text,
  last_name text,
  locale public.locale_code not null,
  status public.membership_status not null default 'pending_payment',
  stripe_checkout_session_id text unique,
  created_at timestamptz not null default now()
);

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  membership_plan_id uuid not null references public.membership_plans(id),
  status public.membership_status not null default 'pending_payment',
  stripe_subscription_id text unique,
  starts_at timestamptz,
  renews_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.donation_campaigns (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name_en text not null,
  name_fr text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.donations (
  id uuid primary key default gen_random_uuid(),
  stripe_checkout_session_id text not null unique,
  email text,
  amount_cents integer check (amount_cents is null or amount_cents > 0),
  currency text not null default 'cad',
  designation text not null default 'general',
  status text not null check (status in ('pending', 'paid', 'failed', 'refunded')),
  created_at timestamptz not null default now()
);

create table public.program_registrations (
  id uuid primary key default gen_random_uuid(),
  program_slug text not null,
  email text,
  first_name text,
  last_name text,
  phone text,
  school text,
  locale public.locale_code not null,
  consented_at timestamptz,
  status text not null default 'submitted' check (status in ('submitted', 'reviewing', 'accepted', 'waitlisted', 'declined')),
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  starts_at timestamptz,
  ends_at timestamptz,
  capacity integer,
  created_at timestamptz not null default now()
);

create table public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_slug text not null,
  email text,
  first_name text,
  last_name text,
  locale public.locale_code not null,
  status text not null default 'submitted' check (status in ('submitted', 'confirmed', 'waitlisted', 'cancelled')),
  created_at timestamptz not null default now()
);

create table public.volunteer_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  volunteer_profile_id uuid references public.volunteer_profiles(id) on delete cascade,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);
create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale public.locale_code not null,
  consented_at timestamptz not null,
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now()
);
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  inquiry_type text not null default 'contact' check (inquiry_type in ('contact', 'volunteer', 'partner')),
  consented_at timestamptz not null,
  created_at timestamptz not null default now()
);
create table public.audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index program_registrations_program_slug_idx on public.program_registrations (program_slug);
create index event_registrations_event_slug_idx on public.event_registrations (event_slug);
create index donations_email_idx on public.donations (email);
create index membership_interest_email_idx on public.membership_interest (email);

alter table public.profiles enable row level security;
alter table public.membership_plans enable row level security;
alter table public.membership_benefits enable row level security;
alter table public.membership_plan_benefits enable row level security;
alter table public.membership_interest enable row level security;
alter table public.memberships enable row level security;
alter table public.donation_campaigns enable row level security;
alter table public.donations enable row level security;
alter table public.program_registrations enable row level security;
alter table public.events enable row level security;
alter table public.event_registrations enable row level security;
alter table public.volunteer_profiles enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.audit_logs enable row level security;

create policy "profiles are readable by owner" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "profiles are updated by owner" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "profiles are created by owner" on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "memberships are readable by owner" on public.memberships for select to authenticated using ((select auth.uid()) = profile_id);
create policy "volunteer profiles are readable by owner" on public.volunteer_profiles for select to authenticated using ((select auth.uid()) = profile_id);

insert into public.membership_plans (plan_key, audience_type, tier, annual_price_cents) values
  ('corporate-bronze', 'corporate', 'Bronze', 100000), ('corporate-silver', 'corporate', 'Silver', 250000), ('corporate-gold', 'corporate', 'Gold', 500000),
  ('business-bronze', 'business', 'Bronze', 25000), ('business-silver', 'business', 'Silver', 50000), ('business-gold', 'business', 'Gold', 75000),
  ('educator-bronze', 'educator', 'Bronze', 5000), ('educator-silver', 'educator', 'Silver', 10000), ('educator-gold', 'educator', 'Gold', 15000),
  ('individual-basic', 'individual', 'Basic', 2500), ('individual-bronze', 'individual', 'Bronze', 5000), ('individual-silver', 'individual', 'Silver', 10000), ('individual-gold', 'individual', 'Gold', 15000);
