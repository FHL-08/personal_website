-- Supabase Storage setup for portfolio assets.
-- Run once in the Supabase SQL editor (Dashboard → SQL → New query).
--
-- Creates a public read bucket. Site assets are public by design (portfolio media).
-- Uploads are done locally via scripts/sync-assets-to-supabase.mjs using a service role key.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio',
  'portfolio',
  true,
  524288000, -- 500 MB per object
  null
)
on conflict (id) do update set public = excluded.public;

-- Public read for portfolio bucket objects
drop policy if exists "portfolio public read" on storage.objects;
create policy "portfolio public read"
on storage.objects
for select
to public
using (bucket_id = 'portfolio');
