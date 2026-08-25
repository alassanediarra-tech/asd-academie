"use client";

import { supabase } from "@/lib/supabase";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const inscriptionSchema = z.object({
  nom: z
  .string()
  .min(3, "Le nom est trop court")
  .regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
    "Le nom contient des caractères invalides"
  ),
  email: z.string().email("Email invalide"),
  telephone: z
  .string()
  .min(9, "Numéro invalide")
  .regex(
    /^[0-9+() -]+$/,
    "Le numéro contient des caractères invalides"
  )
  .refine(
    (value) => (value.match(/[0-9]/g) || []).length >= 9,
    "Le numéro doit contenir au moins 9 chiffres"
  ),
  formation: z.string().min(1, "Veuillez choisir une formation"),
  message: z.string().optional(),
});

type Formation = {
  id: number;
  nom: string;
  slug: string;
};

type InscriptionData = z.infer<typeof inscriptionSchema>;

function formatTelephone(value: string) {
  const trimmed = value.trim();

  // Numéro sénégalais avec indicatif +221
  if (trimmed.startsWith("+221")) {
    const digits = trimmed.slice(4).replace(/\D/g, "").slice(0, 9);

    if (digits.length === 0) {
      return "+221";
    }

    const formatted = digits.replace(
      /^(\d{2})(\d{3})(\d{2})(\d{2}).*/,
      "$1 $2 $3 $4"
    );

    return `+221 ${formatted}`;
  }

  // Numéro sénégalais sans indicatif
  if (/^\d/.test(trimmed) && !trimmed.startsWith("+")) {
    const digits = trimmed.replace(/\D/g, "").slice(0, 9);

    return digits.replace(
      /^(\d{2})(\d{3})(\d{2})(\d{2}).*/,
      "$1 $2 $3 $4"
    );
  }

  // Autres numéros internationaux :
  // on ne force aucun découpage.
  return value;
}

function normalizeTelephone(value: string) {
  const trimmed = value.trim();

  if (trimmed.startsWith("+")) {
    return `+${trimmed.slice(1).replace(/\D/g, "")}`;
  }

  return trimmed.replace(/\D/g, "");
}

export default function InscriptionPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InscriptionData>({
    resolver: zodResolver(inscriptionSchema),
});

const telephoneRegister = register("telephone");

useEffect(() => {
  async function getFormations() {
    const { data, error } = await supabase
      .from("formations")
      .select("id, nom, slug")
      .eq("is_active", true)
      .order("ordre", { ascending: true });

    if (error) {
      console.error("Erreur chargement formations :", error);
      return;
    }

    setFormations(data ?? []);
  }

  getFormations();
}, []);

const onSubmit = async (data: InscriptionData) => {
  try {
    setIsLoading(true);

    const normalizedTelephone = normalizeTelephone(data.telephone);

const { error } = await supabase
  .from("inscriptions")
  .insert([
    {
      ...data,
      telephone: normalizedTelephone,
    },
  ]);

    if (error) {
      throw error;
    }

    toast.success("Inscription envoyée avec succès !");
    reset();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  } catch (error) {
    console.error("Erreur inscription :", error);
    toast.error("Impossible d'envoyer votre candidature.");

  } finally {
    setIsLoading(false);
  }
};

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-14 bg-white rounded-3xl shadow-lg border p-8 space-y-6"
      >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          Inscription
        </h1>

        <p className="mt-4 text-slate-600">
          Rejoignez l'Académie des Compétences Numériques et de l'IA.
        </p>
      </div>

        <div>
          <label className="block font-medium mb-2">
            Nom complet
          </label>

          <input
            type="text"
            {...register("nom")}
            className="w-full border rounded-lg p-3"
            placeholder="Votre nom complet"
          />

          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nom.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            {...register("email")}
            className="w-full border rounded-lg p-3"
            placeholder="votre@email.com"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            {...telephoneRegister}
            onChange={(e) => {
              const formattedValue = formatTelephone(e.target.value);

              e.target.value = formattedValue;
              telephoneRegister.onChange(e);
            }}
            className="w-full border rounded-lg p-3"
            placeholder="+221 XX XXX XX XX"
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.telephone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">
            Formation choisie
          </label>

          <select
            {...register("formation")}
            className="w-full border rounded-lg p-3"
          >
            <option value="">-- Choisir une formation --</option>

            {formations.map((formation) => (
              <option key={formation.id} value={formation.nom}>
                {formation.nom}
              </option>
            ))}
          </select>

          {errors.formation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.formation.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">
            Message (optionnel)
          </label>

          <textarea
            {...register("message")}
            rows={5}
            className="w-full border rounded-lg p-3"
            placeholder="Parlez-nous de vos objectifs..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading
            ? "Envoi en cours..."
            : "Envoyer ma candidature"}
        </button>

      </form>
    </section>
  );
}