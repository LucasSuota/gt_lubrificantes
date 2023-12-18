import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="min-w-full h-[580px] flex flex-col items-center justify-center gap-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.90)),
        url('/assets/hero_bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <h1 className="text-white sm:w-2/4 w-3/4 mx-auto sm:text-4xl text-xl text-center font-bold">
        TROCA DE ÓLEO, FILTROS, HIGIENIZAÇÃO DE CABINE, BATERIAS E MAIS
      </h1>
      <h2 className="text-red-500 sm:text-2xl text-sm font-bold">
        MELHOR PREÇO DA REGIÃO
      </h2>
    </div>
  );
};

export default Hero;
