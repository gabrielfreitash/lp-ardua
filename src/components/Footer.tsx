import { siteContent } from "../data/content";

export function Footer() {
  const { footer, brand } = siteContent;
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 md:px-10 py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-6">
        <div>
          <div className="font-display italic text-bone leading-none" style={{ fontSize: "clamp(5rem, 18vw, 22rem)" }}>
            árdua
          </div>
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono-jb text-[11px] uppercase tracking-widest text-bone/80">
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-underline hover:text-bone" data-cursor="Ir">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <div className="font-mono-jb text-[10px] uppercase tracking-widest text-dust md:text-right">
            {footer.copyright.replace("2026", String(year))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-bone/10 flex flex-col md:flex-row md:justify-between gap-3 font-mono-jb text-[10px] uppercase tracking-widest text-dust">
        <span>{brand.tagline} · {brand.description.split(",")[0]}</span>
        <span>Feito com intenção — São Paulo, Brasil</span>
      </div>
    </footer>
  );
}
