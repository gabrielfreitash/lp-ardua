import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import VideoShowcase from "./components/sections/VideoShowcase";
import Clients from "./components/sections/Clients";
import Contact from "./components/sections/Contact";
import GrainOverlay from "./components/ui/GrainOverlay";
import ParticleCanvas from "./components/ui/ParticleCanvas";

function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
      <div className="h-px bg-gradient-to-r from-transparent via-ardua-gray/50 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <VideoShowcase />
        <SectionDivider />
        <Clients />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
