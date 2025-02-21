"use client";

import React, { useState } from "react";
import PriceCard from "../components/PriceCard";

interface PlanData {
  planName: string;
  price: string;
  features: string[];
  isCurrentPlan: boolean;
  isRecommended: boolean;
  imagePath: string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  const monthlyPlans: PlanData[] = [
    {
      planName: "Basic Plan",
      price: "199",
      features: [
        "1 user",
        "10 GB storage",
        "Basic support",
        "Access to all basic features",
      ],
      isCurrentPlan: true,
      isRecommended: false,
      imagePath: "/assets/lawyer.png",
    },
    {
      planName: "Premium Plan",
      price: "399",
      features: [
        "5 users",
        "50 GB storage",
        "Priority support",
        "Access to all premium features",
        "Advanced analytics",
      ],
      isCurrentPlan: false,
      isRecommended: true,
      imagePath: "/assets/lawyer.png",
    },
    {
      planName: "Enterprise Plan",
      price: "799",
      features: [
        "Unlimited users",
        "500 GB storage",
        "24/7 dedicated support",
        "Access to all enterprise features",
        "Custom integrations",
        "Dedicated account manager",
      ],
      isCurrentPlan: false,
      isRecommended: false,
      imagePath: "/assets/lawyer.png",
    },
  ];

  const annuallyPlans: PlanData[] = [
    {
      planName: "Basic Plan",
      price: "1990",
      features: [
        "1 user",
        "10 GB storage",
        "Basic support",
        "Access to all basic features",
        "Save 16% annually",
      ],
      isCurrentPlan: true,
      isRecommended: false,
      imagePath: "/assets/lawyer.png",
    },
    {
      planName: "Premium Plan",
      price: "3990",
      features: [
        "5 users",
        "50 GB storage",
        "Priority support",
        "Access to all premium features",
        "Advanced analytics",
        "Save 16% annually",
      ],
      isCurrentPlan: false,
      isRecommended: true,
      imagePath: "/assets/lawyer.png",
    },
    {
      planName: "Enterprise Plan",
      price: "7990",
      features: [
        "Unlimited users",
        "500 GB storage",
        "24/7 dedicated support",
        "Access to all enterprise features",
        "Custom integrations",
        "Dedicated account manager",
        "Save 16% annually",
      ],
      isCurrentPlan: false,
      isRecommended: false,
      imagePath: "/assets/lawyer.png",
    },
  ];

  const activePlans = billingCycle === "monthly" ? monthlyPlans : annuallyPlans;

  const handleSelectPlan = (index: number) => {
    console.log(`Selected plan: ${activePlans[index].planName}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. We offer flexible options to
          help you get the most out of our service.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === "monthly"
                ? "bg-white shadow-sm text-gray-800"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === "annually"
                ? "bg-white shadow-sm text-gray-800"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </button>
        </div>
        {billingCycle === "annually" && (
          <span className="ml-2 bg-green-100 text-green-800 text-xs text-center font-medium px-2.5 py-2 rounded-full">
            Save 16%
          </span>
        )}
      </div>

      {/* Price Cards - equal height with grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {activePlans.map((plan, index) => (
          <div key={index} className="h-full flex">
            <PriceCard
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
              isCurrentPlan={plan.isCurrentPlan}
              isRecommended={plan.isRecommended}
              imagePath={plan.imagePath}
              onSelectPlan={() => handleSelectPlan(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
