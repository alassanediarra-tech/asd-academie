-- Migration 005
-- Autorise un utilisateur authentifié à consulter uniquement son propre profil

create policy "Users can view own profile"
on public.profiles
for select
to authenticated
using (id = auth.uid());