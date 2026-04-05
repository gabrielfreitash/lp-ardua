import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteContent } from "../data/content";

export function About() {
  const { about } = siteContent;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative px-6 md:px-10 py-28 md:py-40 border-b border-bone/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-3">
          <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust sticky top-28">
            {about.kicker}
          </div>
        </div>

        <div className="md:col-span-9">
          <h2
            className="font-display text-bone leading-[0.95] mb-12 md:mb-20 text-balance"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            {about.title.split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`inline-block mr-[0.25em] ${i === 2 ? "italic" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              {about.body.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="text-bone/80 text-base md:text-lg leading-relaxed text-pretty"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [40, -40]),
            }}
            className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 border-t border-bone/10 pt-10"
          >
            {about.stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-3">
                  [ {String(i + 1).padStart(2, "0")} ]
                </div>
                <div
                  className="font-display italic text-bone leading-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                >
                  {s.value}
                </div>
                <div className="font-mono-jb text-[11px] uppercase tracking-widest text-bone/60 mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
