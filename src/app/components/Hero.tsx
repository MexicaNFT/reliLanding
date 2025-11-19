import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-[120px] pb-0">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center text-center">

          {/* Arch Background */}
          <div className="absolute bottom-0 left-1/2 z-0 w-[140%] -translate-x-1/2">
            <div className="aspect-[2/1] w-full rounded-t-full bg-[#EBF2FF]"></div>
          </div>

          {/* Content Container (z-10 to sit on top of arch) */}
          <div className="relative z-10 flex flex-col items-center pb-[100px] pt-[80px]">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white px-6 py-2 shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                Bienvenido a Reli
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-8 max-w-[800px] text-4xl font-bold leading-tight text-[#111928] sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
              La Solución #1 de Abogados de Bolsillo en México
            </h1>

            {/* Button */}
            <button className="rounded-md bg-[#3758f9] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#2a46c9]">
              Prueba Reli
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
