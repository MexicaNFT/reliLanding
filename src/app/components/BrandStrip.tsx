"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  siNike,
  siPuma,
  siCocacola,
  siAdidas,
  siSpotify,
} from "simple-icons/icons";
import AIToolCard from "../components/AIToolCard";

const BrandStrip: React.FC = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const cardWidth = 300 + 24;

  useEffect(() => {
    const strip = stripRef.current;
    if (strip) {
      let position = 0;
      const animate = () => {
        position -= 1;
        if (position <= -strip.offsetWidth / 2) {
          position = 0;
        }
        strip.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, []);

  const icons = [siNike, siPuma, siCocacola, siAdidas, siSpotify];
  const renderIcon = (Icon: any, index: number) => (
    <div key={index} className="inline-block mx-8">
      <svg
        width="100"
        height="50"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-black"
      >
        <path d={Icon.path} />
      </svg>
    </div>
  );

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

  const totalSlides = Math.ceil(aiTools.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="overflow-hidden py-8">
        <div
          ref={stripRef}
          className="flex whitespace-nowrap"
          style={{ minWidth: "200%" }}
        >
          {icons.concat(icons).map((icon, index) => renderIcon(icon, index))}
        </div>
      </div>

      <h2 className="font-poppins text-[40px] font-bold leading-[60px] text-center text-[#36454F] mt-16 mb-8">
        Your AI Toolbox includes
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * (cardWidth * cardsPerSlide)
            }px)`,
          }}
        >
          {aiTools.map((tool, index) => (
            <AIToolCard
              key={index}
              title={tool.title}
              description={tool.description}
            />
          ))}
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default BrandStrip;
