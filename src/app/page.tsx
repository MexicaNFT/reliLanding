import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import WhyReli from "./components/WhyReli";

export default function Home() {
  return (
    <>
      <section id="hero" className="mb-36">
        <Hero />
      </section>
      <section id="product" className="mb-36">
        <Product />
      </section>
      <section id="why-reli" className="mb-36">
        <WhyReli />
      </section>
      <section id="seguridad" className="mb-36">
        <Seguridad />
      </section>
    </>
  );
}
