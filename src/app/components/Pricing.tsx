"use client";
import { Check, Plus } from "lucide-react";
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
      name: "Basic",
      price: "$149",
      currency: "MXN",
      features: [
        "20 daily questions to S.A.U.L.",
        "2+150k legal documents from all fields and levels",
        "2+110 references per consultation",
      ],
      buttonText: "Subscribe",
      buttonStyle: "border border-[#36454f] text-[#36454f]",
    },
    {
      name: "Pro",
      price: "$349",
      currency: "MXN",
      features: [
        "50 daily questions to S.A.U.L.",
        "3 daily consultations to U.L.P.I.A.N.O.",
        "Access to the entire National Legal Order and personalized library",
      ],
      buttonText: "Subscribe",
      buttonStyle: "bg-neutral-100 border border-primary-blue text-primary-blue",
      recommended: true,
      darkMode: true,
    },
    {
      name: "Basic",
      price: "$149",
      currency: "MXN",
      features: [
        "20 daily questions to S.A.U.L.",
        "2+150k legal documents from all fields and levels",
        "2+110 references per consultation",
      ],
      buttonText: "Subscribe",
      buttonStyle: "border border-[#36454f] text-[#36454f]",
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
              Pricing
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
                Monthly
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex-1 h-[40px] rounded-[100px] transition-all ${
                isAnnual ? "bg-dark text-white" : "text-[#585858]"
              }`}
            >
              <span className="font-inter font-medium text-[16px] leading-[24px]">
                Annual
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] max-w-[1200px] mx-auto mb-[40px]">
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
                    Recommended
                  </p>
                </div>
              )}

              <div className="p-[24px]">
                {/* Header */}
                <div
                  className={`border-b ${
                    plan.darkMode ? "border-white" : "border-neutral-200"
                  } pb-[24px] mb-[25px]`}
                >
                  <p
                    className={`font-inter font-medium text-[20px] leading-[26px] ${
                      plan.darkMode ? "text-white" : "text-[#36454f]"
                    } mb-[38px]`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-[8px]">
                    <span
                      className={`font-inter font-semibold text-[40px] leading-[normal] ${
                        plan.darkMode ? "text-white" : "text-[#36454f]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-inter font-semibold text-[12px] leading-[18px] ${
                        plan.darkMode ? "text-white" : "text-[#585858]"
                      } mb-[8px]`}
                    >
                      {plan.currency}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-[25px]">
                  <p
                    className={`font-inter font-normal text-[16px] leading-[24px] ${
                      plan.darkMode ? "text-white" : "text-[#36454f]"
                    } mb-[16px]`}
                  >
                    Includes:
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-[12px]">
                        <div
                          className={`w-[18px] h-[18px] rounded-full ${
                            plan.darkMode
                              ? "bg-white"
                              : "bg-[#1abc9c]"
                          } flex items-center justify-center flex-shrink-0 mt-[3px]`}
                        >
                          <Check
                            className={`w-[12px] h-[12px] ${
                              plan.darkMode ? "text-primary-blue" : "text-white"
                            }`}
                          />
                        </div>
                        <p
                          className={`font-inter font-medium text-[16px] leading-[24px] ${
                            plan.darkMode ? "text-neutral-100" : "text-[#36454f]"
                          }`}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full h-[40px] rounded-[100px] font-inter font-medium text-[16px] leading-[24px] transition-colors ${plan.buttonStyle} hover:opacity-80`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Try Reli AI Button */}
        <div className="flex justify-center">
          <Link href="/subscription">
            <button className="border border-dark rounded-[6px] px-[24px] py-[12px] flex items-center gap-[8px] font-inter font-medium text-[16px] leading-[24px] text-dark hover:bg-gray-50 transition-colors">
              <Plus className="w-[20px] h-[20px]" />
              Try Reli AI for free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
