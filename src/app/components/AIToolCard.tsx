import React from "react";

interface AIToolCardProps {
  title: string;
  description: string;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ title, description }) => {
  return (
    <div className="min-w-[300px] max-w-[280px] h-[320px] flex flex-col items-center p-6 rounded-[10px] bg-[#F9FAFC] border border-[#DEDEDE] shadow-[0px_4px_10px_0px_#0000001A] mr-6">
      <h3 className="font-poppins text-[24px] font-semibold leading-[36px] text-center text-primary-green mb-4">
        {title}
      </h3>
      <p className="font-poppins text-[16px] font-semibold leading-[24px] text-center text-[#36454F] overflow-hidden">
        {description}
      </p>
    </div>
  );
};

export default AIToolCard;
