"use client";
// ✅ Ce fichier est un Client Component (composant côté client) car il utilise des hooks React (`useState`, `useEffect`).

import { useState, useEffect } from "react"; // ✅ Importation des hooks React pour gérer l'état et les effets.
import { ThemeProvider } from "../contexts/theme"; // ✅ Importation du contexte permettant de partager le thème dans toute l'application.
import { NextIntlClientProvider } from "next-intl"; // ✅ Provider permettant de gérer la traduction côté client.
import Navbar from "./NavBar"; // ✅ Importation de la barre de navigation.
import Footer from "./Footer";

export default function ThemeProviderWrapper({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode; // ✅ Les composants enfants qui seront affichés à l'intérieur.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any; // ✅ Contient les messages de traduction.
  locale: string; // ✅ La langue actuellement utilisée.
}) {
  // ✅ État local pour stocker le mode de thème (clair ou sombre)
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  // ✅ Fonctions pour changer le thème
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    // ✅ Au changement du mode de thème, on met à jour la classe de l'élément <html>
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("dark", "light"); // ✅ Supprime les classes existantes
      htmlElement.classList.add(themeMode); // ✅ Ajoute la classe correspondant au thème actuel
    }
  }, [themeMode]); // ✅ L'effet est déclenché à chaque changement de `themeMode`.

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* ✅ Fournit le contexte du thème pour tous les composants enfants */}
      <NextIntlClientProvider messages={messages} locale={locale}>
        {/* ✅ Fournit les traductions à tous les composants enfants */}
        <Navbar locale={locale} />{" "}
        {/* ✅ Affichage de la barre de navigation avec la langue actuelle */}
        {children} {/* ✅ Affichage du contenu de la page */}
        <Footer />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
