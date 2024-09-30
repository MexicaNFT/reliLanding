import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Logo from "../assets/Reli_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#36454F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <Image
              src={Logo}
              alt="Reli"
              width={100}
              height={40}
              className="mb-4"
            />
            <div className="flex justify-center lg:justify-start space-x-4 mt-4 lg:mt-16">
              <SocialIcon
                url="https://linkedin.com"
                network="linkedin"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://twitter.com"
                network="twitter"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://instagram.com"
                network="instagram"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 text-center lg:text-left">
            {[1, 2, 3].map((columnIndex) => (
              <div key={columnIndex} className="mb-6 lg:mb-0">
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      Data Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      Copyright
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-600 my-8"></div>
        <div className="text-sm text-center lg:text-right">
          <Link
            href="/terms"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
