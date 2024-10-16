"use client";
import React from "react";
import { handleSigninClick } from "../helpers/handle-sign-in";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4]">
      <div className="container mx-auto px-4 mt-20">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[110px] text-center mb-4 md:mb-6 text-[#36454F] py-4">
          La plataforma de LegalTech más completa de México
        </h1>

        <p className="font-poppins font-medium text-base sm:text-lg md:text-2xl text-[#787878] leading-tight md:leading-[42px] text-center mb-6 md:mb-10 max-w-3xl mx-auto">
          Mejora tus procesos legales usando modelos especializados y a la
          medida para tu empresa
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24 md:mb-40 my-14">
          <Link href={"/contact"}>
            <button className="font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-white text-[#36454F] border border-[#36454F] rounded-full hover:bg-gray-100 transition duration-300">
              Contáctanos
            </button>
          </Link>
          <button
            className="font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-[#34C1A6] text-white border border-[#34C1A6] rounded-full hover:bg-[#2ca089] transition duration-300"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";

// interface TypewriterEffectProps {
//   text: string;
//   typingSpeed?: number;
//   eraseSpeed?: number;
//   delayBeforeErasing?: number;
// }

// const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
//   text,
//   typingSpeed = 100,
//   eraseSpeed = 70,
//   delayBeforeErasing = 3000,
// }) => {
//   const [displayText, setDisplayText] = useState<string>("");
//   const [isTyping, setIsTyping] = useState<boolean>(true);
//   const [isWaiting, setIsWaiting] = useState<boolean>(false);

//   useEffect(() => {
//     if (isTyping && displayText.length < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayText(text.slice(0, displayText.length + 1));
//       }, typingSpeed);
//       return () => clearTimeout(timer);
//     } else if (isTyping && displayText.length === text.length) {
//       setIsWaiting(true);
//       const timer = setTimeout(() => {
//         setIsWaiting(false);
//         setIsTyping(false);
//       }, delayBeforeErasing);
//       return () => clearTimeout(timer);
//     } else if (!isTyping && displayText.length > 0) {
//       const timer = setTimeout(() => {
//         setDisplayText(text.slice(0, displayText.length - 1));
//       }, eraseSpeed);
//       return () => clearTimeout(timer);
//     } else if (!isTyping && displayText.length === 0) {
//       setIsTyping(true);
//     }
//   }, [
//     displayText,
//     isTyping,
//     isWaiting,
//     text,
//     typingSpeed,
//     eraseSpeed,
//     delayBeforeErasing,
//   ]);

//   return (
//     <span className="relative">
//       {displayText}
//       <span
//         className={`absolute ${isWaiting ? "opacity-100" : "animate-blink"}`}
//       >
//         |
//       </span>
//     </span>
//   );
// };

// const Hero: React.FC = () => {
//   return (
//     <section className="py-10 md:py-20 bg-gradient-to-tr from-[#e6f7f4] via-white via-60% to-[#e6f7f4]">
//       <div className="container mx-auto px-4 mt-20">
//         <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-[110px] text-center mb-4 md:mb-6 text-[#36454F] py-4">
//           <TypewriterEffect
//             text="La plataforma de LegalTech más completa de México"
//             typingSpeed={100}
//             eraseSpeed={50}
//             delayBeforeErasing={2000}
//           />
//         </h1>

//         <p className="font-poppins font-medium text-base sm:text-lg md:text-2xl text-[#787878] leading-tight md:leading-[42px] text-center mb-6 md:mb-10 max-w-3xl mx-auto">
//           Mejora tus procesos legales usando modelos especializados y a la
//           medida para tu empresa
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24 md:mb-40 my-14">
//           <button className="font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-white text-[#36454F] border border-[#36454F] rounded-full hover:bg-gray-100 transition duration-300">
//             Contáctanos
//           </button>
//           <button className="font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 px-3 py-2 sm:px-4 sm:py-3 bg-[#34C1A6] text-white border border-[#34C1A6] rounded-full hover:bg-[#2ca089] transition duration-300">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
