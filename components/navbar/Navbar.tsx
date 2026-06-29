import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-slate-900"
        >
          ASD
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-slate-700">

          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/a-propos"
              className="hover:text-blue-600 transition-colors"
            >
              À propos
            </Link>
          </li>

          <li>
            <Link
              href="/formations"
              className="hover:text-blue-600 transition-colors"
            >
              Formations
            </Link>
          </li>

          <li>
            <Link
              href="/faq"
              className="hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/inscription"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Inscription
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}