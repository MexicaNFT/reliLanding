"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Reli_logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Image
          src={Logo}
          alt="Reli"
          width={100}
          height={40}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="md:hidden flex items-center">
        <button className="mr-2 bg-[#34C1A6] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:space-x-8 md:w-auto md:shadow-none md:bg-transparent z-10 flex-col items-center md:flex-row`}
      >
        <button
          onClick={() => handleScroll("product")}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Product
        </button>
        <button
          onClick={() => handleScroll("nuestrasHerramientas")}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Nuestras Herramientas
        </button>
        <button
          onClick={() => handleScroll("security")}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Seguridad
        </button>
        <button
          onClick={() => handleScroll("plan")}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Plan
        </button>
      </nav>

      <div className="hidden md:block">
        <button className="bg-[#34C1A6] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
}
