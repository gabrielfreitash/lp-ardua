import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../data/content";
import TextReveal from "../ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === line) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="sobre"
      className="relative py-40 md:py-56 lg:py-64 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.span
          className="text-ardua-muted text-xs uppercase tracking-[0.3em] block mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {content.about.heading}
        </motion.span>

        {/* Horizontal rule */}
        <div
          ref={lineRef}
          className="w-full h-[1px] bg-ardua-gray mb-16 origin-left scale-x-0"
        />

        {/* Main text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <TextReveal
              text={content.about.text}
              as="p"
              className="text-ardua-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
              stagger={0.02}
            />
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-col gap-10 md:pt-4">
            {content.about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border-l border-ardua-gray pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <span className="text-ardua-pure text-4xl md:text-5xl font-bold block mb-1">
                  {stat.value}
                </span>
                <span className="text-ardua-muted text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
