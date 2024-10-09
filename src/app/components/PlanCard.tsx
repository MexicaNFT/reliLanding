import React from "react";
import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
}

interface CardProps {
  name: string;
  description: string;
  price: number | string;
  features: PlanFeature[];
  isCurrentPlan: boolean;
  planType: "Basic" | "Professional" | "Enterprise";
  isMonthly: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  price,
  features,
  isCurrentPlan,
  planType,
  isMonthly,
}) => {
  const getButtonStyles = () => {
    switch (planType) {
      case "Basic":
        return "bg-gray-200 text-gray-400 cursor-not-allowed";
      case "Professional":
        return "border-2 border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C] hover:text-white";
      case "Enterprise":
        return "bg-[#1ABC9C] text-white hover:bg-[#16A085]";
      default:
        return "";
    }
  };

  const getButtonText = () => {
    switch (planType) {
      case "Basic":
        return "Currently Selected";
      case "Professional":
        return "Upgrade";
      case "Enterprise":
        return "Talk to us";
      default:
        return "";
    }
  };

  const renderPrice = () => {
    if (typeof price === "number") {
      return (
        <>
          ${price}
          <span className="text-sm font-normal text-[#787878]">
            {price === 0 ? " Free" : isMonthly ? "/month" : "/year"}
          </span>
        </>
      );
    }
    return price;
  };

  return (
    <div className="bg-white p-6 h-auto min-h-[448px] w-full max-w-[423px] rounded-2xl flex flex-col shadow-sm transition-shadow duration-200 hover:shadow-md border border-[#E6E6E6]">
      <h3 className="text-2xl font-bold mb-2 text-[#36454F]">{name}</h3>
      <p className="text-[#787878] mb-4">{description}</p>
      <div className="text-3xl font-bold mb-6 text-[#36454F]">
        {renderPrice()}
      </div>
      <div className="flex-grow">
        <p className="font-semibold mb-2 text-[#36454F]">This includes:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#36454F]">
              <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full py-2 rounded-xl mt-6 font-medium transition-colors duration-200 ${getButtonStyles()}`}
        disabled={planType === "Basic"}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default Card;
