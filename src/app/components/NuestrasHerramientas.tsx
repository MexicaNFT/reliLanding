"use client";

import React, { useState, useEffect } from "react";
import AIToolCard from "./AIToolCard";
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  BriefcaseBusiness,
  Component,
  ChartSplineIcon,
} from "lucide-react";

export default function NuestrasHerramientas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(4 / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const tools = [
    {
      title: "Investigación Legislativa y Jurídica",
      description:
        "A través de nuestros modelos, consulta de manera conversacional toda la legislación mexicana, ya sea por estado o materia.",
      icon: <Scale className="w-12 h-12 text-gray-600" />,
    },
    {
      title: "Creación y cartera de Documentos",
      description:
        "A través de un catálogo de documentos legales incluyendo contratos, crea los documentos legales que necesites en segundos.",
      icon: <BriefcaseBusiness className="w-12 h-12 text-gray-600" />,
    },
    {
      title: "Creación de modelos especializados",
      description:
        "Escoge los compendios, leyes, estatutos, reglamentos, jurisprudencias o tus propios documentos que necesites para hacer tu trabajo.",
      icon: <Component className="w-12 h-12 text-gray-600" />,
    },
    {
      title: "Análisis de Documentos",
      description:
        "Analiza tus contratos y documentos con nuestras herramientas para hacer tus flujos de trabajo más eficientes.",
      icon: <ChartSplineIcon className="w-12 h-12 text-gray-600" />,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-6">
          Nuestras Herramientas
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-relaxed">
          En Reli.Ai usamos los mejores Modelos de Lenguaje Masivos entrenados
          en tareas legislativas y legales complejas y afinados por expertos.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / cardsPerSlide)
              }%)`,
            }}
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 mb-6"
              >
                <AIToolCard
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${
                currentSlide === index ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        <button
          className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          className="absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
