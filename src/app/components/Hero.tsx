"use client";
import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

/**
 * Hero section component with welcome message, headline, CTA button, and video preview.
 * Matches the Figma design with gradient background.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
export default function Hero() {
  return (
    <section className="bg-neutral-100 min-h-[1203px] relative pt-[90px] pb-0">
      {/* Background Wave SVG */}
      <div className="absolute top-0 left-0 w-full h-[552px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 552"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V552C1440 552 1200 450 720 450C240 450 0 552 0 552V0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="720"
              y1="0"
              x2="720"
              y2="552"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E8F4FF" />
              <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Welcome Badge */}
        <div className="flex justify-center mt-[140px] mb-[106px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Bienvenido a Reli
            </p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-[996px] mx-auto text-center mb-[64px]">
          <h1 className="font-inter font-semibold text-[36px] leading-[64px] text-gray-900">
            La Solución #1 de Abogados
            <br />
            de Bolsillo en México
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-[114px]">
          <Link href="/subscription">
            <button className="bg-primary-blue rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] leading-[24px] text-neutral-100 hover:bg-opacity-90 transition-colors">
              Prueba Reli
            </button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full h-[587px] rounded-[24px] border-2 border-[#d3d7ea] overflow-hidden bg-black/40">
            {/* Video placeholder with play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Play button */}
                <button className="w-[80px] h-[80px] rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
                  <Play className="w-[32px] h-[32px] text-primary-blue ml-1 fill-current" />
                </button>
              </div>
            </div>
            {/* Inset shadow overlay */}
            <div className="absolute inset-0 shadow-[0px_0px_20px_0px_inset_rgba(0,0,0,0.1)] pointer-events-none rounded-[24px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
