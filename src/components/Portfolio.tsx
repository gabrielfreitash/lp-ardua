import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { siteContent } from "../data/content";

type Item = (typeof siteContent.portfolio.items)[number];

export function Portfolio() {
  const { portfolio } = siteContent;
  const [active, setActive] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<Item | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section
        id="portfolio"
        className="relative py-28 md:py-40 border-b border-bone/10"
      >
        <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust mb-6">
              {portfolio.kicker}
            </div>
            <h2
              className="font-display text-bone leading-[0.9] text-balance"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              Trabalhos <span className="italic">recentes</span>
            </h2>
          </div>
          <div className="font-mono-jb text-[11px] uppercase tracking-widest text-dust">
            {portfolio.note}
          </div>
        </div>

        <ul className="border-t border-bone/10">
          {portfolio.items.map((item, i) => {
            const isActive = active === item.id;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="relative group border-b border-bone/10"
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() =>
                  setActive((prev) => (prev === item.id ? null : prev))
                }
                data-cursor="Assistir"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="block w-full text-left cursor-none"
                >
                  <div className="px-6 md:px-10 py-6 md:py-8 grid grid-cols-12 gap-4 items-center relative">
                    <div
                      className="absolute inset-0 bg-bone origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                      style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)" }}
                    />

                    <div
                      className={`col-span-1 font-mono-jb text-[10px] uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                        isActive ? "text-ink" : "text-dust"
                      }`}
                    >
                      {item.id}
                    </div>
                    <div
                      className={`col-span-11 md:col-span-5 relative z-10 transition-colors duration-500 ${
                        isActive ? "text-ink" : "text-bone"
                      }`}
                    >
                      <div
                        className="font-display leading-none"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                      >
                        {item.client}
                      </div>
                    </div>
                    <div
                      className={`hidden md:block col-span-3 font-mono-jb text-[11px] uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                        isActive ? "text-ink/70" : "text-bone/60"
                      }`}
                    >
                      {item.type}
                    </div>
                    <div
                      className={`hidden md:block col-span-1 font-mono-jb text-[11px] uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                        isActive ? "text-ink/70" : "text-bone/60"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`hidden md:flex col-span-2 items-center justify-end gap-2 font-mono-jb text-[11px] uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                        isActive ? "text-ink" : "text-bone/60"
                      }`}
                    >
                      <Play size={12} fill="currentColor" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Floating YouTube preview */}
                  <div
                    className="pointer-events-none hidden md:block absolute top-1/2 right-[20%] -translate-y-1/2 w-[360px] aspect-video overflow-hidden z-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(-50%) scale(${isActive ? 1 : 0.85}) rotate(${
                        isActive ? 0 : -4
                      }deg)`,
                    }}
                  >
                    {isActive && (
                      <iframe
                        title={`${item.client} preview`}
                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&modestbranding=1&playsinline=1&rel=0`}
                        className="w-full h-full grayscale"
                        allow="autoplay; encrypted-media"
                        frameBorder={0}
                      />
                    )}
                    <div className="absolute inset-0 ring-1 ring-ink/20" />
                  </div>
                </button>
              </motion.li>
            );
          })}
        </ul>

        <div className="px-6 md:px-10 mt-16 flex items-center justify-between font-mono-jb text-[11px] uppercase tracking-widest">
          <span className="text-dust">{portfolio.items.length} projetos exibidos</span>
          <a href="#contato" className="text-bone link-underline" data-cursor="Ver mais">
            Ver arquivo completo →
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-3 font-mono-jb text-[11px] uppercase tracking-widest text-bone hover:text-dust transition-colors"
              aria-label="Fechar"
            >
              <span>Fechar</span>
              <X size={16} />
            </button>

            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-end justify-between mb-4 font-mono-jb text-[10px] uppercase tracking-widest text-dust">
                <div className="flex items-center gap-6">
                  <span className="text-bone">{lightbox.id}</span>
                  <span>{lightbox.type}</span>
                  <span>{lightbox.year}</span>
                </div>
                <span>{lightbox.duration}</span>
              </div>
              <div className="font-display italic text-bone text-3xl md:text-5xl mb-6 leading-none">
                {lightbox.client}
              </div>
              <div className="aspect-video w-full overflow-hidden ring-1 ring-bone/10">
                <iframe
                  title={lightbox.client}
                  src={`https://www.youtube-nocookie.com/embed/${lightbox.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder={0}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
