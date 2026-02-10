"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Top navigation bar component matching the Figma design.
 * Features the Reli logo, navigation links, and Sign Up/Sign In buttons.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-100 h-[78px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-[120px]">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/ReliLogo.svg"
          alt="Reli logo"
          width={48}
          height={48}
          priority
          className="object-contain"
        />
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-gray-700 focus:outline-none"
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[32px]">
        <Link
          href="#use-cases"
          className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors"
        >
          ¿Por qué Reli?
        </Link>
        <Link
          href="#how-it-works"
          className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors"
        >
          ¿Cómo funciona?
        </Link>
        <Link
          href="https://reliai.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors"
        >
          Substack/Blog
        </Link>
        <Link
          href="#pricing"
          className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors"
        >
          Precios
        </Link>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden lg:flex items-center gap-[12px]">
        <Link href="https://app.reli.ai">
          <button className="bg-neutral-100 border border-none shadow-custom rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue hover:bg-gray-50 transition-colors">
            Sign Up
          </button>
        </Link>
        <Link href="https://app.reli.ai">
          <button className="bg-neutral-100 border border-primary-blue rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue hover:bg-gray-50 transition-colors">
            Sign In
          </button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[78px] left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="#use-cases"
              onClick={() => setMenuOpen(false)}
              className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors py-2"
            >
              ¿Por qué Reli?
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors py-2"
            >
              ¿Cómo funciona?
            </Link>
            <Link
              href="https://reliai.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors py-2"
            >
              Substack/Blog
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="font-poppins text-[14px] text-gray-700 hover:text-primary-blue transition-colors py-2"
            >
              Precios
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="https://app.reli.ai">
                <button className="w-full bg-neutral-100 border border-none shadow-custom rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue">
                  Sign Up
                </button>
              </Link>
              <Link href="https://app.reli.ai">
                <button className="w-full bg-neutral-100 border border-primary-blue rounded-[6px] px-[28px] py-[13px] font-inter font-medium text-[16px] text-primary-blue">
                  Sign In
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
