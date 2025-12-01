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
      position: "top-left", // Top center-left
    },
    {
      icon: MapPin,
      text: "Toda la Normativa Local",
      position: "top-right", // Top center-right
    },
    {
      icon: MessageSquare,
      text: "+20k Consultas Resueltas",
      position: "middle-left", // Middle left
    },
    {
      icon: Globe,
      text: "Todos los Tratados Internacionales",
      position: "middle-right", // Middle right
    },
    {
      icon: FileText,
      text: "Toda la Normativa Federal",
      position: "bottom-left", // Bottom left
    },
    {
      icon: FileCheck,
      text: "Todas las Sentencias y Jurisprudencias",
      position: "bottom-right", // Bottom right
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
        <div className="hidden lg:block relative h-[480px] w-full max-w-[800px] mx-auto">
          {/* Background Dashed Arc - smooth curved path connecting cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
          >
            {/* Perfect upper semi-circle (half-circle) using an arc */}
            <path
              d="M 100 380
                 A 300 300 0 0 1 700 380"
              stroke="#b8c5e0"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Card 1: Actualizado Diario - Top Left (11 o'clock) */}
          <div className="absolute left-[calc(50%-100px)] top-0 -translate-x-1/2">
            <StatCard icon={RefreshCw} text="Actualizado Diario" />
          </div>

          {/* Card 2: Toda la Normativa Local - Top Right (1 o'clock) */}
          <div className="absolute left-[calc(50%+100px)] top-0 -translate-x-1/2">
            <StatCard icon={MapPin} text="Toda la Normativa Local" />
          </div>

          {/* Card 3: +20k Consultas Resueltas - Mid Left (9 o'clock) */}
          <div className="absolute left-0 top-[80px]">
            <StatCard icon={MessageSquare} text="+20k Consultas Resueltas" />
          </div>

          {/* Card 4: Todos los Tratados Internacionales - Mid Right (3 o'clock) */}
          <div className="absolute right-0 top-[80px]">
            <StatCard icon={Globe} text="Todos los Tratados Internacionales" />
          </div>

          {/* Card 5: Toda la Normativa Federal - Bottom Left endpoint */}
          <div className="absolute left-[100px] bottom-0">
            <StatCard icon={FileText} text="Toda la Normativa Federal" />
          </div>

          {/* Card 6: Todas las Sentencias y Jurisprudencias - Bottom Right endpoint */}
          <div className="absolute right-[100px] bottom-0">
            <StatCard icon={FileCheck} text="Todas las Sentencias y Jurisprudencias" />
          </div>

          {/* Tagline - Center */}
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[480px]">
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
