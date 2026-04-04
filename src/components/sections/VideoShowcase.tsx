import { motion } from "motion/react";
import { content } from "../../data/content";
import TextReveal from "../ui/TextReveal";
import YouTubePlayer from "../ui/YouTubePlayer";

export default function VideoShowcase() {
  const { featured, videos } = content.videoShowcase;

  return (
    <section id="videos" className="relative px-6 md:px-16 lg:px-24">
      {/* Background glow behind featured video */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-white/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.span
          className="text-ardua-muted text-xs uppercase tracking-[0.3em] block mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Vídeos
        </motion.span>

        <TextReveal
          text={content.videoShowcase.heading}
          as="h2"
          className="text-ardua-pure text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        />

        <motion.p
          className="text-ardua-muted text-lg md:text-xl max-w-xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {content.videoShowcase.subtitle}
        </motion.p>

        {/* Featured video — large */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            {/* Outer glow border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-white/5 pointer-events-none" />

            <YouTubePlayer
              youtubeId={featured.youtubeId}
              title={featured.title}
            />
          </div>

          {/* Featured video info */}
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-ardua-pure text-xl md:text-2xl font-semibold">
              {featured.title}
            </h3>
            <p className="text-ardua-muted text-sm md:text-base max-w-md">
              {featured.description}
            </p>
          </div>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="relative group">
                {/* Subtle border glow */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <YouTubePlayer
                  youtubeId={video.youtubeId}
                  title={video.title}
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <h4 className="text-ardua-white text-base font-medium">
                  {video.title}
                </h4>
                <span className="text-ardua-muted text-xs uppercase tracking-wider">
                  {video.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
