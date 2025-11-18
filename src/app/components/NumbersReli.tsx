"use client";
import { FileText, MessageSquare, RefreshCw, Globe, FileCheck, Scale } from "lucide-react";

/**
 * Numbers Reli section component.
 * Displays statistics and metrics about Reli platform.
 *
 * @returns {JSX.Element} The rendered Numbers Reli section.
 */
export default function NumbersReli() {
  const stats = [
    {
      icon: FileText,
      text: "Toda la Normativa Federal",
    },
    {
      icon: MessageSquare,
      text: "+20k Consultas Resueltas",
    },
    {
      icon: RefreshCw,
      text: "Actualizado Diario",
    },
    {
      icon: Globe,
      text: "Toda la Normativa Local",
    },
    {
      icon: Scale,
      text: "Todos los Tratados Internacionales",
    },
    {
      icon: FileCheck,
      text: "Todas las Sentencias y Jurisprudencias",
    },
  ];

  return (
    <section className="bg-[#d8dff1] h-[916px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Reli en Números
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative max-w-[996px] mx-auto">
          {/* Background Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[996px] h-[494px] opacity-20">
            <svg viewBox="0 0 996 494" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="498" cy="247" rx="498" ry="247" fill="#E8F4FF" />
            </svg>
          </div>

          {/* Stats Cards in circular arrangement */}
          <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-[24px] pt-[76px]">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-100 border-2 border-[#d3d7ea] rounded-[16px] h-[172px] flex flex-col items-center justify-center p-[24px] gap-[16px]"
                >
                  <div className="w-[40px] h-[40px] text-primary-blue">
                    <Icon className="w-full h-full" />
                  </div>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-[#36454f] text-center">
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tagline */}
          <div className="text-center mt-[48px]">
            <p className="font-inter text-[36px] leading-[normal] italic">
              <span className="font-semibold text-primary-blue">Reli :</span>{" "}
              <span className="font-medium text-[#36454f]">
                Tu Guía en el Entramado Jurídico Mexicano
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
