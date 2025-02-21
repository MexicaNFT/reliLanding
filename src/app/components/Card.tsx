// components/Card.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  imagePath: string;
  imageFirst?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText = "Read case study",
  imagePath,
  imageFirst = true,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto">
      {/* Image Container */}
      <div
        className={`w-full lg:w-1/2 ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative bg-gray-100 w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`w-full lg:w-1/2 py-6 lg:py-0 ${
          imageFirst ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <Link href="#">
            <motion.button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#1ABC9C] border border-[#1ABC9C] rounded-full hover:bg-[#1ABC9C] hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
