"use client";

import { getLoginErrorMessage } from "@/lib/auth/login-errors";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
      useEffect(() => {
        checkSession();
      }, []);

      async function checkSession() {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          router.replace("/admin");
        }
      }
    async function handleLogin(
      e: React.FormEvent<HTMLFormElement>
    ) {
      e.preventDefault();

      setIsLoading(true);

      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          console.error(error);
          toast.error(getLoginErrorMessage(error));
          return;
        }

        toast.success("Connexion réussie !");
        router.push("/admin");

      } catch (error) {
        console.error(error);
        toast.error(getLoginErrorMessage(error));

      } finally {
        setIsLoading(false);
      }
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
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
      </div>
    </section>
  );
}
