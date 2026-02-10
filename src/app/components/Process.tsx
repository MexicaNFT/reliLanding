"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Process section component showing "How Reli AI Works" in 3 steps.
 * Features sticky scroll effect with stacking cards.
 *
 * @returns {JSX.Element} The rendered Process section.
 */
export default function Process() {
  const steps = [
    {
      number: "Paso 1",
      title: "Filtra con control y Busca o Actualízate",
      description:
        "Agrega tu materia de interés, jurisdicción, fuentes interesadas y genera una gaceta diaria o una búsqueda dentro de todo el corpus mexicano",
      buttonText: "Probar Reli",
      buttonHref: "https://app.reli.ai",
      image: "/assets/Step-1-Call.png",
      imagePosition: "right",
    },
    {
      number: "Paso 2",
      title: "Convierte fuentes en respuesta estructurada",
      description:
        "Consulta el documento rápido con una conversación; o agrégalo a un cuaderno de trabajo o investigación",
      buttonText: "Probar Document Intelligence",
      buttonHref: "https://app.reli.ai",
      image: "/assets/Step2-BuildModel.png",
      imagePosition: "left",
    },
    {
      number: "Paso 3",
      title: "Cuadernos y Paquetes de Investigación",
      description:
        "Organiza tu trabajo, documentos importantes, normativa y automatizaciones en modelos específicos; o usa nuestros Paquetes de Investigación",
      buttonText: "Crear mi primer notebook",
      buttonHref: "https://app.reli.ai",
      image: "/assets/Step3 - Support.png",
      imagePosition: "right",
    },
  ];

  // Peek height so only the header of previous cards stays visible when stacking
  const cardGap = 102;
  // Keep the section title fixed at the top while this section is active.
  const titleTopOffset = 0;
  // Start the card stack below the sticky title so step headers stay readable.
  const cardsTopOffset = 216;

  return (
    <section id="how-it-works" className="bg-neutral-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Sticky Section Badge */}
        <div
          className="sticky top-0 z-30 flex justify-center pt-[120px] pb-[42px] bg-neutral-100"
          style={{ top: `${titleTopOffset}px` }}
        >
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              El Proceso
            </p>
          </div>
        </div>

        {/* Sticky Steps Container */}
        <div className="relative pb-[280px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: `${cardsTopOffset + index * cardGap}px`,
                zIndex: index + 1,
              }}
            >
              <div className="bg-neutral-100 border-[2.5px] border-primary-blue rounded-[16px] max-w-[1200px] mx-auto overflow-hidden">
                {/* Step Header */}
                <div className="px-6 md:px-[56px] pt-4 md:pt-[20px]">
                  <div className="flex justify-end">
                    <p className="font-inter font-semibold italic text-xl md:text-[28px] leading-[40px] text-[#36454f]">
                      {step.number}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-primary-blue mt-3 md:mt-[16px]" />

                {/* Content Container */}
                <div className={`flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-center p-6 md:p-[40px] ${step.imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
                  {/* Text Content */}
                  <div className="flex flex-col flex-1 lg:max-w-[420px]">
                    <h3 className="font-inter font-semibold text-lg md:text-[22px] leading-tight md:leading-[28px] text-[#36454f]">
                      {step.title}
                    </h3>
                    <p className="font-inter font-normal text-sm md:text-[15px] leading-relaxed md:leading-[22px] text-[#787878] mt-2 md:mt-[12px]">
                      {step.description}
                    </p>
                    <div className="mt-5 md:mt-[24px] flex justify-center">
                      <Link
                        href={step.buttonHref}
                        className="bg-primary-blue border border-primary-blue rounded-[6px] px-[24px] py-[10px] font-inter font-medium text-[14px] text-white hover:bg-blue-900 transition-colors flex items-center gap-2 h-[42px]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M10 7V13M7 10H13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        {step.buttonText}
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-[380px] h-[160px] md:h-[200px] rounded-[12px] bg-gray-100 flex-shrink-0 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
