"use client";
import React from "react";
import { handleSigninClick } from "../helpers/handle-sign-in";
import WelcomeBanner from "../components/WelcomeBanner";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#DCF5F0] via-60% to-[#1ABC9C] py-16 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <WelcomeBanner text="Welcome to Reli" />
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-tight text-center mb-10 text-[#36454F] max-w-4xl mx-auto">
          La Solución #1 de Abogados <br className="hidden sm:block" />
          de Bolsillo en México
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 my-8">
          <button
            className="w-48 sm:w-auto font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 py-2 sm:px-8 sm:py-3 bg-[#36454F] text-white border border-[#36454F] rounded-full hover:bg-[#000000] transition duration-300 px-8"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}
