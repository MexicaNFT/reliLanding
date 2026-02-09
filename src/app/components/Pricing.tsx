"use client";
import { Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/**
 * Pricing section component.
 * Displays pricing plans with toggle for monthly/annual billing.
 *
 * @returns {JSX.Element} The rendered Pricing section.
 */
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: "$0 MXN",
      features: [
        "50 búsquedas en Legal Search",
        "10 conversaciones con documentos (Document Intelligence)",
        "3 notebooks",
        "1 research pack de cortesía",
        "Feed incluido",
        "Sin “documentos relacionados” (paywall)",
      ],
      buttonText: "Empezar gratis",
      microcopy: "Ideal para probar valor real en <5 minutos.",
      buttonHref: "/subscription",
    },
    {
      name: "Basic",
      monthlyPrice: "$349 MXN",
      annualPrice: "$3,499 MXN",
      features: [
        "Búsquedas ilimitadas (fair use)",
        "Feed personalizado + resumen diario por correo",
        "100 conversaciones con documentos",
        "Hasta 10 notebooks",
        "Acceso a research packs básicos",
      ],
      buttonText: "Pasar a Basic",
      microcopy: "Para cuando ya vives aquí: más volumen, menos fricción.",
      buttonHref: "/subscription",
      recommended: true,
    },
  ];

  return (
    <section id="pricing" className="bg-neutral-100 relative min-h-[1029px]">
      {/* Decorative ellipse */}
      <div className="absolute right-0 top-[441px] w-[335px] h-[339px] opacity-10">
        <svg viewBox="0 0 335 339" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="167.5" cy="169.5" rx="167.5" ry="169.5" fill="#E8F4FF" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] relative">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Precios
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-[75px]">
          <div className="bg-white rounded-[100px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] h-[56px] w-[274px] relative flex items-center p-[8px]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`flex-1 h-[40px] rounded-[100px] transition-all ${
                !isAnnual ? "bg-dark text-white" : "text-[#585858]"
              }`}
            >
              <span className="font-inter text-[16px] leading-[24px]">
                Mensual
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex-1 h-[40px] rounded-[100px] transition-all ${
                isAnnual ? "bg-dark text-white" : "text-[#585858]"
              }`}
            >
              <span className="font-inter font-medium text-[16px] leading-[24px]">
                Anual
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] max-w-[900px] mx-auto mb-[40px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[20px] ${
                plan.recommended
                  ? "bg-blue-900 border border-blue-900"
                  : "bg-neutral-100 border-2 border-neutral-200"
              } overflow-hidden relative ${
                plan.recommended ? "lg:-mt-[35px]" : ""
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="bg-white border border-primary-blue h-[36px] flex items-center justify-center rounded-tl-[20px] rounded-tr-[20px]">
                  <p className="font-inter font-medium text-[16px] leading-[22px] text-primary-blue">
                    Recomendado
                  </p>
                </div>
              )}

              <div className="p-[24px]">
                {/* Header */}
                <div
                  className={`border-b ${
                    plan.recommended ? "border-white" : "border-neutral-200"
                  } pb-[24px] mb-[25px]`}
                >
                  <p
                    className={`font-inter font-medium text-[20px] leading-[26px] ${
                      plan.recommended ? "text-white" : "text-[#36454f]"
                    } mb-[38px]`}
                  >
                    {plan.name}
                  </p>
                  <span
                    className={`font-inter font-semibold text-[40px] leading-[normal] ${
                      plan.recommended ? "text-white" : "text-[#36454f]"
                    }`}
                  >
                    {"monthlyPrice" in plan
                      ? isAnnual
                        ? plan.annualPrice
                        : plan.monthlyPrice
                      : plan.price}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-[25px]">
                  <p
                    className={`font-inter font-normal text-[16px] leading-[24px] ${
                      plan.recommended ? "text-white" : "text-[#36454f]"
                    } mb-[16px]`}
                  >
                    Incluye (por mes):
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-[12px]">
                        <div
                          className={`w-[18px] h-[18px] rounded-full ${
                            plan.recommended
                              ? "bg-white"
                              : "bg-[#1abc9c]"
                          } flex items-center justify-center flex-shrink-0 mt-[3px]`}
                        >
                          <Check
                            className={`w-[12px] h-[12px] ${
                              plan.recommended ? "text-primary-blue" : "text-white"
                            }`}
                          />
                        </div>
                        <p
                          className={`font-inter font-medium text-[16px] leading-[24px] ${
                            plan.recommended ? "text-neutral-100" : "text-[#36454f]"
                          }`}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.buttonHref}
                  className="w-full h-[44px] rounded-[6px] font-inter font-medium text-[16px] leading-[24px] transition-colors bg-primary-blue text-white hover:bg-blue-900 flex items-center justify-center"
                >
                  {plan.buttonText}
                </Link>
                <p
                  className={`font-inter font-normal text-[13px] leading-[20px] mt-3 ${
                    plan.recommended ? "text-neutral-100" : "text-[#585858]"
                  }`}
                >
                  {plan.microcopy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
