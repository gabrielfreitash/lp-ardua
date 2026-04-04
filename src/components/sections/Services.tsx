import { motion } from "motion/react";
import { content } from "../../data/content";
import TextReveal from "../ui/TextReveal";

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-40 md:py-56 lg:py-64 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.span
          className="text-ardua-muted text-xs uppercase tracking-[0.3em] block mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Serviços
        </motion.span>

        <TextReveal
          text={content.services.heading}
          as="h2"
          className="text-ardua-pure text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        />

        <motion.p
          className="text-ardua-muted text-lg md:text-xl max-w-xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {content.services.subtitle}
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.items.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-ardua-gray/50 bg-ardua-dark/50
                         hover:border-ardua-muted/30 transition-all duration-500
                         hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <span className="text-3xl block mb-5 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="text-ardua-pure text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-ardua-light text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
