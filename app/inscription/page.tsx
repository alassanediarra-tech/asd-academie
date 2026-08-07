"use client";

import { supabase } from "@/lib/supabase";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const inscriptionSchema = z.object({
  nom: z.string().min(3, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(9, "Numéro invalide"),
  formation: z.string(),
  message: z.string().optional(),
});

type Formation = {
  id: number;
  nom: string;
  slug: string;
};

type InscriptionData = z.infer<typeof inscriptionSchema>;

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

    const { error } = await supabase
      .from("inscriptions")
      .insert([data]);

    if (error) {
      throw error;
    }

    toast.success("Inscription envoyée avec succès !");
    reset();

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
            {...register("telephone")}
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