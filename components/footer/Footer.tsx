import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="font-bold text-xl">
            ASD
          </h2>

          <p className="mt-3">
            Savoir pratiquer, innover et réussir.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Liens rapides
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/">Accueil</Link>
            </li>

            <li>
              <Link href="/formations">
                Formations
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Contact
          </h3>

          <p>Email : contact@asd-academie.com</p>
          <p>Téléphone : +221 XX XXX XX XX</p>
          <p>Dakar, Sénégal</p>
        </div>

      </div>

      <div className="border-t py-4 text-center">
        © 2026 ASD – Académie des Compétences Numériques et de l'IA.
      </div>
    </footer>
  );
}