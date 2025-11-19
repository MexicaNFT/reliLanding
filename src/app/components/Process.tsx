"use client";

/**
 * Process section component showing "How Reli AI Works" in 3 steps.
 * Features sticky scroll effect with reversed layout.
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
    },
    {
      number: "Step 2",
      title: "We build your model in less than a week.",
      description:
        "As part of the process, we help you upload the data and documents you already have so you don't start from scratch.",
      buttonText: "Schedule your call",
    },
    {
      number: "Step 3",
      title: "We support you every step of the way",
      description:
        "We're always just a message away to help you. We understand that law evolves and technology should evolve with it.",
      buttonText: "Schedule your call",
    },
  ];

  return (
    <section id="how-it-works" className="bg-neutral-100 relative min-h-[2746px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[106px]">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              The Process
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-inter font-normal text-[36px] leading-[46px] text-[#36454f] text-center mb-[120px]">
          How Reli AI Works
        </h2>

        {/* Sticky Steps Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky top-0 pt-[120px] pb-0"
              style={{ zIndex: index + 1 }}
            >
              <div className="bg-white border-[2.5px] border-[#1abc9c] rounded-[16px] max-w-[1200px] mx-auto overflow-hidden shadow-lg">
                <div className="p-[24px]">
                  {/* Step Header */}
                  <div className="flex justify-end mb-[24px]">
                    <p className="font-inter font-semibold italic text-[36px] leading-[54px] text-[#36454f]">
                      {step.number}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[2px] bg-[#1abc9c] mb-[56px]" />

                  {/* Content Container */}
                  <div className="flex flex-col lg:flex-row gap-[102px] items-start">
                    {/* Image Placeholder */}
                    <div className="w-full lg:w-[510px] h-[312px] rounded-[12px] bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-sm">
                        Image placeholder
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-[24px] flex-1">
                      <h3 className="font-inter font-semibold text-[24px] leading-[32px] text-[#36454f]">
                        {step.title}
                      </h3>
                      <p className="font-inter font-normal text-[16px] leading-[24px] text-[#787878]">
                        {step.description}
                      </p>
                      <div className="mt-[24px]">
                        <button className="bg-[#13c296] border border-[#13c296] rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-white hover:bg-[#10a67d] transition-colors">
                          {step.buttonText}
                        </button>
                      </div>
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
