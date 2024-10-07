import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import NuestrasHerramientas from "./components/NuestrasHerramientas";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="nuestrasHerramientas">
        <NuestrasHerramientas />
      </section>
      <section id="security">
        <Seguridad />
      </section>
    </>
  );
}
