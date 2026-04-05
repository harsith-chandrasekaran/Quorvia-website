import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Companies from "@/components/Companies";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary selection:bg-secondary selection:text-white">
      <div id="home">
        {/* We don't wrap Hero with ScrollReveal to avoid delay on load */}
        <Hero />
      </div>
      <div id="about">
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </div>
      <div id="services">
        <ScrollReveal>
          <Services />
        </ScrollReveal>
      </div>
      <div id="companies">
        <ScrollReveal>
          <Companies />
        </ScrollReveal>
      </div>
      <div id="pricing">
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
      </div>
      <div id="team">
        <ScrollReveal>
          <Team />
        </ScrollReveal>
      </div>
      <div id="contact">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
}
