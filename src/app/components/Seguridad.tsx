"use client";
import { Shield, Award, Lock } from "lucide-react";

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
      icon: Shield,
    },
    {
      title: "SOC-2",
      icon: Award,
    },
    {
      title: "ISO-27000",
      icon: Lock,
    },
  ];

  return (
    <section className="bg-[#d8dff1] h-[770px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Seguridad
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-[36px] leading-[46px] text-[#36454f] text-center mb-[156px] max-w-[1200px] mx-auto">
          Construida pensada desde la seguridad. Cuidamos tus datos con los más
          altos estándares y protocolos de seguridad
        </h2>

        {/* Certifications Grid */}
        <div className="flex flex-col md:flex-row gap-[24px] justify-center items-center max-w-[894px] mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#d3d7ea] rounded-[16px] w-full md:w-[282px] h-[268px] relative overflow-hidden"
              >
                <div className="absolute inset-[10px]">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-[#c9eae3]/20 via-[#f5f5f5] to-[#f5f5f5]" />

                  {/* Icon Container */}
                  <div className="relative flex flex-col items-center justify-center h-full">
                    <div className="w-[120px] h-[120px] flex items-center justify-center mb-[24px] relative">
                      <Icon className="w-[90px] h-[90px] text-primary-blue" />
                      {/* Star decoration for SOC-2 and ISO-27000 */}
                      {index > 0 && (
                        <div className="absolute -top-2 -right-2 w-[48px] h-[48px]">
                          <svg
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            className="text-primary-blue"
                          >
                            <path d="M24 2l6.12 12.4L44 16.24l-10 9.76 2.36 13.76L24 33.6 11.64 39.76 14 26 4 16.24l13.88-1.84z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <p className="font-inter font-extrabold text-[24px] leading-[32px] text-[#36454f] text-center">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

