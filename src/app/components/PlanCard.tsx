import React from "react";
import { FC } from "react";
import { Check } from "lucide-react";

interface PlanCardProps {
  isSubscribed: boolean;
  name: string;
  price: number;
  duration: string;
  onUpgrade?: () => void;
  onCancel?: () => void;
}

const PlanCard: FC<PlanCardProps> = ({
  isSubscribed,
  name,
  price,
  duration,
  onUpgrade,
  onCancel,
}) => {
  return (
    <div
      className={`w-[340px] h-[140px] rounded-lg ${
        isSubscribed ? "border-2 border-[#1ABC9C] bg-white" : "bg-[#269BF7]"
      } p-4 relative`}
    >
      {isSubscribed && (
        <div className="absolute w-[30px] h-[30px] -top-[15px] -right-[15px] rounded-full bg-[#1ABC9C] flex items-center justify-center z-10">
          <Check className="text-white" size={20} />
        </div>
      )}
      <div className="flex justify-between items-start">
        <div>
          <p
            className={`font-semibold text-base leading-6 ${
              isSubscribed ? "text-[#36454F]" : "text-white"
            }`}
          >
            {name}
          </p>
          <p
            className={`text-xs leading-[15px] ${
              isSubscribed ? "text-[#787878]" : "text-white"
            } mt-1`}
          >
            {duration} remaining
          </p>
        </div>
        <div>
          <p
            className={`font-bold text-lg leading-[27px] ${
              isSubscribed ? "text-[#36454F]" : "text-white"
            }`}
          >
            ${price}
            <span
              className={`font-medium text-base leading-6 ${
                isSubscribed ? "text-[#A3A3A3]" : "text-white opacity-80"
              }`}
            >
              /month
            </span>
          </p>
        </div>
      </div>

      {isSubscribed ? (
        <button onClick={onCancel} className="mt-8">
          <p className="text-xs leading-[15px] text-[#6977F0]">
            Cancel Subscription
          </p>
        </button>
      ) : (
        <div className="flex items-center justify-between mt-8">
          <button onClick={onUpgrade} className="bg-white rounded-lg py-2 px-4">
            <p className="font-semibold text-sm text-[#269BF7] text-center">
              Upgrade
            </p>
          </button>
          <p className="text-xs leading-[15px] text-white">
            Learn more about this plan
          </p>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
