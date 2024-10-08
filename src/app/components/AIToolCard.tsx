import React from "react";
import Image from "next/image";

interface AIToolCardProps {
  title: string;
  description: string;
  imageSrc: any;
}

export default function AIToolCard({
  title,
  description,
  imageSrc,
}: AIToolCardProps) {
  return (
    <div className="w-full max-w-sm min-h-[445px] flex flex-col items-center p-6 rounded-lg bg-[#F9FAFC] border border-[#DEDEDE] shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="w-24 h-24 mb-16 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={96}
          height={96}
          objectFit="contain"
        />
      </div>
      <h3 className="font-poppins text-xl sm:text-2xl font-semibold leading-tight text-center text-primary-green mb-6">
        {title}
      </h3>
      <p className="font-poppins text-sm sm:text-base font-medium leading-relaxed text-center text-[#36454F] flex-grow">
        {description}
      </p>
    </div>
  );
}
