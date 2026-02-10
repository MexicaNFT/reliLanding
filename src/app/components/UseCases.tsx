"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Use Cases section component with sticky scroll effect.
 * Shows 3 different use cases for Reli with stacking cards.
 *
 * @returns {JSX.Element} The rendered Use Cases section.
 */
export default function UseCases() {
  const useCases = [
    {
      title: "Un Problema Común",
      description:
        "Buscar, validar, interpretar, citar y redactar consume horas. Encontrar fundamentos vigentes y relevantes es un reto. El riesgo de omisión se paga caro. Acabas inundado revisando entre cientos de documentos de clientes y normativa.",
      buttonText: "Read case study",
      image: "/assets/un-problema-comun.png",
      showIcon: true,
      showLogo: false,
    },
    {
      title: "Las Alternativas",
      description:
        "Un modelo general puede sonar convincente. Hasta que alucina por primera vez y te da una ley completamente inventada; o cuando haces investigación y extrae fuentes irrelevantes o no vigentes. Acabas pasando horas revisando, cotejando las fuentes",
      buttonText: "Read case study",
      image: "/assets/las-alternativas.png",
      showIcon: true,
      reverseLayout: true,
      showLogo: false,
    },
    {
      title: "Por eso nace Reli",
      description:
        "Reli es un sistema que genera búsquedas inteligentes solamente con documentos legales. Centraliza las gacetas, informes, semanarios, periódicos y más para generar un sistema actualizado, estructurado y centrado en las necesidades del derecho en México",
      buttonText: "Crear cuenta grátis",
      buttonHref: "https://app.reli.ai",
      image: "/assets/nace-reli.png",
      showIcon: false,
      isPrimaryCta: true,
      showLogo: false,
    },
  ];

  // Keep cards fully stacked without showing a header strip of the previous one
  const cardGap = 18;
  // Keep the title fixed at the top of the viewport while this section is active.
  const titleTopOffset = 0;
  // Reserve vertical room so cards never collide with the sticky title block.
  const cardsTopOffset = 216;

  return (
    <section id="use-cases" className="bg-[#d8dff1] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Sticky title fixed at the top of the screen */}
        <div
          className="sticky top-0 z-30 flex justify-center pt-[120px] pb-[42px] bg-[#d8dff1]"
          style={{ top: `${titleTopOffset}px` }}
        >
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              ¿Por qué Reli?
            </p>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative pb-[260px]">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: `${cardsTopOffset + index * cardGap}px`,
                zIndex: index + 1,
              }}
            >
              <div className="bg-neutral-100 border border-[#aec3ff] rounded-[16px] overflow-hidden max-w-[1200px] mx-auto">
                <div
                  className={`flex ${
                    useCase.reverseLayout
                      ? "flex-col-reverse lg:flex-row-reverse"
                      : "flex-col lg:flex-row"
                  } gap-8 lg:gap-[102px] items-center p-6 md:p-[48px] lg:p-[56px]`}
                >
                  {/* Image/Logo Section */}
                  <div className="w-full lg:w-[380px] h-[180px] md:h-[220px] rounded-[16px] bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {useCase.showLogo ? (
                      <div className="font-poppins font-semibold text-5xl md:text-[72px] text-primary-blue tracking-[-0.96px]">
                        Reli
                      </div>
                    ) : useCase.image ? (
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                        <Image
                          src={useCase.image}
                          alt={useCase.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 lg:max-w-[510px] py-2">
                    <h3 className="font-inter font-semibold text-2xl md:text-[32px] leading-tight md:leading-[42px] text-[#36454f] text-center">
                      {useCase.title}
                    </h3>
                    <p className="font-inter font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#36454f] mt-3 md:mt-[12px]">
                      {useCase.description}
                    </p>
                    <div className="mt-6 md:mt-[32px] flex justify-center">
                      {useCase.buttonHref ? (
                        <Link
                          href={useCase.buttonHref}
                          className={`rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] transition-colors flex items-center gap-2 h-[48px] ${
                            useCase.isPrimaryCta
                              ? "bg-primary-blue text-neutral-100 hover:bg-opacity-90"
                              : "bg-white shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] text-primary-blue hover:bg-gray-50"
                          }`}
                        >
                          {useCase.showIcon && (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-blue"
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
                          )}
                          {useCase.buttonText}
                        </Link>
                      ) : (
                        <button className="bg-white shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue hover:bg-gray-50 transition-colors flex items-center gap-2 h-[48px]">
                          {useCase.showIcon && (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-blue"
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
                          )}
                          {useCase.buttonText}
                        </button>
                      )}
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
