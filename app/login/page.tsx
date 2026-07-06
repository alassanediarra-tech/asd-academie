"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    async function handleLogin(
        e: React.FormEvent
        ) {
        e.preventDefault();

        const { error } =
            await supabase.auth.signInWithPassword({
            email,
            password,
            });

        if (error) {
            alert("Email ou mot de passe incorrect.");
            console.error(error);
            return;
        }

        router.push("/admin");
        }
  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <div className="bg-white rounded-3xl shadow-lg border p-8">
        <h1 className="text-4xl font-bold text-center">
          Connexion Admin
        </h1>

        <p className="text-slate-600 text-center mt-3">
          Connectez-vous pour accéder au tableau de bord.
        </p>

        <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
            >
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
                type="email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                className="w-full border rounded-xl p-3"
                placeholder="admin@asd.com"
                />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Mot de passe
            </label>

            <input
                type="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                className="w-full border rounded-xl p-3"
                placeholder="********"
                />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}