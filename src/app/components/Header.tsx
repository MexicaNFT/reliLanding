"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Reli_logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Image src={Logo} alt="Reli" width={100} height={40} />
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <button className="ml-4 bg-primary-green text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:space-x-8 md:w-auto md:shadow-none md:bg-transparent z-10`}
      >
        <Link
          href="/products"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Product
        </Link>
        <Link
          href="/security"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Security
        </Link>
        <Link
          href="/company"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Company
        </Link>
        <Link
          href="/blog"
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 md:inline-block"
        >
          Blog
        </Link>
      </nav>

      <div className="hidden md:block">
        <button className="bg-primary-green text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
