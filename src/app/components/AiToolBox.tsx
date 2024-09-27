"use client";

import React, { useState, useEffect } from "react";
import AIToolCard from "../components/AIToolCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AIToolbox() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const aiTools = [
    {
      title: "AI-Powered ChatBot",
      description:
        "Use our GPT-4 powered chatbot to assist you with day-to-day tasks. Businesses can access their own personalized chatbot.",
    },
    {
      title: "Image Generation",
      description:
        "Create stunning images from text descriptions using advanced AI algorithms.",
    },
    {
      title: "Voice Assistant",
      description:
        "Interact with our AI using voice commands for a hands-free experience.",
    },
    {
      title: "Text Summarization",
      description:
        "Quickly summarize long documents or articles with our AI-powered tool.",
    },
    {
      title: "Language Translation",
      description:
        "Translate text between multiple languages with high accuracy.",
    },
    {
      title: "Sentiment Analysis",
      description:
        "Analyze the sentiment of text data to gain insights into customer opinions.",
    },
    {
      title: "Code Generation",
      description:
        "Generate code snippets or entire functions based on natural language descriptions.",
    },
  ];

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

  const totalSlides = Math.ceil(aiTools.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Nuestras Herramientas
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[42px]">
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
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
              >
                <AIToolCard title={tool.title} description={tool.description} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                currentSlide === index ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <button
          className="absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          className="absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
