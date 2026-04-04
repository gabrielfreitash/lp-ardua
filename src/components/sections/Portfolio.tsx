import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../data/content";
import { useIsMobile } from "../../hooks/useMediaQuery";
import TextReveal from "../ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalScroll}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        gsap.set(track, {
          x: -totalScroll * self.progress,
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className={`relative ${isMobile ? "py-24 md:py-40 lg:py-48 px-8 md:px-16 lg:px-24" : "h-screen overflow-hidden"}`}
    >
      {/* Header - positioned differently for desktop/mobile */}
      <div
        className={`${
          isMobile
            ? "mb-12"
            : "absolute top-12 left-12 z-10"
        }`}
      >
        <motion.span
          className="text-ardua-muted text-xs uppercase tracking-[0.3em] block mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Portfólio
        </motion.span>

        <TextReveal
          text={content.portfolio.heading}
          as="h2"
          className="text-ardua-pure text-4xl md:text-5xl lg:text-6xl font-bold"
        />
      </div>

      {/* Cards */}
      {isMobile ? (
        /* Mobile: vertical grid */
        <div className="grid grid-cols-1 gap-6">
          {content.portfolio.items.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      ) : (
        /* Desktop: horizontal scroll track */
        <div
          ref={trackRef}
          className="flex items-center gap-8 h-full pl-12 pt-28"
          style={{ width: "fit-content" }}
        >
          {/* Spacer for header */}
          <div className="w-[300px] shrink-0" />

          {content.portfolio.items.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}

          {/* End spacer */}
          <div className="w-[100px] shrink-0" />
        </div>
      )}
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof content.portfolio.items)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group relative w-full md:w-[450px] lg:w-[500px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Gradient background placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}
      />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,0.5)_100%)]" />

      {/* Play icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-16 h-16 rounded-full border-2 border-ardua-pure/60 flex items-center justify-center backdrop-blur-sm bg-white/5">
          <svg
            className="w-6 h-6 text-ardua-pure ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ardua-black/80 to-transparent">
        <span className="text-ardua-muted text-xs uppercase tracking-wider block mb-1">
          {item.category}
        </span>
        <h3 className="text-ardua-pure text-xl font-semibold">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
