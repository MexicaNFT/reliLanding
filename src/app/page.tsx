import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Seguridad from "./components/Seguridad";
import Product from "./components/Product";
import NuestrasHerramientas from "./components/NuestrasHerramientas";
//import Plan from "./components/Plan"; // Assuming you have a Plan section

export default function Home() {
  return (
    <div>
      <Header />
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

      {/* Plan section with corresponding ID
      <section id="plan">
        <Plan />
      </section> */}

      <Footer />
    </div>
  );
}
