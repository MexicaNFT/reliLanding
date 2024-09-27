"use client";
import React, { useState } from "react";
import AIToolCard from "../components/AIToolCard";

const AIToolbox: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const cardWidth = 300 + 24;

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

export default AIToolbox;
