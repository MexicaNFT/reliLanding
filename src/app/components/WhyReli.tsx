"use client";

/**
 * Why Reli section component.
 * Displays the main value proposition of Reli.
 *
 * @returns {JSX.Element} The rendered Why Reli section.
 */
export default function WhyReli() {
  return (
    <section id="why-reli" className="bg-neutral-100 min-h-screen flex items-center justify-center relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center mb-16 md:mb-[106px]">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-lg md:text-[22px] leading-[30px] text-gray-700 text-center">
              ¿Por qué Reli?
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[996px] mx-auto text-center">
          <p className="font-inter font-normal text-2xl md:text-[36px] leading-tight md:leading-[46px] text-[#36454f]">
            Reli se encarga de las partes tediosas de tu práctica legal para que tú te encargues de lo importante.
          </p>
        </div>
      </div>
    </section>
  );
}
