"use client";
import React from "react";
import { handleSigninClick } from "../helpers/handle-sign-in";
import Link from "next/link";

/**
 * A hero section component that displays a headline, a subheadline, and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
export default function Hero() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4]">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[110px] text-center mb-4 md:mb-6 text-[#36454F] py-4">
          La plataforma de LegalTech más completa de México
        </h1>

        <p className="font-poppins font-medium text-base sm:text-lg md:text-2xl text-[#787878] leading-tight md:leading-[42px] text-center mb-6 md:mb-10 max-w-3xl mx-auto">
          Mejora tus procesos legales usando modelos especializados y a la
          medida para tu empresa
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24 md:mb-40 my-14">
          <Link
            href="/subscription"
            className="w-48  sm:w-auto font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-white text-[#36454F] border border-[#36454F] rounded-full hover:bg-gray-100 transition duration-300 text-center"
          >
            Sign Up
          </Link>
          <button
            className="w-48 sm:w-auto font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-[#34C1A6] text-white border border-[#34C1A6] rounded-full hover:bg-[#2ca089] transition duration-300"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

