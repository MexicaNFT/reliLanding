import React from "react";

interface AIToolCardProps {
  title: string;
  description: string;
}

export default function AIToolCard({ title, description }: AIToolCardProps) {
  return (
    <div className="w-full max-w-sm min-h-[280px] flex flex-col items-center p-6 rounded-lg bg-[#F9FAFC] border border-[#DEDEDE] shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h3 className="font-poppins text-xl sm:text-2xl font-semibold leading-tight text-center text-primary-green mb-6">
        {title}
      </h3>
      <p className="font-poppins text-sm sm:text-base font-medium leading-relaxed text-center text-[#36454F] flex-grow overflow-hidden">
        {description}
      </p>
    </div>
  );
}
