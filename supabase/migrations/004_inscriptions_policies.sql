-- Migration 003
-- Activation du RLS et création des policies de sécurité
-- pour la table inscriptions

alter table public.inscriptions
enable row level security;


-- INSERT
-- Tout visiteur peut envoyer une candidature

create policy "Anyone can submit registration"
on public.inscriptions
for insert
to public
with check (true);


-- SELECT
-- Seuls les administrateurs authentifiés peuvent consulter les candidatures

create policy "Admins can view registrations"
on public.inscriptions
for select
to authenticated
using (public.is_admin());


-- UPDATE
-- Seuls les administrateurs authentifiés peuvent modifier les candidatures

create policy "Admins can update registrations"
on public.inscriptions
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());


-- DELETE
-- Seuls les administrateurs authentifiés peuvent supprimer les candidatures

create policy "Admins can delete registrations"
on public.inscriptions
for delete
to authenticated
using (public.is_admin());