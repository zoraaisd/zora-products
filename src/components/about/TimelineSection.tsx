import { motion } from "framer-motion";
import { timeline } from "./data";

const TimelineSection = () => (
  <section className="relative py-12 md:py-16 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-black to-purple-950/20" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">2019 — Present</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-3">The Journey</h2>
      </motion.div>
      <div className="relative flex flex-col gap-0">
        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/60 via-blue-500/40 to-transparent md:-translate-x-1/2" />
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative flex items-start gap-6 mb-8 ${
              i % 2 === 0 ? "md:flex-row md:pr-[52%]" : "md:flex-row-reverse md:pl-[52%]"
            }`}
          >
            {/* dot */}
            <div
              className={`shrink-0 z-10 w-10 h-10 rounded-full bg-linear-to-br ${item.color} border-2 border-black flex items-center justify-center text-white text-sm font-black shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2 mt-4`}
            >
              {i + 1}
            </div>
            {/* card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="ml-10 md:ml-0 relative group bg-white/3 border border-white/8 hover:border-white/25 rounded-2xl p-5 transition-all duration-300 cursor-default flex-1"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <span className={`block text-sm font-black uppercase tracking-widest bg-linear-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                {item.year}
              </span>
              <h4 className="text-white font-bold text-base md:text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.event}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
