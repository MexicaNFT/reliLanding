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
      text: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      author: "Name , Company name",
    },
    // Add more testimonials as needed
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
    <section className="bg-neutral-100 h-[882px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Testimonios
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-[36px] leading-[46px] text-[#36454f] text-center mb-[86px]">
          Comentarios de nuestros usuarios
        </h2>

        {/* Testimonial Card Container */}
        <div className="relative max-w-[1044px] mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-[30px] h-[30px] text-primary-blue" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-[30px] h-[30px] text-primary-blue" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-[#fdfdfd] rounded-[10px] overflow-hidden h-[450px] relative">
            {/* Quote Icon */}
            <div className="absolute top-[24px] left-[24px] w-[78px] h-[64px] text-gray-300">
              <svg
                viewBox="0 0 78 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 32h16v32H0V32zm0-32C0 17.673 14.327 32 32 32V16C23.163 16 16 8.837 16 0H0zm46 32h16v32H46V32zm0-32C46 17.673 60.327 32 78 32V16C69.163 16 62 8.837 62 0H46z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <div className="pt-[90px] px-[126px] pb-[60px]">
              <p className="font-inter font-normal text-[24px] leading-[32px] text-[#585858] text-center mb-[32px]">
                {testimonials[currentIndex].text}
              </p>
              <p className="font-inter font-semibold italic text-[20px] leading-[26px] text-[#36454f] text-center">
                {testimonials[currentIndex].author}
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[52px] bg-blue-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
