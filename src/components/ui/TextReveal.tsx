import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  splitBy?: "char" | "word";
  stagger?: number;
  trigger?: "scroll" | "load";
  delay?: number;
}

export default function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  splitBy = "word",
  stagger = 0.04,
  trigger = "scroll",
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal-unit");

    const tween = gsap.fromTo(
      elements,
      { y: 60, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger:
          trigger === "scroll"
            ? {
                trigger: container,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
              }
            : undefined,
      }
    );

    return () => {
      tween.kill();
    };
  }, [text, stagger, trigger, delay]);

  const units =
    splitBy === "char" ? text.split("") : text.split(" ");

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          className="reveal-unit inline-block opacity-0"
          style={{ willChange: "transform, opacity" }}
        >
          {unit}
          {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
