import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface YouTubePlayerProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function YouTubePlayer({
  youtubeId,
  title,
  className = "",
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-ardua-dark ${className}`}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.button
            key="thumbnail"
            className="relative w-full aspect-video cursor-pointer group block"
            onClick={handlePlay}
            aria-label={`Reproduzir: ${title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-ardua-black/40 group-hover:bg-ardua-black/20 transition-colors duration-500" />

            {/* Cinematic letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-[8%] bg-gradient-to-b from-ardua-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-ardua-black/60 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-ardua-pure/70 flex items-center justify-center
                           backdrop-blur-md bg-white/10 group-hover:bg-white/20 group-hover:border-ardua-pure
                           transition-all duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-ardua-pure ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Glowing ring animation on hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-ardua-pure/0 group-hover:border-ardua-pure/20 group-hover:scale-150 transition-all duration-1000" />
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="iframe"
            className="relative w-full aspect-video"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
