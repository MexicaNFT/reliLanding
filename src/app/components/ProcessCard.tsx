import React from "react";

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  step,
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="rounded-lg border border-[#1ABC9C] overflow-hidden w-full h-auto md:w-[780px] md:h-[450px] shadow-md">
      {/* Step indicator */}
      <div className="bg-white p-4 md:p-6 border-b border-[#1ABC9C]">
        <p className="text-[#1ABC9C] font-medium text-base md:text-lg">
          Paso {step}
        </p>
      </div>

      {/* Card content */}
      <div className="bg-gray-50 p-6 md:p-8 flex flex-col h-[calc(100%-56px)] md:h-[calc(100%-72px)]">
        <h3 className="text-[#36454F] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          {title}
        </h3>
        <p className="text-[#787878] mb-6 md:mb-auto text-base md:text-lg">
          {description}
        </p>

        {ctaText && ctaLink && (
          <div className="mt-auto pt-4">
            <a
              href={ctaLink}
              className="text-[#1ABC9C] flex items-center gap-2 hover:underline text-base md:text-lg"
            >
              {ctaText} <span>→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessCard;
