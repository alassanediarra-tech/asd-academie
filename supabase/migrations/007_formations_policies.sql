-- Migration 007
-- Sécurisation du catalogue des formations ASD

alter table public.formations
enable row level security;


-- Lecture publique des formations actives
create policy "Anyone can view active formations"
on public.formations
for select
to public
using (is_active = true);


-- Création réservée aux administrateurs
create policy "Admins can create formations"
on public.formations
for insert
to authenticated
with check (public.is_admin());


-- Modification réservée aux administrateurs
create policy "Admins can update formations"
on public.formations
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());


-- Suppression réservée aux administrateurs
create policy "Admins can delete formations"
on public.formations
for delete
to authenticated
using (public.is_admin());