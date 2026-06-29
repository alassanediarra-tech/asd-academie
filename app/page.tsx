import Link from "next/link";
  export default function HomePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Colonne gauche */}
          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Académie des Compétences Numériques et de l'IA
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight text-slate-900">
              Développez vos compétences numériques et maîtrisez l'Intelligence Artificielle.
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-9">
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

          {/* Colonne droite */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[400px] h-[400px] rounded-3xl bg-blue-100 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-7xl mb-4">🤖</div>

                <h3 className="text-2xl font-bold">
                  Intelligence Artificielle
                </h3>

                <p className="mt-4 text-slate-600">
                  Apprenez les outils numériques et l'IA pour votre avenir professionnel.
                </p>
              </div>
            </div>
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

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              🖥️ Compétences numériques
            </h3>

            <p className="text-gray-600">
              Maîtrisez les outils bureautiques, internet et les
              technologies numériques indispensables aujourd'hui.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              🤖 Intelligence Artificielle
            </h3>

            <p className="text-gray-600">
              Découvrez les outils IA modernes et apprenez à les utiliser
              dans votre vie professionnelle.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
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

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              🖥️ Bureautique & Outils Numériques
            </h3>

            <p className="text-gray-600">
              Maîtrisez Word, Excel, PowerPoint, Internet et les outils de productivité.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              🤖 Intelligence Artificielle
            </h3>

            <p className="text-gray-600">
              Découvrez ChatGPT, Claude, les outils IA et les méthodes de travail assistées par l'intelligence artificielle.
            </p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              💼 Insertion Professionnelle
            </h3>

            <p className="text-gray-600">
              Préparez votre CV, votre profil LinkedIn et développez vos compétences professionnelles.
            </p>
          </div>

        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            ASD en quelques chiffres
          </h2>

          <p className="mt-4 text-gray-600">
            Une formation conçue pour développer des compétences concrètes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-4xl font-bold">8</h3>
            <p className="mt-2 text-gray-600">Semaines</p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-4xl font-bold">3</h3>
            <p className="mt-2 text-gray-600">Domaines</p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-2 text-gray-600">Pratique</p>
          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">
            <h3 className="text-4xl font-bold">Hybride</h3>
            <p className="mt-2 text-gray-600">En ligne & Présentiel</p>
          </div>

        </div>
      </section>
    </>
  );
}