import React from "react";
import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
}

interface CardProps {
  name: string;
  description: string;
  price: number;
  features: PlanFeature[];
  isCurrentPlan: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  price,
  features,
  isCurrentPlan,
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md ${
        isCurrentPlan ? "border-2 border-[#1ABC9C]" : ""
      }`}
    >
      <h3 className="text-xl font-bold mb-2 text-[#36454F]">{name}</h3>
      <p className="text-[#787878] mb-4">{description}</p>
      <div className="text-3xl font-bold mb-4 text-[#36454F]">
        ${price}
        <span className="text-sm font-normal text-[#787878]">
          {price === 0 ? " Free" : "/month"}
        </span>
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-2 text-[#36454F]">This includes:</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2 text-[#36454F]">
              <Check className="text-green-500 mr-2" size={16} />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full py-2 rounded-md ${
          isCurrentPlan
            ? "bg-gray-200 text-gray-800 cursor-not-allowed"
            : "bg-[#1ABC9C] text-white hover:bg-[#1ABC9C]"
        }`}
        disabled={isCurrentPlan}
      >
        {isCurrentPlan ? "Current Plan" : "Upgrade"}
      </button>
    </div>
  );
};

export default Card;
