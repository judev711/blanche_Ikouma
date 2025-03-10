import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Définir les locales autorisées
const locales = ["fr", "en"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Vérifier si la locale est valide
  if (!locales.includes(locale || "")) {
    notFound(); // Si la locale n'est pas valide, afficher une erreur 404
  }

  // Retourner la locale et les messages associés
  try {
    const messages = await import(`messages/${locale}.json`);
    return {
      locale: locale as string, // Assurez-vous de retourner la locale en tant que chaîne de caractères explicite
      messages: messages.default,
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to load messages for locale: ${locale}`);
  }
});
