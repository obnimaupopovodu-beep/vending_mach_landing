-- All submissions are written only by server routes using the service role key.
-- There are deliberately no public read or insert policies.
create table if not exists public.partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  organization_name text not null,
  venue_type text not null,
  city text null,
  contact_name text not null,
  phone text not null,
  email text null,
  message text null,
  privacy_consent boolean not null,
  status text not null default 'new'
);

create table if not exists public.customer_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  request_type text not null,
  location text null,
  name text null,
  contact text null,
  message text not null,
  privacy_consent boolean not null,
  status text not null default 'new'
);

alter table public.partner_inquiries enable row level security;
alter table public.customer_messages enable row level security;
