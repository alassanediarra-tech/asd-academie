export function getLoginErrorMessage(error: unknown): string {
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error
  ) {
    const message = String(error.message);

    switch (message) {
      case "Invalid login credentials":
        return "Email ou mot de passe incorrect.";

      case "Failed to fetch":
        return "Le serveur ASD est momentanément indisponible.";

      default:
        return "Une erreur est survenue lors de la connexion.";
    }
  }

  return "Une erreur inattendue est survenue.";
}