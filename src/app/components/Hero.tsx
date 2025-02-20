"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { handleSigninClick } from "../helpers/handle-sign-in";
import WelcomeBanner from "../components/WelcomeBanner";

export default function Hero({
  onTransitionComplete,
}: {
  onTransitionComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate the viewport diagonal for maximum scale
  const viewportDiagonal = Math.sqrt(
    Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
  );
  const maxScale = viewportDiagonal / 20; // Assuming circle starts at 20px

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, maxScale]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  useEffect(() => {
    const updateCirclePosition = () => {
      if (containerRef.current) {
        const welcomeBanner =
          containerRef.current.querySelector(".welcome-banner");
        if (welcomeBanner) {
          const rect = welcomeBanner.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          setCirclePosition({ x: centerX, y: centerY });
        }
      }
    };

    updateCirclePosition();
    window.addEventListener("resize", updateCirclePosition);
    return () => window.removeEventListener("resize", updateCirclePosition);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0 && !isAnimating) {
        setIsAnimating(true);
        document.body.style.overflow = "hidden";
      }
      if (latest >= 0.5) {
        document.body.style.overflow = "";
        onTransitionComplete();
      }
    });

    return () => {
      unsubscribe();
      document.body.style.overflow = "";
    };
  }, [scrollYProgress, isAnimating, onTransitionComplete]);

  return (
    <section
      ref={containerRef}
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#DCF5F0] via-60% to-[#1ABC9C]"
    >
      <motion.div
        style={{ opacity }}
        className="container mx-auto flex flex-col items-center justify-center z-10"
      >
        <div className="welcome-banner">
          <WelcomeBanner text="Welcome to Reli" />
        </div>
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight md:leading-tight text-center mb-10 text-[#36454F] max-w-4xl mx-auto">
          La Solución #1 de Abogados <br className="hidden sm:block" />
          de Bolsillo en México
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 my-8">
          <button
            className="w-48 sm:w-auto font-poppins text-xs sm:text-sm font-normal leading-5 sm:leading-6 py-2 sm:px-8 sm:py-3 bg-[#36454F] text-white border border-[#36454F] rounded-full hover:bg-[#000000] transition duration-300 px-8"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
        </div>
      </motion.div>

      <motion.div
        ref={circleRef}
        style={{
          scale,
          position: "fixed",
          left: circlePosition.x,
          top: circlePosition.y,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "white",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
