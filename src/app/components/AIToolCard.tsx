import React from "react";

interface AIToolCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

/**
 * A card component that displays an AI tool with its title, description, and an icon.
 *
 * @param {object} props - The props for the component.
 * @param {string} props.title - The title of the AI tool.
 * @param {string} props.description - A brief description of the AI tool.
 * @param {React.ReactElement} props.icon - The icon representing the AI tool.
 * @returns {JSX.Element} The rendered AI tool card.
 */
export default function AIToolCard({
  title,
  description,
  icon,
}: AIToolCardProps) {
  return (
    <div className="w-full max-w-sm min-h-[445px] flex flex-col items-center p-6 rounded-lg bg-[#F9FAFC] border border-[#DEDEDE] shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="w-32 h-32 mb-6 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-primary-green/10 rounded-full blur-xl group-hover:bg-primary-green/20 transition-all duration-300"></div>
        <div className="relative bg-white rounded-full p-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          {React.cloneElement(icon, {
            className:
              "w-16 h-16 text-primary-green transition-all duration-300 group-hover:text-primary-green/80",
          })}
        </div>
      </div>
      <h3 className="font-poppins text-xl sm:text-2xl font-semibold leading-tight text-center text-primary-green mb-4">
        {title}
      </h3>
      <p className="font-poppins text-sm sm:text-base font-medium leading-relaxed text-center text-[#36454F] flex-grow">
        {description}
      </p>
    </div>
  );
}
