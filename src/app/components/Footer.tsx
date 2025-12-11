"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

/**
 * Footer component matching the Figma design.
 * Features header with logo and newsletter, and footer links organized in columns.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  // Footer link columns data
  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Our Products",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
    {
      title: "Apps",
      links: [
        { label: "Reli for Android", href: "#" },
        { label: "Reli for iOS", href: "#" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { label: "Reli for Android", href: "#" },
        { label: "Reli for iOS", href: "#" },
      ],
    },
    {
      title: "Privacy Terms",
      links: [
        { label: "Política de Privacidad", href: "/privacy-policy" },
        { label: "Política de Datos", href: "/data-policy" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/reli_on_ai/" },
        { label: "Twitter", href: "https://twitter.com/Reli_AI" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/reli-legaltech/" },
      ],
    },
  ];

  return (
    <footer className="relative w-full">
      {/* Top Section - Light Gray Background */}
      <div className="bg-[#f9fafb] w-full">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/ReliLogo.svg"
                alt="Reli logo"
                width={78}
                height={78}
                className="w-[78px] h-[78px]"
              />
              <span className="font-poppins font-extralight text-[40px] text-[#111827] tracking-[-0.4px]">
                Reli
              </span>
            </div>

            {/* Newsletter Input */}
            <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto">
              <div className="flex items-center bg-[#f3f4f6] border border-[#d2d5da] rounded-[6px] px-6 py-3 gap-12">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter e-mail to subscribe to our Newsletter"
                  className="bg-transparent font-inter font-normal text-[16px] leading-[24px] text-[#374151] placeholder:text-[#374151] focus:outline-none w-full md:w-auto min-w-[280px]"
                />
                <button
                  type="submit"
                  className="text-[#3758F9] hover:text-[#3758F9]/80 transition-colors shrink-0"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Background */}
      <div className="bg-[#111827] w-full">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-16">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-5">
                <h3 className="font-inter font-bold text-[18px] leading-normal text-white">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-inter font-normal text-[16px] leading-normal text-[#f1f4f4] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
