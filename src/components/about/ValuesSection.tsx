import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { values } from "./data";

const ValuesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.8]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">What Drives Us</span>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-wide text-white mt-3 mx-auto leading-none flex justify-center gap-3">
  <span>Core</span>
  <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Values
  </span>
</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group rounded-2xl overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${val.color} opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500`} />
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${val.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div className="relative border border-white/8 group-hover:border-white/20 transition-all duration-300 rounded-2xl p-7 h-full">
                  <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${val.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">{val.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
