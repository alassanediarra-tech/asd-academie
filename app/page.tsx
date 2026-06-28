import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl">

        <span className="text-blue-600 font-semibold">
          Académie des Compétences Numériques et de l'IA
        </span>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          Développez vos compétences numériques et maîtrisez l'Intelligence Artificielle.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          ASD accompagne étudiants, professionnels et entrepreneurs
          dans l'acquisition de compétences pratiques en bureautique,
          numérique et intelligence artificielle.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            href="/formations"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Découvrir nos formations
          </Link>

          <Link
            href="/inscription"
            className="border px-6 py-3 rounded-lg"
          >
            S'inscrire
          </Link>
        </div>

      </div>
    </section>
  );
}