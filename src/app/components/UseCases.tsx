"use client";

import Image from "next/image";

/**
 * Use Cases section component with sticky scroll effect.
 * Shows 3 different use cases for Reli with stacking cards.
 *
 * @returns {JSX.Element} The rendered Use Cases section.
 */
export default function UseCases() {
  const useCases = [
    {
      title: "A common problem",
      description:
        "We know how it is. You juggle your cases, reviewing regulations, rulings, criteria, and everything else you need. And it works, until it doesn't. Information updates every day, tasks pile up, and you lose control.",
      buttonText: "Read case study",
      image: "/assets/aa.png",
      showIcon: true,
    },
    {
      title: "The Alternatives",
      description:
        "ChatGPT and LLMs do not deliver the expected results, with incorrect or incomplete references. Developing an internal system takes months, and other AI systems applied to law do not have the complete Mexican regulations.",
      buttonText: "Read case study",
      image: "/assets/bb.png",
      showIcon: true,
    },
    {
      title: "That's why Reli",
      description:
        "Imagine a platform as simple as WhatsApp, but specifically designed to make your professional practice exponentially more productive, without complications.",
      buttonText: "Read case study",
      showLogo: true,
      showIcon: true,
    },
  ];

  // Card gap for offset calculation when stacking
  const cardGap = 60;

  return (
    <section className="bg-[#d8dff1] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] pb-[42px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-6 md:px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              Use Cases
            </p>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative pb-[180px]">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="sticky pt-[80px]"
              style={{
                top: `${index * cardGap}px`,
                zIndex: index + 1,
              }}
            >
              <div className="bg-neutral-100 border border-[#aec3ff] rounded-[16px] overflow-hidden max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[102px] items-center p-6 md:p-[48px] lg:p-[56px]">
                  {/* Image/Logo Section */}
                  <div className="w-full lg:w-[380px] h-[180px] md:h-[220px] rounded-[16px] bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {useCase.showLogo ? (
                      <div className="font-poppins font-semibold text-5xl md:text-[72px] text-primary-blue tracking-[-0.96px]">
                        Reli
                      </div>
                    ) : useCase.image ? (
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                        <Image
                          src={useCase.image}
                          alt={useCase.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 lg:max-w-[510px] py-2">
                    <h3 className="font-inter font-semibold text-2xl md:text-[32px] leading-tight md:leading-[42px] text-[#36454f]">
                      {useCase.title}
                    </h3>
                    <p className="font-inter font-normal text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-[#36454f] mt-3 md:mt-[12px]">
                      {useCase.description}
                    </p>
                    <div className="mt-6 md:mt-[32px]">
                      <button className="bg-white shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue hover:bg-gray-50 transition-colors flex items-center gap-2 h-[48px]">
                        {useCase.showIcon && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-blue"
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
                        )}
                        {useCase.buttonText}
                      </button>
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
