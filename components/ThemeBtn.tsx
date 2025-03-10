"use client";
import React from "react";
import useTheme from "../contexts/theme"; // Importation du hook useTheme pour accéder à l'état du thème
import { HiOutlineSun } from "react-icons/hi"; // Importation de l'icône du soleil (pour le mode clair)
import { FaMoon } from "react-icons/fa"; // Importation de l'icône de la lune (pour le mode sombre)

const ThemeBtn = () => {
  // Fonction qui gère le changement de thème lorsque la case à cocher est cliquée
  const onChangeBtn = (e: React.FormEvent<HTMLInputElement>) => {
    const darkModeStatus = e.currentTarget.checked; // Récupérer l'état de la case à cocher
    if (darkModeStatus) {
      darkTheme(); // Si la case est cochée, appliquer le mode sombre
    } else {
      lightTheme(); // Si la case n'est pas cochée, appliquer le mode clair
    }
  };

  // Déstructuration de l'état du mode et des fonctions de thème du hook useTheme
  const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <>
      {/* Élément label enveloppant l'input de la case à cocher */}
      <label className="inline-flex items-center cursor-pointer">
        {/* L'input de type case à cocher qui permet de changer le thème */}
        <input
          type="checkbox"
          value=""
          className="sr-only peer" // Masque la case à cocher mais la garde accessible
          onChange={onChangeBtn} // Déclenche le changement de thème lorsqu'on clique sur la case
          checked={themeMode === "dark"} // Coche la case si le mode sombre est activé
        />

        {/* Div stylée qui représente le bouton de bascule */}
        <div className="relative w-11 h-6 bg-[#EAC258] text-white hover:bg-yellow-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#EAC258] dark:peer-focus:ring-gray-500 rounded-full peer dark:bg-[#292929] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#292929] dark:peer-checked:bg-[#EAC258]"></div>

        {/* Texte affichant l'icône en fonction du thème actuel */}
        <span className="ms-3 text-sm font-medium text-[#292929] dark:text-white">
          {/* Affiche l'icône de la lune pour le mode clair et l'icône du soleil pour le mode sombre */}
          {themeMode === "light" ? (
            <FaMoon className="text-[#292929] dark:text-[#EAC258]" />
          ) : (
            <HiOutlineSun className="text-[#EAC258]" />
          )}
        </span>
      </label>
    </>
  );
};

export default ThemeBtn;
