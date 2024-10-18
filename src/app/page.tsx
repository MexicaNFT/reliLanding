import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import NuestrasHerramientas from "./components/NuestrasHerramientas";

export default function Home() {
  return (
    <>
      <section id="hero" className="mb-36">
        <Hero />
      </section>
      <section id="product" className="mb-36">
        <Product />
      </section>
      <section id="nuestras-herramientas" className="mb-36">
        <NuestrasHerramientas />
      </section>
      <section id="seguridad" className="mb-36">
        <Seguridad />
      </section>
    </>
  );
}
