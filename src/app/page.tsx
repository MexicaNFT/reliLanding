import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import NuestrasHerramientas from "./components/NuestrasHerramientas";

/**
 * The home page of the application.
 * It displays the Hero, Product, NuestrasHerramientas, and Seguridad sections.
 *
 * @returns {JSX.Element} The rendered home page.
 */
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
