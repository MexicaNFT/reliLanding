"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import Logo from "../assets/Reli_logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "plan") {
      router.push("/plan");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
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

    window.addEventListener("scroll", handleScrollVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
        <div className="flex-shrink-0 px-2">
          <Image
            src={Logo}
            alt="Reli"
            width={90}
            height={36}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="md:hidden flex items-center">
          <button className="mr-2 bg-[#34C1A6] text-white px-4 py-1.5 text-sm rounded-full hover:bg-opacity-90 transition-colors">
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
          } absolute top-14 left-0 w-full bg-white shadow-md md:static md:flex md:space-x-8 md:w-auto md:shadow-none md:bg-transparent z-10 flex-col items-center md:flex-row`}
        >
          <button
            onClick={() => handleNavigation("product")}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 md:inline-block"
          >
            Product
          </button>
          <button
            onClick={() => handleNavigation("nuestrasHerramientas")}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 md:inline-block"
          >
            Nuestras Herramientas
          </button>
          <button
            onClick={() => handleNavigation("security")}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 md:inline-block"
          >
            Seguridad
          </button>
          <button
            onClick={() => handleNavigation("plan")}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 md:inline-block"
          >
            Plan
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4 px-2">
          <button className="bg-[#34C1A6] text-white px-4 py-1.5 text-sm rounded-full hover:bg-opacity-90 shadow-md transition-colors">
            Sign In
          </button>
          <button className="bg-white border border-[#E5E7EB] shadow-md text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-100 transition-colors">
            Contact-Us
          </button>
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
