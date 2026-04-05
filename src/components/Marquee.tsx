import { siteContent } from "../data/content";

export function Marquee() {
  const items = [...siteContent.marquee, ...siteContent.marquee];
  return (
    <section
      aria-hidden="true"
      className="relative py-8 md:py-10 border-y border-bone/10 overflow-hidden"
    >
      <div className="flex gap-12 md:gap-16 marquee-track whitespace-nowrap w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-16">
            <span className="font-display italic text-bone text-5xl md:text-7xl leading-none">
              {item}
            </span>
            <span className="inline-block w-2 h-2 bg-bone rotate-45" />
          </div>
        ))}
      </div>
    </section>
  );
}
