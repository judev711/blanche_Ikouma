import { getMessages } from "next-intl/server";
import { ReactNode } from "react"; // Import de ReactNode
import ThemeProviderWrapper from "../../components/ThemeProviderWrapper";
import "../../app/globals.css";

// Définition des types pour les propriétés du composant RootLayout
export interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // Supporte à la fois un objet et une promesse
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // Résolution explicite de la promesse pour `params`
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));

  // Récupérer la locale à partir de `resolvedParams` avec une valeur par défaut
  const locale = resolvedParams?.locale ?? "fr"; // Si `locale` n'est pas défini, utilise "fr" par défaut

  // Récupérer les messages pour la locale
  const messages = await getMessages({ locale }); // Récupère les messages spécifiques à la locale

  // Log pour vérifier la structure de `resolvedParams` (utile pour le débogage)
  console.log(resolvedParams);

  return (
    <html lang={locale}>
      <body className="bg-[#f5f1f1c4] dark:bg-[#292929] text-black dark:text-white">
        <ThemeProviderWrapper messages={messages} locale={locale}>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
