"use client";

/**
 * Features section component.
 * Displays key features of Reli platform.
 *
 * @returns {JSX.Element} The rendered Features section.
 */
export default function Features() {
  return (
    <section className="bg-[#d8dff1] h-[704px] relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Features
            </p>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-neutral-100 border border-[#aec3ff] rounded-[16px] p-[78px] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[102px] items-start">
            {/* Text Content */}
            <div className="flex flex-col gap-[24px] flex-1">
              <div className="flex items-center gap-[8px]">
                <span className="font-inter font-medium text-[24px] leading-[32px] text-center text-primary-blue uppercase">
                  SEARCH
                </span>
              </div>
              <h3 className="font-inter font-semibold text-[18px] leading-[26px] text-[#36454f]">
                Access to All Regulations
              </h3>
              <p className="font-inter font-normal text-[14px] leading-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full lg:w-[408px] h-[226px] rounded-[12px] bg-[#d8dff1] flex items-center justify-center flex-shrink-0">
              <span className="text-gray-500 text-sm">Feature illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
