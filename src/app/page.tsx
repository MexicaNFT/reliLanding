import Hero from "./components/Hero";
import WhyReli from "./components/WhyReli";
import UseCases from "./components/UseCases";
import Process from "./components/Process";
import Features from "./components/Features";
import UserJourney from "./components/UserJourney";
import NumbersReli from "./components/NumbersReli";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Seguridad from "./components/Seguridad";

/**
 * The home page of the application.
 * Displays all sections in the order matching the Figma design.
 *
 * @returns {JSX.Element} The rendered home page.
 */
export default function Home() {
  return (
    <main className="bg-neutral-100">
      <Hero />
      <WhyReli />
      <UseCases />
      <Process />
      <Features />
      <UserJourney />
      <NumbersReli />
      <Testimonials />
      <Pricing />
      <Seguridad />
    </main>
  );
}
