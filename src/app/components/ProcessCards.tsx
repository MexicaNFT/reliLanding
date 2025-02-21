import React, { useEffect, useRef, useState } from "react";
import ProcessCard from "./ProcessCard";

interface ProcessCardData {
  step: number;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

interface ProcessCardsProps {
  cards: ProcessCardData[];
}

const ProcessCards: React.FC<ProcessCardsProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.clientHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollProgress =
        (viewportHeight - containerTop) / (containerHeight + viewportHeight);
      const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Map scroll progress to card index
      const newIndex = Math.min(
        Math.floor(normalizedProgress * cards.length),
        cards.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-1/4 h-[60vh] flex items-center justify-center">
        <div className="relative w-full max-w-md">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500 w-full"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                transform: `translateY(${(index - activeIndex) * 20}px) scale(${
                  index <= activeIndex ? 1 : 0.95
                })`,
                zIndex: cards.length - index,
                pointerEvents: index === activeIndex ? "auto" : "none",
              }}
            >
              <ProcessCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCards;
