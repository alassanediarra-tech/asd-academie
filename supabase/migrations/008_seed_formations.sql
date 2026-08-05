-- Migration 008
-- Catalogue initial des formations ASD - V1

insert into public.formations (
  nom,
  slug,
  duree_semaines,
  heures_total,
  is_active,
  ordre
)
values
  (
    'Bureautique & Outils Numériques',
    'bureautique-outils-numeriques',
    8,
    32,
    true,
    1
  ),
  (
    'Intelligence Artificielle',
    'intelligence-artificielle',
    8,
    24,
    true,
    2
  ),
  (
    'Insertion Professionnelle',
    'insertion-professionnelle',
    8,
    16,
    true,
    3
  ),
  (
    'IA pour l''Informatique',
    'ia-informatique',
    8,
    32,
    true,
    4
  ),
  (
    'IA pour la Gestion & le Droit des Affaires',
    'ia-gestion-droit-affaires',
    8,
    32,
    true,
    5
  ),
  (
    'Création Digitale & Outils Web',
    'creation-digitale-outils-web',
    8,
    32,
    true,
    6
  );