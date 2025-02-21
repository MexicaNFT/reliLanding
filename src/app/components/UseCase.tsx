// UseCase.tsx
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
    title: "Un problema común",
    description:
      "Sabemos cómo es. Haces malabares entre tus casos, revisando la normativa, sentencias, criterios y demás que necesitas. Y te funciona, hasta que no. La información se actualiza todos los días, las tareas se te acumulan, y se te escapa el control.",
    buttonText: "Read case study",
    imagePath: "/assets/Reli_logo.png",
  },
  {
    id: 2,
    title: "Streamlined Workflow",
    description:
      "Our platform centralizes all your regulatory information, case histories, and precedents in one searchable database. Stay up-to-date automatically and focus on what matters most - serving your clients effectively.",
    buttonText: "View solution",
    imagePath: "/assets/Reli_logo.png",
  },
  {
    id: 3,
    title: "Client Success Story",
    description:
      "See how a mid-sized law firm reduced research time by 68% and increased case throughput by 43% within just three months of implementing our solution.",
    buttonText: "Read case study",
    imagePath: "/assets/Reli_logo.png",
  },
  {
    id: 4,
    title: "Industry Recognition",
    description:
      "Our platform has been recognized by legal technology experts for its innovative approach to managing regulatory compliance and case management workflows.",
    buttonText: "See awards",
    imagePath: "/assets/Reli_logo.png",
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
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center mb-2 ">
            <WelcomeBanner text="Use Case" />
          </div>
          <div className="w-24 h-0.5 bg-gray-200 mt-1"></div>
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
                      ? "w-1 h-8 bg-[#36464F] rounded-full"
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
