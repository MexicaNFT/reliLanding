"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Send } from "lucide-react";

/**
 * Footer component matching the Figma design.
 * Features company links, newsletter signup, and social media links.
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

  return (
    <footer className="bg-dark text-white overflow-hidden relative h-[473px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-[64px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[48px]">
          {/* Logo */}
          <div>
            <h2 className="font-poppins font-semibold text-[48px] leading-[1.4] text-neutral-100 tracking-[-0.48px]">
              Reli
            </h2>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-inter font-bold text-[18px] leading-[normal] text-white mb-[24px]">
              Company
            </h3>
            <Link
              href="#"
              className="font-inter font-normal text-[16px] leading-[normal] text-neutral-200 hover:text-white transition-colors"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="font-inter font-normal text-[16px] leading-[normal] text-neutral-200 hover:text-white transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/privacy-policy"
              className="font-inter font-normal text-[16px] leading-[normal] text-[#f1f4f4] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/data-policy"
              className="font-inter font-normal text-[16px] leading-[normal] text-[#f1f4f4] hover:text-white transition-colors"
            >
              Data Policy
            </Link>
            <Link
              href="#"
              className="font-inter font-normal text-[16px] leading-[normal] text-[#f1f4f4] hover:text-white transition-colors"
            >
              Terms & condition
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-[10px] w-full lg:w-[282px]">
            <label className="font-inter font-bold text-[16px] leading-[24px] text-white">
              Subscribe to our Newsletter!
            </label>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email address"
                className="w-full bg-white border border-[#dfe4ea] rounded-[6px] px-[20px] py-[12px] pr-[48px] font-inter font-normal text-[16px] leading-[24px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-blue"
              />
              <button
                type="submit"
                className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-primary-blue hover:text-primary-blue/80 transition-colors"
              >
                <Send className="w-[24px] h-[24px]" />
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-[48px] pt-[24px]">
          <p className="font-poppins text-[12px] leading-[normal] text-white mb-[12px]">
            Follow Us
          </p>
          <div className="flex gap-[27px]">
            <Link
              href="https://www.linkedin.com/company/reli-legaltech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-blue transition-colors"
            >
              <Linkedin className="w-[20px] h-[20px]" />
            </Link>
            <Link
              href="https://twitter.com/Reli_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-blue transition-colors"
            >
              <Twitter className="w-[20px] h-[20px]" />
            </Link>
            <Link
              href="https://www.instagram.com/reli_on_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-blue transition-colors"
            >
              <Instagram className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#455b6a] mt-[24px]" />
      </div>
    </footer>
  );
};

export default Footer;
