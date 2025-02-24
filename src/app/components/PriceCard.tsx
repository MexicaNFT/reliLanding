import React from "react";
import Image from "next/image";

interface PriceCardProps {
  planName: string;
  price: string;
  features: string[];
  isCurrentPlan: boolean;
  isRecommended?: boolean;
  imagePath: string;
  onSelectPlan?: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  planName,
  price,
  features,
  isCurrentPlan,
  isRecommended = false,
  imagePath,
  onSelectPlan,
}) => {
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
            <p className="text-gray-800 text-lg font-medium">{planName}</p>
            <div className="flex flex-row items-baseline">
              <p className="text-2xl font-bold">$</p>
              <p className="text-3xl font-bold">{price}</p>
              <p className="text-gray-600 ml-1">MXN</p>
            </div>
          </div>
          <div className="relative w-24 h-16">
            <Image
              src={imagePath}
              alt="Plan image"
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

      {/* Button Section - Now at the bottom */}
      <div className="mt-auto px-4 pb-4">
        <button
          onClick={onSelectPlan}
          className={`w-full py-2 rounded-full ${
            isCurrentPlan ? "bg-[#36454F]" : "bg-[#00B894]"
          }`}
        >
          <p className="text-white text-center font-medium">
            {isCurrentPlan ? "Current Plan" : "Upgrade"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
