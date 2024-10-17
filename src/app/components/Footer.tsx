import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Logo from "../assets/Reli_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#36454F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={Logo}
                alt="Reli"
                width={100}
                height={40}
                className="mb-4"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4 lg:mt-16">
              <SocialIcon
                url="https://www.linkedin.com/company/reliai/"
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
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 my-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
