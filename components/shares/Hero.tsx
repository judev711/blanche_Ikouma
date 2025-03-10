import React from "react";
interface HeroProps {
  link: string;
  title: string;
  backgroundImage: string; // ✅ Ajout d'une propriété pour l'image de fond
}

const Hero = ({ link, title, backgroundImage }: HeroProps) => {
  return (
    <div
      className="relative h-[40vh] w-full flex justify-center bg-cover bg-center items-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage}) ` }}
    >
      {/* ✅ Overlay noir semi-transparent */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* ✅ Contenu en avant-plan */}
      <div className="relative z-10 px-4">
        <h1 className="text-2xl capitalize font-bold">{link}</h1>
        <h2 className="text-xl mt-2">{title}</h2>
      </div>
    </div>
  );
};

export default Hero;
