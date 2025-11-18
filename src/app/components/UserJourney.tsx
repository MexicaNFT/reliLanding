"use client";

/**
 * User Journey section component.
 * Displays a user story/persona.
 *
 * @returns {JSX.Element} The rendered User Journey section.
 */
export default function UserJourney() {
  return (
    <section className="bg-neutral-100 h-[672px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              User Journey
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-[48px] items-start max-w-[1200px] mx-auto">
          {/* User Image */}
          <div className="relative">
            {/* Small decorative image */}
            <div className="w-[190px] h-[112px] bg-gray-200 rounded mb-[55px]" />
            {/* Main user image */}
            <div className="w-[510px] h-[326px] bg-gray-200 rounded-[12px] shadow-[2px_-2px_20px_0px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <span className="text-gray-500 text-sm">User photo</span>
            </div>
          </div>

          {/* User Story Text */}
          <div className="flex flex-col gap-[24px] flex-1 pt-[55px]">
            <h3 className="font-inter font-semibold italic text-[36px] leading-[normal] text-[#36454f]">
              Miguel, 31 years old, Tax Lawyer
            </h3>
            <div className="flex flex-col gap-[24px] font-inter font-normal text-[16px] leading-[24px] text-[#585858]">
              <p>Miguel is a lawyer.</p>
              <p>
                He works at a large firm in Mexico City where much of his job is to stay updated on the current tax regulations applicable to his clients.
              </p>
              <p>
                Today, Miguel only focuses on closing more clients and cases because{" "}
                <span className="font-inter font-semibold italic text-primary-blue">
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
