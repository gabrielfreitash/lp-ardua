import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useSmoothScroll();

  return (
    <div className="relative grain bg-ink min-h-screen">
      <Loader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
