"use client";

/**
 * Use Cases section component with sticky scroll effect.
 * Shows 4 different use cases for Reli.
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
      image: "/assets/landing/case1.jpg",
    },
    {
      title: "The Alternatives",
      description:
        "ChatGPT and LLMs do not deliver the expected results, with incorrect or incomplete references. Developing an internal system takes months, and other AI systems applied to law do not have the complete Mexican regulations.",
      buttonText: "Read case study",
      image: "/assets/landing/case2.jpg",
    },
    {
      title: "That's why Reli",
      description:
        "Imagine a platform as simple as WhatsApp, but specifically designed to make your professional practice exponentially more productive, without complications.",
      buttonText: "Read case study",
      showLogo: true,
    },
    {
      title: "What are we looking for?",
      description:
        "Our goal is simple: to help you manage your practice efficiently, with a simple, personalized platform ready to grow with you.",
      buttonText: "Contact us",
      image: "/assets/landing/case4.jpg",
      showIcon: false,
    },
  ];

  return (
    <section className="bg-[#d8dff1] relative min-h-[2658px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
        {/* Section Badge */}
        <div className="flex justify-center pt-[120px] mb-[42px]">
          <div className="bg-neutral-100 border border-neutral-200 rounded-[100px] px-[32px] py-[6px]">
            <p className="font-inter font-semibold text-[22px] leading-[30px] text-gray-700 text-center">
              Use Cases
            </p>
          </div>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="sticky top-0 pt-[120px] pb-0"
              style={{ zIndex: index + 1 }}
            >
              <div className="bg-neutral-100 border border-[#aec3ff] rounded-[16px] p-[78px] max-w-[1200px] mx-auto shadow-lg">
                <div className="flex flex-col lg:flex-row gap-[102px] items-start">
                  {/* Image/Logo Section */}
                  <div className="w-full lg:w-[432px] h-[270px] rounded-[16px] bg-white flex items-center justify-center flex-shrink-0">
                    {useCase.showLogo ? (
                      <div className="font-poppins font-semibold text-[96px] text-primary-blue tracking-[-0.96px]">
                        Reli
                      </div>
                    ) : useCase.image ? (
                      <div className="w-full h-full rounded-[16px] bg-gray-200 flex items-center justify-center text-gray-500">
                        <span className="text-sm">Image placeholder</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-[16px] flex-1">
                    <h3 className="font-inter font-semibold text-[36px] leading-[46px] text-[#36454f]">
                      {useCase.title}
                    </h3>
                    <p className="font-inter font-normal text-[16px] leading-[24px] text-[#36454f] mt-[16px]">
                      {useCase.description}
                    </p>
                    <div className="mt-[24px]">
                      <button className="bg-white shadow-custom rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue hover:bg-gray-50 transition-colors">
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
