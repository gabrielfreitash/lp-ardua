import { motion } from "motion/react";
import { siteContent } from "../data/content";

export function Process() {
  const { process } = siteContent;
  return (
    <section
      id="processo"
      className="relative px-6 md:px-10 py-28 md:py-40 border-b border-bone/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
        <div className="md:col-span-3 font-mono-jb text-[10px] uppercase tracking-widest text-dust">
          {process.kicker}
        </div>
        <h2
          className="md:col-span-9 font-display text-bone leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          Como <span className="italic">trabalhamos</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-0 md:left-[33.33%] top-0 bottom-0 w-px bg-bone/10" />

        {process.steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-bone/10 last:border-b-0"
          >
            <div className="md:col-span-4 md:pl-10">
              <div className="font-display italic text-bone/30 text-6xl md:text-8xl leading-none">
                {step.n}
              </div>
            </div>
            <div className="md:col-span-5">
              <h3
                className="font-display text-bone leading-none mb-4"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                {step.name}
              </h3>
              <p className="text-bone/70 text-base md:text-lg text-pretty max-w-md">
                {step.desc}
              </p>
            </div>
            <div className="md:col-span-3 md:text-right font-mono-jb text-[10px] uppercase tracking-widest text-dust">
              Etapa {String(i + 1).padStart(2, "0")} / 04
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
