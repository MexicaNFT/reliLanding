"use client";
import { useState } from "react";
import { Lock, FileCheck, Database } from "lucide-react";

/**
 * Security section component.
 * Displays security features with flippable cards.
 *
 * @returns {JSX.Element} The rendered security section.
 */
export default function Seguridad() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const securityFeatures = [
    {
      title: "Encripción",
      description: "Encriptamos todos tus datos en reposo y en tránsito.",
      Icon: Lock,
    },
    {
      title: "Cumplimiento",
      description: "Estamos en proceso de certificación de ISO-27001 y SOC-2",
      Icon: FileCheck,
    },
    {
      title: "Datos",
      description: "No entrenamos modelos con datos de nuestros clientes sin su permiso.",
      Icon: Database,
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="bg-[#d8dff1] py-16 lg:py-[120px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-8 lg:mb-[64px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Seguridad
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-xl sm:text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f] text-center mb-10 lg:mb-[80px] max-w-[1200px] mx-auto">
          Cuidamos tus datos con los más altos estándares y protocolos de seguridad.
        </h2>

        {/* Flippable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 justify-center items-center max-w-[894px] mx-auto">
          {securityFeatures.map((feature, index) => {
            const isFlipped = flippedCard === index;
            const Icon = feature.Icon;
            
            return (
              <div
                key={index}
                className="relative h-[220px] sm:h-[240px] lg:h-[268px] cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full bg-white border border-[#d3d7ea] rounded-[16px] p-2 lg:p-[10px]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full h-full rounded-[12px] lg:rounded-[16px] bg-gradient-to-b from-[#f5f5f5] to-[#e8f5f1] flex flex-col items-center justify-center">
                      {/* Icon */}
                      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] flex items-center justify-center mb-3 lg:mb-4">
                        <Icon className="w-full h-full text-[#3758F9]" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <p className="font-inter font-extrabold text-lg sm:text-xl lg:text-[24px] leading-[32px] text-[#36454f] text-center">
                        {feature.title}
                      </p>
                      
                      {/* Hint text */}
                      <p className="font-inter text-xs sm:text-sm text-gray-500 mt-2">
                        Click para más info
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-[#3758F9] to-[#7c3aed] rounded-[16px] p-6 lg:p-8 flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="font-inter text-white text-center text-base sm:text-lg lg:text-xl leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

