"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import WhyReli from "./components/WhyReli";
import UseCase from "./components/UseCase";
import ProcessPage from "./components/ProcessPage";
import Pricing from "./components/Pricing";
import TestimonialCarousel from "./components/TestimonialPage";
import TestimonialPage from "./components/TestimonialPage";

export default function Home() {
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {!showProduct && (
          <Hero onTransitionComplete={() => setShowProduct(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showProduct ? 1 : 0 }}
        className={`${showProduct ? "relative" : "invisible"}`}
      >
        <section id="product" className="mb-36 pt-20">
          <Product />
        </section>
        <section id="why-reli" className="mb-36">
          <WhyReli />
        </section>
        <section id="use-case" className="mb-36">
          <UseCase />
        </section>
        <section id="seguridad" className="mb-36">
          <Seguridad />
        </section>
        <section id="process" className="mb-36">
          <ProcessPage />
        </section>
        <section id="testimonial-carousel" className="mb-36">
          <TestimonialPage />
        </section>
        <section id="pricing" className="mb-36">
          <Pricing />
        </section>
      </motion.div>

      {/* Spacer for initial scroll trigger */}
      <div className="h-screen" />
    </div>
  );
}
