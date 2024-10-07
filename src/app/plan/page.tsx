"use client";
import React, { useState } from "react";
import Card from "../components/PlanCard";

export default function PlanPage() {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "For a taste of our product",
      price: 0,
      features: [
        { text: "Access to basic plan" },
        { text: "Limited features" },
        { text: "Email support" },
        { text: "Basic analytics" },
      ],
      isCurrentPlan: true,
    },
    {
      name: "Professional",
      description: "For small businesses",
      price: 99,
      features: [
        { text: "All Basic features" },
        { text: "Advanced analytics" },
        { text: "Priority support" },
        { text: "API access" },
      ],
      isCurrentPlan: false,
    },
    {
      name: "Enterprise",
      description: "For large companies",
      price: 299,
      features: [
        { text: "All Professional features" },
        { text: "Dedicated account manager" },
        { text: "Custom integrations" },
        { text: "SLA agreement" },
      ],
      isCurrentPlan: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
