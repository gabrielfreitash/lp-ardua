import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      const t = e.target as HTMLElement;
      const magnet = t.closest("[data-cursor]") as HTMLElement | null;
      setLabel(magnet ? magnet.dataset.cursor ?? null : null);
    };

    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[150] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-bone mix-blend-difference"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[149] flex items-center justify-center mix-blend-difference transition-[width,height] duration-300"
        style={{
          marginLeft: label ? -44 : -20,
          marginTop: label ? -44 : -20,
          width: label ? 88 : 40,
          height: label ? 88 : 40,
        }}
      >
        <div
          className="h-full w-full rounded-full border border-bone flex items-center justify-center font-mono-jb text-[9px] uppercase tracking-widest text-bone"
        >
          {label}
        </div>
      </div>
    </>
  );
}
