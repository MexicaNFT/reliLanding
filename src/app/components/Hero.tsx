"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Hero section component with welcome message, headline, CTA button, and video preview.
 * Matches the Figma design with half-circle gradient background.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
export default function Hero() {
  return (
    <>
      {/* Hero Section - First Screen */}
      <section className="bg-neutral-100 min-h-screen relative pt-[78px] flex flex-col overflow-hidden">
        {/* Background Half-Circle */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[120%] max-w-[1600px] h-[80vh] pointer-events-none">
          <Image
            src="/assets/half-circle.png"
            alt=""
            fill
            className="object-contain object-top"
            priority
          />
        </div>

        <div className="relative flex-1 flex flex-col justify-center max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-8 md:mb-[64px]">
            <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-4 md:px-[32px] py-[6px] h-[42px] flex items-center justify-center">
              <p className="font-inter font-semibold text-base md:text-[22px] leading-[30px] text-gray-700 text-center">
                Bienvenido a Reli
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-[996px] mx-auto text-center mb-8 md:mb-[64px]">
            <h1 className="font-inter font-semibold text-2xl md:text-[36px] leading-tight md:leading-[64px] text-gray-900">
              La Solución #1 de Abogados
              <br />
              de Bolsillo en México
            </h1>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="https://app.reli.ai">
              <button className="bg-primary-blue rounded-[6px] px-6 md:px-[28px] py-3 md:py-[13px] font-inter font-medium text-sm md:text-[16px] leading-[24px] text-neutral-100 hover:bg-opacity-90 transition-colors">
                Prueba Reli
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Second Screen */}
      <section className="bg-neutral-100 flex items-center py-8 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-[120px] w-full">
          <div className="relative w-full aspect-video max-h-[587px] rounded-[16px] md:rounded-[24px] border-2 border-[#d3d7ea] overflow-hidden bg-black/40">
            {/* Video placeholder with play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Play button */}
                <button className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
                  <Play className="w-6 h-6 md:w-[32px] md:h-[32px] text-primary-blue ml-1 fill-current" />
                </button>
              </div>
            </div>
            {/* Inset shadow overlay */}
            <div className="absolute inset-0 shadow-[0px_0px_20px_0px_inset_rgba(0,0,0,0.1)] pointer-events-none rounded-[16px] md:rounded-[24px]" />
          </div>
        </div>
      </section>
    </>
  );
}
