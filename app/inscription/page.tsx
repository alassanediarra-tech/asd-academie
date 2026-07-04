"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inscriptionSchema = z.object({
  nom: z.string().min(3, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(9, "Numéro invalide"),
  formation: z.string(),
  message: z.string().optional(),
});

type InscriptionData = z.infer<typeof inscriptionSchema>;

export default function InscriptionPage() {
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<InscriptionData>({
  resolver: zodResolver(inscriptionSchema),
});

const onSubmit = (data: InscriptionData) => {
  alert("Formulaire envoyé !");
  console.log(data);
};

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          Inscription
        </h1>

        <p className="mt-4 text-slate-600">
          Rejoignez l'Académie des Compétences Numériques et de l'IA.
        </p>
      </div>

      <form
  onSubmit={handleSubmit(onSubmit)}
  className="mt-14 bg-white rounded-3xl shadow-lg border p-8 space-y-6"
>

        <div>
          <label className="block font-medium mb-2">
            Nom complet
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Votre nom complet"
            {...register("nom")}
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
            className="w-full border rounded-lg p-3"
            placeholder="votre@email.com"
            {...register("email")}
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
            className="w-full border rounded-lg p-3"
            placeholder="+221 XX XXX XX XX"
            {...register("telephone")}
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
            className="w-full border rounded-lg p-3"
            {...register("formation")}
          >
            <option value="Bureautique & Outils Numériques">
              Bureautique & Outils Numériques
            </option>

            <option value="Intelligence Artificielle">
              Intelligence Artificielle
            </option>

            <option value="Insertion Professionnelle">
              Insertion Professionnelle
            </option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Message (optionnel)
          </label>

          <textarea
            rows={5}
            className="w-full border rounded-lg p-3"
            placeholder="Parlez-nous de vos objectifs..."
            {...register("message")}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Envoyer ma candidature
        </button>

      </form>
    </section>
  );
}