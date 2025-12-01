"use client";
import { Shield, ShieldCheck, Lock } from "lucide-react";

/**
 * Security section component.
 * Displays security certifications and standards.
 *
 * @returns {JSX.Element} The rendered security section.
 */
export default function Seguridad() {
  const certifications = [
    {
      title: "NOM 151",
      icon: "award",
    },
    {
      title: "SOC-2",
      icon: "shield",
    },
    {
      title: "ISO-27000",
      icon: "lock",
    },
  ];

  // Custom icons to match Figma design
  const AwardIcon = () => (
    <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 70C62.6731 70 77 55.6731 77 38C77 20.3269 62.6731 6 45 6C27.3269 6 13 20.3269 13 38C13 55.6731 27.3269 70 45 70Z" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 65V104L45 94L60 104V65" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45 28L49 36H58L51 42L54 51L45 45L36 51L39 42L32 36H41L45 28Z" stroke="#3758F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 91.6667C50 91.6667 83.3333 75 83.3333 50V20.8333L50 8.33334L16.6667 20.8333V50C16.6667 75 50 91.6667 50 91.6667Z" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 50L45 60L65 40" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LockIcon = () => (
    <svg width="80" height="94" viewBox="0 0 80 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="38" width="64" height="48" rx="8" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 38V26C20 14.954 28.954 6 40 6C51.046 6 60 14.954 60 26V38" stroke="#3758F9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="40" cy="58" r="6" stroke="#3758F9" strokeWidth="3"/>
      <path d="M40 64V72" stroke="#3758F9" strokeWidth="3" strokeLinecap="round"/>
      <path d="M58 12L66 4M66 4L74 12M66 4V24" stroke="#3758F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const icons = [AwardIcon, ShieldIcon, LockIcon];

  return (
    <section className="bg-[#d8dff1] py-16 lg:py-[120px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-8 lg:mb-[64px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Seguridad
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-xl sm:text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f] text-center mb-10 lg:mb-[80px] max-w-[1200px] mx-auto">
          Construida pensada desde la seguridad. Cuidamos tus datos con los más
          altos estándares y protocolos de seguridad
        </h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 justify-center items-center max-w-[894px] mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="bg-white border border-[#d3d7ea] rounded-[16px] w-full h-[220px] sm:h-[240px] lg:h-[268px] p-2 lg:p-[10px]"
              >
                {/* Inner card with gradient */}
                <div className="relative w-full h-full rounded-[12px] lg:rounded-[16px] bg-gradient-to-b from-[#f5f5f5] to-[#e8f5f1] flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center mb-3 lg:mb-4">
                    <div className="scale-75 sm:scale-90 lg:scale-100">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Title */}
                  <p className="font-inter font-extrabold text-lg sm:text-xl lg:text-[24px] leading-[32px] text-[#36454f] text-center">
                    {cert.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

