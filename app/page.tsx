import Link from "next/link";
  export default function HomePage() {
  return (
    <>
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

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Pourquoi choisir ASD ?
          </h2>

          <p className="mt-4 text-gray-600">
            Une formation orientée vers la pratique et l'employabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              🖥️ Compétences numériques
            </h3>

            <p className="text-gray-600">
              Maîtrisez les outils bureautiques, internet et les
              technologies numériques indispensables aujourd'hui.
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              🤖 Intelligence Artificielle
            </h3>

            <p className="text-gray-600">
              Découvrez les outils IA modernes et apprenez à les utiliser
              dans votre vie professionnelle.
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              💼 Insertion professionnelle
            </h3>

            <p className="text-gray-600">
              Développez des compétences pratiques recherchées par les
              entreprises et le marché du travail.
            </p>
          </div>

        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Nos Formations
          </h2>

          <p className="mt-4 text-gray-600">
            Des formations pratiques adaptées aux besoins du marché.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              🖥️ Bureautique & Outils Numériques
            </h3>

            <p className="text-gray-600">
              Maîtrisez Word, Excel, PowerPoint, Internet et les outils de productivité.
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              🤖 Intelligence Artificielle
            </h3>

            <p className="text-gray-600">
              Découvrez ChatGPT, Claude, les outils IA et les méthodes de travail assistées par l'intelligence artificielle.
            </p>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              💼 Insertion Professionnelle
            </h3>

            <p className="text-gray-600">
              Préparez votre CV, votre profil LinkedIn et développez vos compétences professionnelles.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}