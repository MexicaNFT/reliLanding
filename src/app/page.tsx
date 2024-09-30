import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Seguridad />
      <Footer />
    </div>
  );
}
