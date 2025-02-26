import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Plan } from "../subscription/api/getPrices/route";

interface CardProps {
  plan: Plan;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ plan, onClick }) => {
  const { name, description, price, currency, interval, features, id } = plan;
  const isCurrentPlan = id === "free";
  const isRecommended = id === "pro"; // Assuming "pro" is the recommended plan - adjust as needed

  const imagePath = `/assets/two_lawyer.png`;

  const onClickFreePlan = () => {
    // Redirect to the app's dashboard
    window.location.href = "https://app.reli.ai";
  };

  return (
    <div
      className={`flex flex-col h-full rounded-2xl bg-[#F1F5F9] shadow-sm overflow-hidden border ${
        isCurrentPlan ? "border-[#36454F]" : "border-[#00B894]"
      }`}
    >
      {/* Recommended Banner */}
      {isRecommended && (
        <div className="w-full bg-[#00B894] text-white py-0.5 text-center font-medium">
          Recommended
        </div>
      )}

      {/* Header Section */}
      <div className="p-4 bg-[#F1F5F9]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-gray-800 text-lg font-medium">{name}</p>
            <div className="flex flex-row items-baseline">
              <p className="text-2xl font-bold">{currency}</p>
              <p className="text-3xl font-bold">{price}</p>
              <p className="text-gray-600 ml-1">/ {interval}</p>
            </div>
          </div>
          <div className="relative w-24 h-16">
            <Image
              src={imagePath}
              alt={`${name} plan`}
              className="rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div
        className={`h-[1px] ${isCurrentPlan ? "bg-black" : "bg-[#00B894]"}`}
      ></div>

      {/* Features Section */}
      <div className="px-4 py-3 flex-grow bg-[#F1F5F9]">
        <p className="text-gray-600 mb-2">This includes:</p>
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center mb-2">
            <span className="mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill={isCurrentPlan ? "#36454F" : "#00B894"}
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-gray-600 ml-2">{feature}</p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="mt-auto px-4 pb-4">
        {isCurrentPlan ? (
          <div>
            <p className="text-gray-600 text-center mb-2">
              Te encuentras en el plan gratuito
            </p>
            <button
              onClick={onClickFreePlan}
              className="w-full py-2 rounded-full bg-[#36454F]"
            >
              <p className="text-white text-center font-medium">
                Probar Reli.Ai
              </p>
            </button>
          </div>
        ) : (
          <button
            onClick={onClick}
            className="w-full py-2 rounded-full bg-[#00B894]"
          >
            <p className="text-white text-center font-medium">Choose Plan</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
