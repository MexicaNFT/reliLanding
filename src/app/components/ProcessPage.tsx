// pages/ProcessPage.tsx
import React from "react";
import ProcessCards from "../components/ProcessCards";

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
    title: "Análisis de necesidades",
    description:
      "Nuestros expertos evaluarán tu negocio para identificar los modelos más adecuados para ti.",
    ctaText: "Conoce más",
    ctaLink: "#",
  },
  {
    step: 3,
    title: "Desarrollo personalizado",
    description:
      "Creamos modelos adaptados específicamente a tus necesidades y flujo de trabajo.",
    ctaText: "Ver ejemplos",
    ctaLink: "#",
  },
  {
    step: 4,
    title: "Implementación y soporte",
    description:
      "Te acompañamos durante todo el proceso de implementación y te ofrecemos soporte continuo.",
    ctaText: "Contactar soporte",
    ctaLink: "#",
  },
];

const ProcessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Fixed text */}
          <div className="sticky top-1/4 h-fit">
            <h2 className="text-4xl font-bold text-[#36454F] mb-6">
              How does it work?
            </h2>
            <p className="text-[#787878] max-w-md">
              Our process is designed to be simple and effective, ensuring that
              you get the perfect solution for your business needs. Follow these
              steps to transform your business with our cutting-edge models.
            </p>
          </div>

          {/* Right side - Scrolling cards */}
          <div>
            <ProcessCards cards={processCardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
