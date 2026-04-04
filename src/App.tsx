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

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <VideoShowcase />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
