import { motion } from "motion/react";
import { content } from "../../data/content";
import TextReveal from "../ui/TextReveal";

export default function Clients() {
  // Double the logos for seamless infinite marquee
  const marqueeLogos = [...content.clients.logos, ...content.clients.logos];

  return (
    <section
      id="clientes"
      className="relative py-16 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto mb-20">
        <motion.span
          className="text-ardua-muted text-xs uppercase tracking-[0.3em] block mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Clientes
        </motion.span>

        <TextReveal
          text={content.clients.heading}
          as="h2"
          className="text-ardua-pure text-4xl md:text-5xl lg:text-6xl font-bold"
        />
      </div>

      {/* Infinite marquee */}
      <div className="relative mb-24">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ardua-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ardua-black to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <span className="text-ardua-muted/40 text-2xl md:text-3xl font-bold tracking-widest whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
        <motion.blockquote
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Large quote mark */}
          <span className="text-ardua-gray text-[120px] md:text-[180px] font-serif leading-none absolute -top-12 -left-4 select-none">
            &ldquo;
          </span>

          <p className="text-ardua-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed relative z-10 pl-4 md:pl-8">
            {content.clients.testimonial.quote}
          </p>

          <footer className="mt-8 pl-4 md:pl-8">
            <span className="text-ardua-pure font-semibold block">
              {content.clients.testimonial.author}
            </span>
            <span className="text-ardua-muted text-sm">
              {content.clients.testimonial.role},{" "}
              {content.clients.testimonial.company}
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
