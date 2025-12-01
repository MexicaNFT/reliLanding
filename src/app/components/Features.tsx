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

  const features = [
    {
      category: "SEARCH",
      title: "Access to All Regulations",
      description:
        "Access the complete Mexican legal framework, from federal laws to local regulations. Our AI-powered search finds exactly what you need in seconds, saving hours of manual research.",
      image: "/assets/search.png",
    },
    {
      category: "ASSISTANT",
      title: "AI-Powered Legal Assistant",
      description:
        "Get instant answers to your legal questions with our intelligent assistant. It understands context, provides relevant citations, and helps you draft documents faster than ever.",
      image: "/assets/Assistant.png",
    },
    {
      category: "RESEARCH",
      title: "Deep Legal Research",
      description:
        "Dive deep into case law, precedents, and legal interpretations. Our research tools help you build stronger arguments with comprehensive analysis and relevant jurisprudence.",
      image: "/assets/Investigation.png",
    },
    {
      category: "NOTES",
      title: "Smart Note Taking",
      description:
        "Organize your legal notes intelligently. Tag, search, and cross-reference your annotations with relevant laws and cases automatically.",
      image: "/assets/notes.png",
    },
    {
      category: "LIBRARY",
      title: "Personal Legal Library",
      description:
        "Build your own curated collection of laws, cases, and documents. Access your library from anywhere and share resources with your team seamlessly.",
      image: "/assets/circuit.png",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / features.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.scrollWidth / features.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : features.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < features.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-[#d8dff1] relative py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-[64px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Features
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
