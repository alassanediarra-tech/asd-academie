import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl">
          ASD
        </h1>

        <ul className="flex gap-6">
          <li>
            <Link href="/">Accueil</Link>
          </li>

          <li>
            <Link href="/a-propos">À propos</Link>
          </li>

          <li>
            <Link href="/formations">Formations</Link>
          </li>

          <li>
            <Link href="/faq">FAQ</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/inscription">
              Inscription
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}