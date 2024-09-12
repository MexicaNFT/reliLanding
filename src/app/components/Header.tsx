import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Reli_logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src={Logo} alt="Reli" width={100} height={40} />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/products" className="text-gray-600 hover:text-gray-900">
          Product
        </Link>
        <Link href="/security" className="text-gray-600 hover:text-gray-900">
          Security
        </Link>
        <Link href="/company" className="text-gray-600 hover:text-gray-900">
          Company
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-900">
          Blog
        </Link>
      </nav>

      {/* Sign In Button */}
      <div>
        <button className="bg-primary-green text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
