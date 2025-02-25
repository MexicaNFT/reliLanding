import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sitorem",
    name: "John Doe",
    company: "Tech Solutions Inc",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Innovative solutions that transformed our business operations. Lorem ipsum dolor sit amet consectetur. The team's dedication and expertise are unmatched.",
    name: "Sarah Smith",
    company: "Digital Innovations",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. A partnership that exceeded our expectations. Lorem ipsum dolor sit amet consectetur. Their commitment to excellence sets them apart from competitors.",
    name: "Michael Brown",
    company: "Global Systems",
  },
];

const TestimonialPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">(
    ""
  );

  const handlePrevious = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setSlideDirection("");
    }, 300);
  };

  const handleNext = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setSlideDirection("");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ddf5f0] via-white to-[#ddf5f0] py-16 px-4">
      <div className="max-w-4xl mx-auto relative">
        <h1 className="text-3xl font-bold text-center text-[#36454F] mb-12 mt-5">
          Why People Choose Us
        </h1>

        <button
          onClick={handlePrevious}
          className="absolute -left-4 md:-left-28 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8 relative min-h-[400px] overflow-hidden">
          <Quote
            className="absolute top-8 left-8 w-20 h-20 text-gray-100 -z-0 mt-6"
            strokeWidth={1}
          />

          <div className="relative h-full">
            <div
              className={`transition-all duration-300 w-full 
                ${slideDirection === "left" ? "opacity-0 -translate-x-10" : ""}
                ${
                  slideDirection === "right"
                    ? "opacity-0 translate-x-10"
                    : "opacity-100"
                }
              `}
            >
              <blockquote className="text-[#36454F] text-lg mb-6 relative z-10 mt-20">
                {testimonials[currentIndex].content}
              </blockquote>

              <div className="text-gray-800">
                <p className="font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[#36454F]">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="w-full h-10 bg-[#36454F] mt-8 " />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-4 md:-right-28 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center mt-8 gap-2"></div>
      </div>
    </div>
  );
};

export default TestimonialPage;
