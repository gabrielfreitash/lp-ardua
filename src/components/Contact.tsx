import { motion } from "motion/react";
import { siteContent } from "../data/content";

export function Contact() {
  const { contact } = siteContent;
  return (
    <section
      id="contato"
      className="relative px-6 md:px-10 py-28 md:py-40 overflow-hidden border-b border-bone/10"
    >
      <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-10 md:mb-16">
        {contact.kicker}
      </div>

      <h2 className="font-display text-bone leading-[0.85] mb-16 md:mb-24">
        {contact.title.map((w, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 1.1,
                delay: i * 0.12,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`inline-block ${i === 1 ? "italic pl-[8vw]" : i === 2 ? "pl-[16vw]" : ""}`}
              style={{ fontSize: "clamp(3.5rem, 16vw, 20rem)" }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 border-t border-bone/10 pt-10">
        <div className="md:col-span-4">
          <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-3">
            [ E-mail ]
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="font-display text-bone text-2xl md:text-3xl link-underline"
            data-cursor="Copiar"
          >
            {contact.email}
          </a>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-3">
            [ Telefone ]
          </div>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="font-display text-bone text-2xl md:text-3xl link-underline"
          >
            {contact.phone}
          </a>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-3">
            [ Estúdio ]
          </div>
          {contact.address.map((line, i) => (
            <div key={i} className="font-display text-bone text-2xl md:text-3xl leading-tight">
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24 flex justify-end">
        <a
          href={`mailto:${contact.email}`}
          data-cursor="Enviar"
          className="group inline-flex items-center gap-6 px-8 py-6 md:px-12 md:py-8 border border-bone/30 hover:bg-bone hover:text-ink transition-colors duration-500"
        >
          <span
            className="font-display italic leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {contact.cta}
          </span>
          <span className="font-mono-jb text-xl transition-transform duration-500 group-hover:translate-x-3">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
