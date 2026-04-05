import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { siteContent } from "../data/content";

export function Hero() {
  const { hero } = siteContent;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const wordVariant = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1.1,
        delay: 1.8 + i * 0.12,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Ambient video layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          src="https://cdn.coverr.co/videos/coverr-a-black-and-white-shot-of-a-man-walking-5244/1080p.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
      </div>

      {/* Top meta bar */}
      <div className="absolute top-24 md:top-28 left-6 md:left-10 right-6 md:right-10 z-10 flex items-start justify-between font-mono-jb text-[10px] md:text-[11px] uppercase tracking-widest text-dust">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="max-w-[240px]"
        >
          <div className="text-bone">[ 00 ]</div>
          <div className="mt-2">{hero.eyeline}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-right max-w-[180px]"
        >
          <div>23° 33′ S</div>
          <div>46° 38′ W</div>
        </motion.div>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex flex-col justify-end min-h-[100svh] px-6 md:px-10 pb-24 md:pb-28">
        <h1 className="font-display text-bone leading-[0.88] tracking-tight">
          {hero.headline.map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="show"
                className={`inline-block ${
                  i === 1 ? "italic pl-[10vw]" : i === 2 ? "pl-[4vw]" : ""
                }`}
                style={{ fontSize: "clamp(3.5rem, 14vw, 18rem)" }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Footer row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="md:col-span-5 md:col-start-6 text-bone/80 text-base md:text-lg text-pretty max-w-md"
          >
            {hero.sub}
          </motion.p>
          <motion.a
            href="#contato"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            data-cursor="Vamos"
            className="md:col-span-3 md:col-start-11 group inline-flex items-center gap-3 font-mono-jb text-[11px] uppercase tracking-widest text-bone border-b border-bone/30 pb-3 hover:border-bone transition-colors"
          >
            <span>{hero.cta}</span>
            <span className="ml-auto transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono-jb text-[10px] uppercase tracking-widest text-dust"
      >
        <span>{hero.scroll}</span>
        <ArrowDown size={12} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
