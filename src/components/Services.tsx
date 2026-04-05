import { motion } from "motion/react";
import { siteContent } from "../data/content";

export function Services() {
  const { services } = siteContent;
  return (
    <section
      id="servicos"
      className="relative px-6 md:px-10 py-28 md:py-40 border-b border-bone/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
        <div className="md:col-span-3 font-mono-jb text-[10px] uppercase tracking-widest text-dust">
          {services.kicker}
        </div>
        <h2
          className="md:col-span-9 font-display text-bone leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          O que <span className="italic">fazemos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.items.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className="group relative border-t border-bone/10 p-6 md:p-10 md:min-h-[280px] md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-bone/10 overflow-hidden"
          >
            {/* Hover bg */}
            <div className="absolute inset-0 bg-bone/5 scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-10 h-full">
              <div className="font-mono-jb text-[11px] uppercase tracking-widest text-dust mb-4 md:mb-0 md:w-12 md:shrink-0">
                {s.n}
              </div>
              <div className="flex-1">
                <h3
                  className="font-display text-bone leading-none mb-4 md:mb-8 transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                >
                  {s.name}
                </h3>
                <p className="text-bone/70 text-base md:text-lg leading-relaxed text-pretty max-w-md">
                  {s.desc}
                </p>
              </div>
              <div className="hidden md:block font-display italic text-bone/10 text-[6rem] leading-none absolute top-6 right-8 pointer-events-none">
                {s.n}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
