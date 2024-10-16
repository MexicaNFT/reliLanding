import React from "react";
import { Check } from "lucide-react";
import { Plan } from "../subscription/api/getPrices/route";

const Card = ({ plan, onClick }: { plan: Plan; onClick: () => void }) => {
  const { name, description, price, currency, interval, features } = plan; // Destructure plan fields

  return (
    <div className="bg-white p-6 h-auto min-h-[448px] w-full max-w-[430px] rounded-2xl flex flex-col shadow-sm transition-shadow duration-200 hover:shadow-md border border-[#E6E6E6]">
      <h3 className="text-2xl font-bold mb-2 text-[#36454F]">{name}</h3>
      <p className="text-[#787878] mb-4">{description}</p>
      <div className="text-3xl font-bold mb-6 text-[#36454F]">
        {price} {currency}
        <span className="text-base font-normal text-[#787878]"> / {interval}</span>
      </div>
      <div className="flex-grow">
        <p className="font-semibold mb-2 text-[#36454F]">This includes:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#36454F]">
              <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="w-full py-2 rounded-xl mt-6 font-medium transition-colors duration-200 border-2 border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C] hover:text-white"
        onClick={onClick} // Trigger the click handler passed from the parent
      >
        Choose Plan
      </button>
    </div>
  );
};

export default Card;