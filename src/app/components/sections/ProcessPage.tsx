import React, { useState } from "react";
import ProcessCard from "../common/ProcessCard";
import WelcomeBanner from "../common/WelcomeBanner";

interface ProcessCardData {
  step: number;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

const processCardData = [
  {
    step: 1,
    title: "Agenda una llamada gratis con nuestro equipo",
    description:
      "Cuéntanos de tu negocio. Queremos ayudarte a construir modelos que se adapten completamente a tu práctica.",
    ctaText: "Agenda tu llamada",
    ctaLink: "#",
  },
  {
    step: 2,
    title: "Construimos tu modelo en menos de una semana.",
    description:
      "Como parte del proceso, te ayudamos a cargar los datos y documentos con los que ya cuentas para que no empieces desde cero.",
    ctaText: "Agenda tu llamada",
    ctaLink: "#",
  },
  {
    step: 3,
    title: "Te acompañamos en cada paso",
    description:
      "Siempre estamos a un mensaje de ayudarte. Entendemos que el derecho evoluciona y la tecnología debería evolucionar con ello.",
    ctaText: "Agenda tu llamada",
    ctaLink: "#",
  },
];

const ProcessPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#F1F5F9]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Fixed text */}
          <div className="lg:w-2/5 lg:pr-8 md:sticky md:top-16 md:mt-32">
            <div className="max-w-md">
              <WelcomeBanner text="El proceso" />
              <p className="text-[#787878] text-base md:text-lg">
                Our process is designed to be simple and effective, ensuring
                that you get the perfect solution for your business needs.
                Follow these steps to transform your business with our
                cutting-edge models.
              </p>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="lg:w-3/5 flex flex-col">
            <div className="relative ">
              {/* Card container */}
              <div className="relative flex-1 mb-40">
                {processCardData.map((card, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      visibility: index === activeIndex ? "visible" : "hidden",
                      height: "auto", // Ensure the height is fluid and fits the content
                    }}
                  >
                    <ProcessCard {...card} />
                  </div>
                ))}
              </div>

              {/* Dot navigation */}
              <div className="flex justify-center top-0">
                {processCardData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                      index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
