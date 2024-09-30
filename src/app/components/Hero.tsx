import React from "react";
import Image from "next/image";
import Assistant from "../assets/Assistant.png";
import BrandStrip from "./BrandStrip";
import AIToolbox from "./AiToolBox";

export default function Hero() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight md:leading-[110px] text-center mb-4 md:mb-6 text-[#36454F] py-4">
          La plataforma de LegalTech más completa de México
        </h1>

        <p className="font-poppins font-medium text-base sm:text-lg md:text-2xl text-[#787878] leading-tight md:leading-[42px] text-center mb-6 md:mb-10 max-w-3xl mx-auto">
          Mejora tus procesos legales usando modelos especializados y a la
          medida para tu empresa
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24 md:mb-40 my-14">
          <button className="font-poppins text-sm sm:text-base font-normal leading-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#36454F] border border-[#36454F] rounded-full hover:bg-gray-100 transition duration-300">
            Contáctanos
          </button>
          <button className="font-poppins text-sm sm:text-base font-normal leading-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#34C1A6] text-white border border-[#34C1A6] rounded-full hover:bg-[#2ca089] transition duration-300">
            Sign In
          </button>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <BrandStrip />
        </div>

        <div className="text-center my-16 md:my-24">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
            Product
          </h2>
          <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[42px]">
            En Reli.Ai puedes encontrar una cartera de productos desarrollados
            para abogados y equipos legales de todas las áreas y ámbitos
          </p>
        </div>

        <div className="relative w-full max-w-[1000px] aspect-[1200/700] mx-auto mb-10 sm:mb-16 border-2 border-[#dcdfe1] rounded-xl overflow-hidden">
          <Image
            src={Assistant}
            alt="Hero image"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div>
          <AIToolbox />
        </div>
      </div>
    </section>
  );
}
