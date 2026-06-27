-- Run this in your Supabase project's SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run)

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  event_type text not null,
  event_date date,
  location text not null,
  guest_count text,
  message text,
  status text not null default 'new'
);

-- Enable Row Level Security
alter table public.bookings enable row level security;

-- Allow anyone (anon key) to INSERT a booking inquiry from the public website
create policy "Public can submit booking inquiries"
  on public.bookings
  for insert
  to anon
  with check (true);

-- Do NOT allow public read/update/delete — only you, via the Supabase
-- dashboard (using your service role / authenticated access), can view
-- and manage submitted bookings. This keeps client leads private.
