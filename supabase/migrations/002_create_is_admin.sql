-- Migration 002
-- Création de la fonction centralisée de vérification du rôle administrateur

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path to 'public'
as $function$
    select exists (
        select 1
        from profiles
        where id = auth.uid()
          and role = 'admin'
          and is_active = true
    );
$function$;