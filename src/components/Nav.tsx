import { useEffect, useState } from "react";
import { siteContent } from "../data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const updateTime = () => {
      const d = new Date();
      const fmt = d.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      });
      setTime(fmt);
    };
    updateTime();
    const id = setInterval(updateTime, 30000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-ink/60" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-3" data-cursor="Topo">
          <span className="relative inline-block">
            <span className="font-display italic text-bone text-2xl leading-none">árdua</span>
            <span className="absolute -top-1 -right-2 w-1 h-1 rounded-full bg-bone" />
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono-jb text-[11px] uppercase tracking-widest text-bone/80">
          {siteContent.nav.map((item, i) => (
            <li key={item.href}>
              <a href={item.href} className="link-underline hover:text-bone">
                <span className="text-dust mr-1">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 font-mono-jb text-[11px] uppercase tracking-widest text-dust">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bone animate-pulse" />
          <span>São Paulo {time}</span>
        </div>

        <a
          href="#contato"
          className="md:hidden font-mono-jb text-[11px] uppercase tracking-widest text-bone link-underline"
        >
          Contato
        </a>
      </div>
    </nav>
  );
}
