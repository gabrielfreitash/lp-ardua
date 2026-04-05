import { useEffect, useState } from "react";

export function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      setCount(Math.floor(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 1300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-ink curtain pointer-events-none">
      <div className="absolute inset-0 flex items-end justify-between px-6 md:px-10 pb-8">
        <div className="font-mono-jb text-[11px] tracking-widest uppercase text-dust">
          Árdua · MMXXVI
        </div>
        <div className="font-display italic text-bone text-[18vw] md:text-[12vw] leading-none tabular-nums">
          {count.toString().padStart(3, "0")}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px bg-bone" style={{ width: `${count}%` }} />
    </div>
  );
}
