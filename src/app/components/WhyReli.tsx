"use client";
import Link from "next/link";

/**
 * Why Reli section component.
 * Displays the main value proposition of Reli.
 *
 * @returns {JSX.Element} The rendered Why Reli section.
 */
export default function WhyReli() {
  return (
    <section id="why-reli" className="bg-neutral-100 min-h-screen flex items-center justify-center relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              ¿Qué es Reli?
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[860px] mx-auto text-center">
          <div className="space-y-4 md:space-y-5">
            <p className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f]">
              Reli es tu sistema operativo de supervivencia jurídica.
            </p>
            <p className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f]">
              Diseñada para el marco jurídico mexicano.
            </p>
            <p className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f]">
              Combina bases de datos actualizadas y herramientas de búsqueda para generar respuestas con citas verificables.
            </p>
            <p className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f]">
              Activas un radar regulatorio 24/7 y conviertes investigación en entregables.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link href="https://app.reli.ai">
              <button className="bg-primary-blue rounded-[6px] px-6 md:px-[28px] py-3 md:py-[13px] font-inter font-medium text-sm md:text-[16px] leading-[24px] text-neutral-100 hover:bg-opacity-90 transition-colors">
                Crear cuenta grátis
              </button>
            </Link>
            <p className="font-inter font-normal text-sm md:text-base leading-[24px] text-[#36454f]">
              Sin fricción: busca, filtra, cita y exporta entregables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
