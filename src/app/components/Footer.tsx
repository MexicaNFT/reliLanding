"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  const [showReportProblem, setShowReportProblem] = useState(false);

  return (
    <>
      <footer className="bg-[#36454F] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/assets/Reli_logo.png"
                  alt="Reli"
                  width={100}
                  height={40}
                  className="mb-4"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4 lg:mt-16">
                <SocialIcon
                  url="https://www.linkedin.com/company/reli-legaltech/"
                  network="linkedin"
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://twitter.com/Reli_AI"
                  network="twitter"
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://www.instagram.com/reli_on_ai/"
                  network="instagram"
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 40, width: 40 }}
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-lg mb-4 text-[#1ABC9C]">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-policy"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    Data Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/report-problem"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    Report Problem
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 my-8"></div>
        </div>
      </footer>

      {/* Conditionally render ReportProblemForm as a modal */}
      {showReportProblem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
