"use client";

import Image from "next/image";

/**
 * Process section component showing "How Reli AI Works" in 3 steps.
 * Features sticky scroll effect with stacking cards.
 *
 * @returns {JSX.Element} The rendered Process section.
 */
export default function Process() {
  const steps = [
    {
      number: "Step 1",
      title: "Schedule a free call with our team",
      description:
        "Tell us about your business. We want to help you build models that fully adapt to your practice.",
      buttonText: "Schedule your call",
      image: "/assets/aa.png",
      imagePosition: "right",
    },
    {
      number: "Step 2",
      title: "We build your model in less than a week.",
      description:
        "As part of the process, we help you upload the data and documents you already have so you don't start from scratch.",
      buttonText: "Schedule your call",
      image: "/assets/bb.png",
      imagePosition: "left",
    },
    {
      number: "Step 3",
      title: "We support you every step of the way",
      description:
        "We're always just a message away to help you. We understand that law evolves and technology should evolve with it.",
      buttonText: "Schedule your call",
      image: "/assets/cc.png",
      imagePosition: "right",
    },
  ];

  // Peek height so only the header of previous cards stays visible when stacking
  const cardGap = 102;

  return (
    <section id="how-it-works" className="bg-neutral-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[64px]">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              The Process
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f] text-center mb-[64px]">
          How Reli AI Works
        </h2>

        {/* Sticky Steps Container */}
        <div className="relative pb-[150px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky pt-6"
              style={{
                top: `${index * cardGap}px`,
                zIndex: index + 1,
              }}
            >
              <div className="bg-neutral-100 border-[2.5px] border-[#1abc9c] rounded-[16px] max-w-[1200px] mx-auto overflow-hidden">
                {/* Step Header */}
                <div className="px-6 md:px-[56px] pt-4 md:pt-[20px]">
                  <div className="flex justify-end">
                    <p className="font-inter font-semibold italic text-xl md:text-[28px] leading-[40px] text-[#36454f]">
                      {step.number}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-[#1abc9c] mt-3 md:mt-[16px]" />

                {/* Content Container */}
                <div className={`flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-center p-6 md:p-[40px] ${step.imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
                  {/* Text Content */}
                  <div className="flex flex-col flex-1 lg:max-w-[420px]">
                    <h3 className="font-inter font-semibold text-lg md:text-[22px] leading-tight md:leading-[28px] text-[#36454f]">
                      {step.title}
                    </h3>
                    <p className="font-inter font-normal text-sm md:text-[15px] leading-relaxed md:leading-[22px] text-[#787878] mt-2 md:mt-[12px]">
                      {step.description}
                    </p>
                    <div className="mt-5 md:mt-[24px]">
                      <button className="bg-[#13c296] border border-[#13c296] rounded-[6px] px-[24px] py-[10px] font-inter font-medium text-[14px] text-white hover:bg-[#10a67d] transition-colors flex items-center gap-2 h-[42px]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M10 7V13M7 10H13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        {step.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-[380px] h-[160px] md:h-[200px] rounded-[12px] bg-gray-100 flex-shrink-0 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover rounded-[12px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
