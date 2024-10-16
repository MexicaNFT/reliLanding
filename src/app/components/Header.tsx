"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import Logo from "../assets/Reli_logo.png";
import { useRouter } from "next/navigation";
import { handleSigninClick } from "../helpers/handle-sign-in";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "plan") {
      router.push("/plan");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    const handleScroll = () => {
      const sections = ["product", "nuestrasHerramientas", "seguridad", "plan"];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-5 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div
          className="flex-shrink-0 px-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={Logo}
            alt="Reli"
            width={90}
            height={36}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="mr-2 bg-[#34C1A6] text-white px-4 py-1.5 text-sm rounded-full hover:bg-opacity-90 transition-colors"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-14 left-0 w-full bg-white shadow-md md:static md:flex md:space-x-4 md:w-auto md:shadow-none md:bg-transparent z-10 flex-col items-center md:flex-row`}
        >
          {["product", "nuestrasHerramientas", "seguridad", "plan"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block relative ${
                  activeSection === section ? "font-semibold" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#34C1A6]"></span>
                )}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-2 px-2">
          <button
            className="bg-[#34C1A6] text-white px-4 py-1.5 text-sm rounded-full hover:bg-opacity-90 shadow-md transition-colors"
            onClick={handleSigninClick}
          >
            Sign In
          </button>
          <Link href={"/contact"}>
            <button className="bg-white border border-[#E5E7EB] shadow-md text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-100 transition-colors">
              Contáctanos
            </button>
          </Link>
        </div>
      </header>

      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#34C1A6] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
