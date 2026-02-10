"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Testimonials section component.
 * Displays user testimonials with navigation.
 *
 * @returns {JSX.Element} The rendered Testimonials section.
 */
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Cuando descubrí esta app me fue de mucha utilidad, y más para mis ensayos y para apoyarme en buscar bibliografías y referencias para mi tesis",
      author: "Carlos Alejandro Gracia, Estudiante",
    },
    {
      text: "Es la mejor aplicación de investigación para derecho mexicano. Encuentras y organizas muy fácil todo",
      author: "Andrea Rosales, Maestra",
    },
    {
      text: "Está buenísimo que pueda tener los documentos con los que estoy trabajando en carpetas para poder consultar rápido sobre los temas que trabajo diario",
      author: "Alonso, Asesor Parlamentario",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-neutral-100 py-[120px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-[64px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Testimonios
            </p>
          </div>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute -left-4 md:-left-8 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#3758f9]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-8 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#3758f9]" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-[#fdfdfd] rounded-[16px] overflow-hidden shadow-sm mx-12 md:mx-16 lg:mx-8">
            {/* Quote Icon */}
            <div className="absolute top-6 md:top-[48px] left-10 md:left-[72px] w-[50px] lg:w-[78px] h-[40px] lg:h-[64px]">
              <svg
                viewBox="0 0 78 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M17.55 64H0V31.36C0 21.76 2.34 14.08 7.02 8.32C11.82 2.56 18.84 0 28.08 0V14.08C23.04 14.08 19.62 15.68 17.82 18.88C16.14 21.96 15.3 26.08 15.3 31.24V33.28H28.08V64H17.55ZM67.05 64H49.5V31.36C49.5 21.76 51.84 14.08 56.52 8.32C61.32 2.56 68.34 0 77.58 0V14.08C72.54 14.08 69.12 15.68 67.32 18.88C65.64 21.96 64.8 26.08 64.8 31.24V33.28H77.58V64H67.05Z"
                  fill="#E5E5E5"
                />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="p-6 md:p-[48px] pt-20 md:pt-[100px]">
              <p className="font-inter font-normal text-lg lg:text-[24px] leading-relaxed lg:leading-[32px] text-[#585858] mb-6 lg:mb-8">
                {testimonials[currentIndex].text}
              </p>
              <p className="font-inter font-semibold italic text-base lg:text-[20px] leading-[26px] text-[#36454f]">
                {testimonials[currentIndex].author}
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="h-[40px] lg:h-[52px] bg-blue-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
