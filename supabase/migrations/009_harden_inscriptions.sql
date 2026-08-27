-- Renforcer l'intégrité des données de la table inscriptions

ALTER TABLE public.inscriptions
  ALTER COLUMN nom SET NOT NULL,
  ALTER COLUMN email SET NOT NULL,
  ALTER COLUMN telephone SET NOT NULL,
  ALTER COLUMN formation SET NOT NULL,
  ALTER COLUMN statut SET NOT NULL;

ALTER TABLE public.inscriptions
  ADD CONSTRAINT inscriptions_statut_check
  CHECK (statut IN ('Nouveau', 'Contacté', 'Inscrit'));

-- Remplacer la policy d'insertion publique actuelle
DROP POLICY IF EXISTS "Anyone can submit registration"
ON public.inscriptions;

CREATE POLICY "Anyone can submit registration"
ON public.inscriptions
FOR INSERT
TO public
WITH CHECK (statut = 'Nouveau');