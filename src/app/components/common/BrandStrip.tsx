"use client";
import React, { useEffect, useRef } from "react";
import {
  siNike,
  siPuma,
  siCocacola,
  siAdidas,
  siSpotify,
} from "simple-icons/icons";

const BrandStrip: React.FC = () => {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (strip) {
      let position = 0;
      const animate = () => {
        position -= 1;
        if (position <= -strip.offsetWidth / 2) {
          position = 0;
        }
        strip.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, []);

  const icons = [siNike, siPuma, siCocacola, siAdidas, siSpotify];

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="overflow-hidden py-8">
        <p className="text-center font-poppins m-2 text-[#36454F] mb-4">
          Reli trabaja con MyPimes y los mejores Despachos de Abogados
          Mexicanos.
        </p>
        <div
          ref={stripRef}
          className="flex whitespace-nowrap shadow-[0px_4px_10px_0px_#0000001A] rounded-lg p-3"
          style={{ minWidth: "200%" }}
        >
          {icons.concat(icons).map((icon, index) => (
            <div key={index} className="inline-block mx-4 md:mx-8">
              <svg
                width="60"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black md:w-[100px] md:h-[50px]"
              >
                <path d={icon.path} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;
