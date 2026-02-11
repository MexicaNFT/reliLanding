"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Features section component with carousel.
 * Displays key features of Reli platform in a swipable carousel.
 *
 * @returns {JSX.Element} The rendered Features section.
 */
export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      category: "LEGAL SEARCH",
      title: "Búsqueda semántica + filtros facetados",
      description:
        "Encuentra lo relevante más rápido con búsqueda por significado y filtros avanzados. Cada resultado trae ficha técnica, resumen inteligente y señal de relevancia para validar el “por qué”. Menos ruido, más control. Con citas verificables y trazabilidad hacia la fuente.",
      image: "/assets/search.png",
    },
    {
      category: "GACETA",
      title: "Radar regulatorio 24/7",
      description:
        "Un feed curado por tus materias y filtros, más resumen diario por correo. Te mantienes actualizado sin perseguir el DOF, GACETAS o Semanarios. Detectas cambios, priorizas lo relevante y conviertes hallazgos en trabajo accionable. Configurable por tema, jurisdicción y ventana de tiempo.",
      image: "/assets/Assistant.png",
    },
    {
      category: "DOCUMENT INTELLIGENCE",
      title: "Habla con un documento",
      description:
        "Selecciona un documento y pregunta en lenguaje natural. Obtén respuestas enfocadas en el texto, con fundamentos sobre el documento y referencias dentro del propio contenido. Ideal para desmenuzar acuerdos, reformas, criterios y anexos sin perder contexto.",
      image: "/assets/Investigation.png",
    },
    {
      category: "NOTEBOOKS",
      title: "Contexto organizado para investigar mejor",
      description:
        "Crea notebooks para acotar el “mundo” de un asunto: guarda documentos, arma contexto y repite flujos. Útil para preparar argumentos, mapear riesgos y mantener consistencia. Con control y trazabilidad de fuentes.",
      image: "/assets/notes.png",
    },
    {
      category: "RESEARCH PACKS",
      title: "Entregables listos para actuar",
      description:
        "Transforma investigación en entregables: respuestas estructuradas, borradores defendibles y paquetes de evidencia trazable. Los Paquetes de Investigación funcionan como insumos/acciones dentro del flujo que incluyen un set de documentos y acciones enfocadas en Materias específicas.",
      image: "/assets/circuit.png",
    },
  ];

  const getNearestIndex = () => {
    const carousel = carouselRef.current;
    if (!carousel) return 0;

    const scrollLeft = carousel.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const targetSlide = slideRefs.current[index];
    if (!carousel || !targetSlide) return;

    carousel.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const nearestIndex = getNearestIndex();
    if (nearestIndex !== activeIndex) {
      setActiveIndex(nearestIndex);
    }
  };

  const goToPrevious = () => {
    const currentIndex = getNearestIndex();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const currentIndex = getNearestIndex();
    const newIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-[#d8dff1] relative py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-[64px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Módulos
            </p>
          </div>
        </div>

        {/* Carousel with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute -left-4 md:-left-8 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 mx-12 md:mx-16 lg:mx-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="flex-shrink-0 w-full max-w-[1200px] snap-center"
              >
                <div className="bg-neutral-100 border border-[#aec3ff] rounded-[16px] overflow-hidden mx-auto">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-[64px] items-center p-6 md:p-[48px]">
                    {/* Text Content */}
                    <div className="flex flex-col flex-1 lg:max-w-[500px]">
                      <span className="font-inter font-medium text-lg md:text-[22px] leading-[32px] text-primary-blue uppercase mb-3">
                        {feature.category}
                      </span>
                      <h3 className="font-inter font-semibold text-lg md:text-[18px] leading-[26px] text-[#36454f] mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-inter font-normal text-sm md:text-[14px] leading-relaxed md:leading-[22px] text-[#585858]">
                        {feature.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-[380px] h-[180px] md:h-[200px] rounded-[12px] bg-[#d8dff1] flex-shrink-0 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={feature.image}
                          alt={feature.title}
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

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute -right-4 md:-right-8 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary-blue w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
