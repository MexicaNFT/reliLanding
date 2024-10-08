"use client";
import React, { useState } from "react";
import Card from "../components/PlanCard";

export default function PlanPage() {
  const [isMonthly, setIsMonthly] = useState(true);

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

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-10">
      <div className="absolute left-1/2 bottom-0 w-full  h-96 -translate-x-1/2 bg-gradient-radial from-[#1ABC9C] via-transparent to-transparent opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              {...plan}
              price={isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
              isMonthly={isMonthly}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
