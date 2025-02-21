"use client";
import { useState, useRef, useEffect } from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import Card from "../components/Card";

// Define the case study type
export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  buttonText?: string;
  imagePath: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Un Problema Común",
    description:
      "Sabemos cómo es. Haces malabares entre tus casos, revisando la normativa, sentencias, criterios y demás que necesites. Y te funciona, hasta que no. La información se actualiza todos los días, las tareas se te acumulan, y se te escapa el control.",
    buttonText: "Read case study",
    imagePath: "/assets/temp.jpg",
  },
  {
    id: 2,
    title: "Las Alternativas",
    description:
      "ChatGPT y los LLMs no otorgan los resultados esperados, con referencias equivocadas o incompletas. Desarrollar un sistema interno tarda meses en desarrollar, y otros sistemas de IA aplicadas a derecho no tienen la normativa completa mexicana.",
    buttonText: "Read case study",
    imagePath: "/assets/temp.jpg",
  },
  {
    id: 3,
    title: " Por eso Reli",
    description:
      "Imagina una plataforma tan sencilla como WhatsApp, pero diseñada específicamente para hacer que tu práctica profesional sea exponencialmente más productiva, sin complicaciones.",
    buttonText: "Read case study",
    imagePath: "/assets/temp.jpg",
  },
  {
    id: 4,
    title: "¿Qué buscamos?",
    description:
      "Nuestro objetivo es simple: ayudarte a gestionar tu práctica de una manera eficiente, con una plataforma sencilla, personalizada y lista para crecer contigo.",
    buttonText: "Read case study",
    imagePath: "/assets/temp.jpg",
  },
];

export default function UseCase() {
  const [activeCard, setActiveCard] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, caseStudies.length);
  }, []);

  // Intersection observer for each card section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          setActiveCard(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with logo and title */}
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center mb-2 ">
            <WelcomeBanner text="Use Case" />
          </div>
        </div>
      </div>

      {/* Card Container with Dot Indicators */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Dot Indicators */}
          <div className="hidden lg:flex flex-col items-center justify-start mr-12 sticky top-1/3 self-start h-auto">
            {caseStudies.map((study, index) => (
              <div
                key={`indicator-container-${study.id}`}
                className="mb-3 py-1 cursor-pointer"
                onClick={() => {
                  sectionRefs.current[study.id - 1]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <div
                  className={`transition-all duration-300 ${
                    activeCard === study.id
                      ? "w-2 h-10 bg-[#36464F] rounded-full"
                      : "w-1 h-1 bg-gray-300 rounded-full"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div className="flex-1 space-y-32">
            {caseStudies.map((study, index) => {
              const isOdd = (index + 1) % 2 !== 0;
              return (
                <div
                  key={`card-section-${study.id}`}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  data-id={study.id}
                  className="min-h-[70vh] flex items-center justify-center"
                >
                  <Card
                    title={study.title}
                    description={study.description}
                    buttonText={study.buttonText}
                    imagePath={study.imagePath}
                    imageFirst={isOdd}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
