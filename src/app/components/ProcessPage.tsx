import React, { useEffect, useRef, useState } from "react";
import ProcessCard from "./ProcessCard";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.clientHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollProgress =
        (viewportHeight - containerTop) / (containerHeight + viewportHeight);
      const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Map scroll progress to card index
      const newIndex = Math.min(
        Math.floor(normalizedProgress * processCardData.length),
        processCardData.length - 1
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [processCardData.length, activeIndex]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        {/* Use flex instead of grid for precise control over widths */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Fixed text (30% width) */}
          <div className="lg:w-4/10 lg:pr-8 lg:sticky lg:top-0 h-fit self-center lg:h-screen flex flex-col justify-center">
            <div className="py-8 lg:py-0 max-w-md lg:max-w-xs">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#36454F] mb-6">
                How does it work?
              </h2>
              <p className="text-[#787878] text-base md:text-lg">
                Our process is designed to be simple and effective, ensuring
                that you get the perfect solution for your business needs.
                Follow these steps to transform your business with our
                cutting-edge models.
              </p>
            </div>
          </div>

          {/* Right side - Scrolling cards (70% width) */}
          <div className="lg:w-6/10 mt-8 lg:mt-0">
            <div ref={containerRef} className="relative h-[300vh] w-full">
              <div className="sticky top-0 h-screen flex items-center justify-center w-full">
                <div className="relative w-full">
                  {processCardData.map((card, index) => (
                    <div
                      key={index}
                      className="absolute transition-all duration-500 w-full"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: `translateY(${
                          (index - activeIndex) * 20
                        }px) scale(${index <= activeIndex ? 1 : 0.95})`,
                        zIndex: processCardData.length - index,
                        pointerEvents: index === activeIndex ? "auto" : "none",
                      }}
                    >
                      <ProcessCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
