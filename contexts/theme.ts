import { createContext, useContext } from "react";
interface ThemeContextType {
  themeMode: "light" | "dark"; // Le mode est soit "light", soit "dark"
  darkTheme: () => void; // Fonction pour activer le mode sombre
  lightTheme: () => void; // Fonction pour activer le mode clair
}
// Crée le contexte avec des valeurs par défaut
export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light", // Mode par défaut
  darkTheme: () => {}, // Fonction vide par défaut
  lightTheme: () => {}, // Fonction vide par défaut
});

// Fournisseur du contexte
export const ThemeProvider = ThemeContext.Provider;

// Hook personnalisé pour accéder au contexte
export default function useTheme() {
  return useContext(ThemeContext);
}
