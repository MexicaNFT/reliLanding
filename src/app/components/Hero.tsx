import React from "react";
import Image from "next/image";
import Assistant from "../assets/Assistant.png";
import BrandStrip from "./BrandStrip";

const Hero: React.FC = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-[70px] leading-tight md:leading-[110px] text-center mb-6 text-[#36454F]">
          La plataforma de LegalTech más completa de México
        </h1>
        <p className="font-poppins font-bold text-2xl md:text-[18px] text-[#787878] leading-tight md:leading-[42px] text-center mb-10 max-w-3xl mx-auto">
          Mejora tus procesos legales usando modelos especializados y a la
          medida para tu empresa
        </p>
        <div className="flex justify-center space-x-6 mb-16">
          <button className="font-poppins text-base font-normal leading-6 px-6 py-3 bg-white text-[#36454F] border border-[#36454F] rounded-full hover:bg-gray-100 transition duration-300">
            Contáctanos
          </button>
          <button className="font-poppins text-base font-normal leading-6 px-6 py-3 bg-[#34C1A6] text-white border border-[#34C1A6] rounded-full hover:bg-[#2ca089] transition duration-300">
            Sign In
          </button>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <BrandStrip />
        </div>
        <div className="relative w-full max-w-[1099px] h-[653px] mx-auto mb-16 border-2 border-[#dcdfe1] rounded-lg">
          <Image
            src={Assistant}
            alt="Hero image"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
