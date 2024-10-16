"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../components/PlanCard";

export default function PlanPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const plans = [
    {
      name: "Basic",
      description: "For a taste of our product",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "Access to basic plan" },
        { text: "Limited features" },
        { text: "Email support" },
        { text: "Basic analytics" },
      ],
      isCurrentPlan: true,
      planType: "Basic" as const,
    },
    {
      name: "Professional",
      description: "For small businesses",
      monthlyPrice: 99,
      yearlyPrice: 99 * 12,
      features: [
        { text: "All Basic features" },
        { text: "Advanced analytics" },
        { text: "Priority support" },
        { text: "API access" },
      ],
      isCurrentPlan: false,
      planType: "Professional" as const,
    },
    {
      name: "Enterprise",
      description: "For large companies",
      monthlyPrice: "",
      yearlyPrice: "",
      features: [
        { text: "All Professional features" },
        { text: "Dedicated account manager" },
        { text: "Custom integrations" },
        { text: "SLA agreement" },
      ],
      isCurrentPlan: false,
      planType: "Enterprise" as const,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-0 relative overflow-hidden mt-20">
      <div className="absolute left-1/2 bottom-0 w-full h-96 -translate-x-1/2 bg-gradient-radial from-[#1ABC9C] via-transparent to-transparent opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#36454F]">
          Upgrade your plans for more features
        </h1>
        <p className="text-center text-gray-600 mb-8">Current plan: Basic</p>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-200 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full ${
                isMonthly ? "bg-white shadow-sm" : "text-gray-700"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                !isMonthly ? "bg-white shadow-sm" : "text-gray-700"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10 focus:outline-none md:-translate-x-[200px]"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10 focus:outline-none  md:translate-x-[200px]"
            aria-label="Next plan"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Card Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {plans.map((plan, index) => (
                <div key={plan.name} className="w-full flex-shrink-0">
                  <Card
                    {...plan}
                    price={isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                    isMonthly={isMonthly}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {plans.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
