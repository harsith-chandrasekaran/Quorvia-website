import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Companies from "@/components/Companies";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary selection:bg-secondary selection:text-white">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="companies">
        <Companies />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
