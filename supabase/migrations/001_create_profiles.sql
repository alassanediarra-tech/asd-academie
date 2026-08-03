-- Migration 001
-- Création de la table des profils utilisateurs ASD

create table public.profiles (
  id uuid not null,
  email text not null,
  nom text,
  prenom text,
  telephone text,
  role text not null default 'student',
  is_active boolean not null default true,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),

  constraint profiles_pkey primary key (id),

  constraint profiles_email_key unique (email),

  constraint profiles_id_fkey
    foreign key (id)
    references auth.users(id)
    on delete cascade,

  constraint profiles_role_check
    check (
      role = any (
        array[
          'admin'::text,
          'student'::text,
          'formateur'::text,
          'partenaire'::text
        ]
      )
    )
);