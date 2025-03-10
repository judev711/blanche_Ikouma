import React from "react";
// Automate 🤖 (Automatisation)
import { FaCogs, FaLightbulb, FaBolt } from "react-icons/fa";

interface titleProps {
  title: string;
}

const HomeHero = ({ title }: titleProps) => {
  return (
    <div
      className="w-full  gap-5  flex-col h-[60vh] bg-[url('/images/baner.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center text-[2rem] font-bold shadow-lg 
  text-[#191717] dark:text-[#ffffff] bg-[#f8f8f8] dark:bg-[#292929]"
      style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }}
    >
      <div className="px-4 flex flex-col justify-center items-center">
        <h1 className="text-center">{title}</h1>
        <div className="flex max-w-[50%] min-w-[300px]  justify-between items-center">
          <FaCogs />
          <FaLightbulb />
          <FaBolt />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
