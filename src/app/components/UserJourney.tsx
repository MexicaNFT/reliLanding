"use client";

import Image from "next/image";

/**
 * User Journey section component.
 * Displays a user story/persona.
 *
 * @returns {JSX.Element} The rendered User Journey section.
 */
export default function UserJourney() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section Badge */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-full px-8 py-2">
            <p className="font-inter font-semibold text-lg lg:text-[22px] leading-[30px] text-gray-700 text-center">
              User Journey
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* User Image Container */}
          <div className="relative flex-shrink-0">
            {/* Small decorative TAX image - positioned at top left */}
            <div className="absolute -top-8 -left-4 lg:-top-12 lg:-left-8 z-10">
              <Image
                src="/assets/tax-illustration.png"
                alt="Tax illustration"
                width={190}
                height={112}
                className="w-[120px] h-auto lg:w-[190px]"
              />
            </div>
            {/* Main user image */}
            <div className="relative w-[300px] h-[220px] sm:w-[400px] sm:h-[280px] lg:w-[510px] lg:h-[326px] rounded-xl shadow-[2px_-2px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden bg-white">
              <Image
                src="/assets/miguel-lawyer.png"
                alt="Miguel - Tax Lawyer working on laptop"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* User Story Text */}
          <div className="flex flex-col gap-4 lg:gap-6 flex-1 text-center lg:text-left lg:pt-12">
            <h3 className="font-inter font-semibold italic text-2xl sm:text-3xl lg:text-[36px] leading-tight text-[#36454f]">
              Miguel, 31 years old, Tax Lawyer
            </h3>
            <div className="flex flex-col gap-4 lg:gap-6 font-inter font-normal text-base leading-relaxed text-[#585858]">
              <p>Miguel is a lawyer.</p>
              <p>
                He works at a large firm in Mexico City where much of his job is to stay updated on the current tax regulations applicable to his clients.
              </p>
              <p>
                Today, Miguel only focuses on closing more clients and cases because{" "}
                <span className="font-semibold italic text-[#3b82f6]">
                  Reli AI
                </span>{" "}
                already does the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
