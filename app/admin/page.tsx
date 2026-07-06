"use client";

type Inscription = {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  formation: string;
  message: string;
  statut: string;
  created_at: string;
};
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Inscription = {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  formation: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
    const [search, setSearch] = useState("");

  useEffect(() => {
  checkUser();
}, []);
async function checkUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    router.push("/login");
    return;
  }

  getInscriptions();
}

  async function getInscriptions() {
    const { data, error } = await supabase
      .from("inscriptions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setInscriptions(data);
  }

  async function deleteInscription(id: number) {
    const confirmation = confirm(
      "Voulez-vous vraiment supprimer cette inscription ?"
    );

    if (!confirmation) return;

    const { error } = await supabase
      .from("inscriptions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
      return;
    }

    getInscriptions();
  }

  const filteredInscriptions = inscriptions.filter(
    (inscription) =>
      inscription.nom
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      inscription.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  async function updateStatut(
    id: number,
    statut: string
  ) {
    const { error } = await supabase
      .from("inscriptions")
      .update({ statut })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    getInscriptions();
  }
  function getStatusColor(statut: string) {
    switch (statut) {
      case "Nouveau":
        return "bg-yellow-100 text-yellow-800";

      case "Contacté":
        return "bg-blue-100 text-blue-800";

      case "Inscrit":
        return "bg-green-100 text-green-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  const totalInscriptions = inscriptions.length;

const nouveaux = inscriptions.filter(
  (inscription) => inscription.statut === "Nouveau"
).length;

const contactes = inscriptions.filter(
  (inscription) => inscription.statut === "Contacté"
).length;

const inscrits = inscriptions.filter(
  (inscription) => inscription.statut === "Inscrit"
).length;

async function handleLogout() {
  await supabase.auth.signOut();
  router.push("/login");
}
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold">
        Tableau de bord ASD
      </h1>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition-colors"
        >
          Déconnexion
        </button>
      </div>

      <p className="mt-4 text-slate-600">
        Gestion des inscriptions.
      </p>
      <div className="grid md:grid-cols-4 gap-6 mt-12">

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            👥 Total des inscriptions
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {totalInscriptions}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            🟡 Nouveaux
          </p>

          <h2 className="text-4xl font-bold mt-3 text-yellow-700">
            {nouveaux}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            📞 Contactés
          </p>

          <h2 className="text-4xl font-bold mt-3 text-blue-700">
            {contactes}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            🎓 Inscrits
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-700">
            {inscrits}
          </h2>
        </div>

      </div>
      <div className="mt-12 overflow-x-auto">
        <div className="mt-10">
          <input
            type="text"
            placeholder="Rechercher par nom ou email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 border rounded-xl p-3"
          />
        </div>
        <table className="w-full border rounded-2xl overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Nom</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Téléphone</th>
              <th className="p-4 text-left">Formation</th>
              <th className="p-4 text-left">Statut</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInscriptions.map((inscription) => (
              <tr
                key={inscription.id}
                className="border-t">
                <td className="p-4">
                  {inscription.nom}
                </td>

                <td className="p-4">
                  {inscription.email}
                </td>

                <td className="p-4">
                  {inscription.telephone}
                </td>

                <td className="p-4">
                  {inscription.formation}
                </td>
                <td className="p-4">
                  <select
                    value={inscription.statut}
                    onChange={(e) =>
                      updateStatut(
                        inscription.id,
                        e.target.value
                      )
                    }
                    className={`border rounded-lg p-2 ${getStatusColor(
                      inscription.statut
                    )}`}
                  >
                    <option value="Nouveau">
                      Nouveau
                    </option>

                    <option value="Contacté">
                      Contacté
                    </option>

                    <option value="Inscrit">
                      Inscrit
                    </option>
                  </select>
                </td>
                <td className="p-4">
                <button
                  onClick={() =>
                    deleteInscription(inscription.id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Supprimer
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}