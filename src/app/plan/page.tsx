"use client";
import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import CustomSwitch from "../components/CustomSwitch";

export default function PlanPage() {
  const [autoRenew, setAutoRenew] = useState(false);

  const plans = [
    { name: "Beginner", price: 50, duration: "30 days", isSubscribed: true },
    {
      name: "Professional",
      price: 111,
      duration: "30 days",
      isSubscribed: false,
    },
    {
      name: "Enterprise",
      price: 299,
      duration: "30 days",
      isSubscribed: false,
    },
  ];

  const billingHistory = [
    {
      date: "2023-05-01",
      details: "Monthly Subscription",
      amount: "$50.00",
      downloads: "5",
    },
    {
      date: "2023-04-01",
      details: "Monthly Subscription",
      amount: "$50.00",
      downloads: "7",
    },
    {
      date: "2023-03-01",
      details: "Monthly Subscription",
      amount: "$50.00",
      downloads: "3",
    },
  ];

  const handleUpgrade = (planName: string) => {
    console.log(`Upgrading to ${planName} plan`);
    // Implement upgrade logic here
  };

  const handleCancel = () => {
    console.log("Cancelling subscription");
    // Implement cancellation logic here
  };

  return (
    <div className="flex flex-col bg-white p-4">
      <h1 className="font-semibold text-xl text-[#36454F] mb-4">Plans</h1>
      <div className="flex justify-between mb-6">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            isSubscribed={plan.isSubscribed}
            name={plan.name}
            price={plan.price}
            duration={plan.duration}
            onUpgrade={() => handleUpgrade(plan.name)}
            onCancel={handleCancel}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 mr-4">
          <h2 className="font-semibold text-lg text-[#36454F]">
            Enable auto renew
          </h2>
          <p className="text-sm text-[#36454F] mt-1">
            This option, if checked, will renew your productive subscription
            when the current plan expires. However, this might prevent you from
            exploring other plans.
          </p>
        </div>
        <CustomSwitch
          selected={autoRenew}
          onToggle={() => setAutoRenew(!autoRenew)}
        />
      </div>
      <div>
        <h2 className="font-semibold text-base text-[#36454F] mb-2">
          Billing History
        </h2>
        <div className="bg-[#EDEDED] flex py-2 px-4 rounded-t-lg">
          <p className="font-medium text-xs text-[#36454F] flex-1">DATE</p>
          <p className="font-medium text-xs text-[#36454F] flex-1">DETAILS</p>
          <p className="font-medium text-xs text-[#36454F] flex-1">AMOUNT</p>
          <p className="font-medium text-xs text-[#36454F] flex-1">DOWNLOADS</p>
        </div>
        {billingHistory.map((item, index) => (
          <div key={index} className="flex py-2 px-4 border-b border-[#EDEDED]">
            <p className="text-xs text-[#36454F] flex-1">{item.date}</p>
            <p className="text-xs text-[#36454F] flex-1">{item.details}</p>
            <p className="text-xs text-[#36454F] flex-1">{item.amount}</p>
            <p className="text-xs text-[#36454F] flex-1">{item.downloads}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
