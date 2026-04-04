import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <span className="text-ardua-muted text-xs uppercase tracking-[0.3em]">
        Scroll
      </span>
      <motion.div
        className="w-[1px] h-8 bg-ardua-muted/50 origin-top"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
