import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Card = () => {
  const t = useTranslations("card");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:border-2 dark:border-white">
      <Image
        className="w-full"
        src="/mini.png" // Chemin de l'image
        alt="Sunset in the mountains" // Texte alternatif pour l'image
        width={500} // Largeur de l'image
        height={300} // Hauteur de l'image
        priority // Optionnel : charge cette image en priorité (utile pour les images importantes)
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{t("title")}</div>
        <p className="text-gray-700 text-base dark:text-gray-300">
          {t("description")}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
          #Next.js
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
          #TypeScript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
          #Tailwind CSS
        </span>
      </div>
    </div>
  );
};

export default Card;
