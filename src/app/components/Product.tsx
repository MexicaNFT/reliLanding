"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

const Product = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="px-4 sm:px-6 md:px-8 py-2 md:py-2 flex flex-col justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full max-w-[1200px] mx-auto">
        <div className="absolute -inset-2 sm:-inset-5 bg-[#1ABC9C]/15 backdrop-blur-md rounded-2xl"></div>
        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#1ABC9C]/20 bg-white z-10">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/product.mp4" type="video/mp4" />
          </video>
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/25 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-opacity duration-200 hover:bg-black/40"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9D9D9]" />
            ) : (
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9D9D9] ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
