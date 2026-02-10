"use client";
import { FileText, MessageSquare, RefreshCw, MapPin, Globe, FileCheck } from "lucide-react";

/**
 * Numbers Reli section component.
 * Displays statistics and metrics about Reli platform in a circular arrangement.
 *
 * @returns {JSX.Element} The rendered Numbers Reli section.
 */
export default function NumbersReli() {
  const stats = [
    {
      icon: RefreshCw,
      text: "Actualizado Diario",
      desktop: { left: "32.7%", top: "15.2%" }, // upper-left along arc
    },
    {
      icon: MapPin,
      text: "Toda la Normativa Local",
      desktop: { left: "67.3%", top: "15.2%" }, // upper-right along arc
    },
    {
      icon: MessageSquare,
      text: "+20k Consultas Resueltas",
      desktop: { left: "14.4%", top: "42%" }, // mid-left arc
    },
    {
      icon: Globe,
      text: "Todos los Tratados Internacionales",
      desktop: { left: "85.6%", top: "42%" }, // mid-right arc
    },
    {
      icon: FileText,
      text: "Toda la Normativa Federal",
      desktop: { left: "8.9%", top: "75%" }, // left endpoint of arc
    },
    {
      icon: FileCheck,
      text: "Todas las Sentencias y Jurisprudencias",
      desktop: { left: "91.1%", top: "75%" }, // right endpoint of arc
    },
  ];

  return (
    <section className="bg-[#d8dff1] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section Badge */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="bg-neutral-100 border border-neutral-200 rounded-full px-8 py-2">
            <p className="font-inter font-semibold text-lg lg:text-[22px] leading-[30px] text-gray-700 text-center">
              Reli en Números
            </p>
          </div>
        </div>

        {/* Desktop: Semi-circle arrangement */}
        <div className="hidden lg:block relative h-[560px] w-full max-w-[900px] mx-auto">
          {/* Background Dashed Arc - smooth curved path connecting cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
          >
            {/* Perfect upper semi-circle (half-circle) using an arc */}
            <path
              d="M 80 420
                 A 370 370 0 0 1 820 420"
              stroke="#b8c5e0"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Cards positioned along the arc */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={stat.desktop}
            >
              <StatCard icon={stat.icon} text={stat.text} />
            </div>
          ))}

          {/* Tagline - Center */}
          <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[540px]">
            <p className="font-inter text-[32px] leading-snug italic">
              <span className="font-semibold text-[#3758f9]">Reli :</span>{" "}
              <span className="font-medium text-[#36454f]">
                Tu Guía en el Entramado Jurídico Mexicano
              </span>
            </p>
          </div>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-100 border-2 border-[#d3d7ea] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]"
                >
                  <div className="w-10 h-10 text-[#3758f9]">
                    <Icon className="w-full h-full" strokeWidth={1.5} />
                  </div>
                  <p className="font-inter font-normal text-sm leading-tight text-[#36454f] text-center">
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-inter text-xl sm:text-2xl leading-tight italic">
              <span className="font-semibold text-[#3758f9]">Reli :</span>{" "}
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

// Stat Card Component - smaller cards for better fit
function StatCard({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; text: string }) {
  return (
    <div className="bg-neutral-100 border-2 border-[#d3d7ea] rounded-xl w-[150px] h-[130px] flex flex-col items-center justify-center gap-3 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]">
      <div className="w-8 h-8 text-[#3758f9]">
        <Icon className="w-full h-full" strokeWidth={1.5} />
      </div>
      <p className="font-inter font-normal text-sm leading-tight text-[#36454f] text-center px-3">
        {text}
      </p>
    </div>
  );
}
