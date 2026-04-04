import { motion } from "motion/react";
import { content } from "../../data/content";
import TextReveal from "../ui/TextReveal";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative px-6 md:px-16 lg:px-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <TextReveal
          text={content.contact.heading}
          as="h2"
          className="text-ardua-pure text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        />

        <motion.p
          className="text-ardua-light text-lg md:text-xl mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {content.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <MagneticButton
            href={`mailto:${content.contact.email}`}
            className="group"
            strength={0.2}
          >
            <span
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-ardua-pure/80 text-ardua-pure text-lg md:text-xl font-medium
                         transition-all duration-500
                         group-hover:bg-ardua-pure group-hover:text-ardua-black
                         group-hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
            >
              {content.contact.cta}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>

        {/* Contact details */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href={`mailto:${content.contact.email}`}
            className="text-ardua-muted text-sm hover:text-ardua-pure transition-colors"
          >
            {content.contact.email}
          </a>
          <span className="hidden md:block text-ardua-gray">|</span>
          <a
            href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
            className="text-ardua-muted text-sm hover:text-ardua-pure transition-colors"
          >
            {content.contact.whatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
