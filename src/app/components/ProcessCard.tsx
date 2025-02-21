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
    <div className="rounded-lg border border-[#1ABC9C] overflow-hidden max-w-md">
      {/* Step indicator */}
      <div className="bg-white p-4 border-b border-[#1ABC9C]">
        <p className="text-[#1ABC9C] font-medium">Paso {step}</p>
      </div>

      {/* Card content */}
      <div className="bg-gray-50 p-6">
        <h3 className="text-[#36454F] text-xl font-semibold mb-4">{title}</h3>
        <p className="text-[#787878] mb-6">{description}</p>

        {ctaText && ctaLink && (
          <div>
            <a
              href={ctaLink}
              className="text-[#1ABC9C] flex items-center gap-2 hover:underline"
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
