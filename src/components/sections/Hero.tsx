import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../data/content";
import ScrollIndicator from "../ui/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const line = lineRef.current;
    const tagline = taglineRef.current;
    const subtitle = subtitleRef.current;

    if (!section || !title || !line || !tagline || !subtitle) return;

    const chars = title.querySelectorAll(".hero-char");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      line,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power2.inOut" }
    )
      .fromTo(
        chars,
        {
          clipPath: "inset(100% 0 0 0)",
          y: 40,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          duration: 1,
          stagger: 0.08,
        },
        "-=0.4"
      )
      .fromTo(
        tagline,
        { opacity: 0, filter: "blur(12px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2 },
        "-=0.3"
      )
      .fromTo(
        subtitle,
        { opacity: 0, y: 15 },
        { opacity: 0.5, y: 0, duration: 0.8 },
        "-=0.6"
      );

    // Scroll-triggered exit animation
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(title, {
          scale: 1 - progress * 0.3,
          opacity: 1 - progress * 1.5,
          y: progress * -80,
        });
        gsap.set(tagline, {
          opacity: 1 - progress * 2,
          y: progress * -40,
        });
        gsap.set(subtitle, {
          opacity: 0.5 - progress * 2,
        });
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  const titleChars = content.hero.title.split("");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.6)_70%,rgba(5,5,5,1)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        {/* Expanding line */}
        <div
          ref={lineRef}
          className="w-24 h-[1px] bg-ardua-white/30 mb-4 origin-center scale-x-0"
        />

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-black tracking-[-0.04em] text-ardua-pure leading-none"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 14rem)",
          }}
        >
          {titleChars.map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-ardua-white text-lg md:text-2xl lg:text-3xl font-light tracking-wide max-w-2xl text-center opacity-0"
        >
          {content.hero.tagline}
        </p>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-ardua-muted text-sm md:text-base font-light tracking-wider max-w-lg text-center opacity-0"
        >
          {content.hero.subtitle}
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
