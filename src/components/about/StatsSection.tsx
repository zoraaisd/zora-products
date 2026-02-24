import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "./data";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-950/30 via-black to-blue-950/30" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg,#fff,#fff 1px,transparent 1px,transparent 12px)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative border border-white/8 rounded-2xl p-6 md:p-8 text-center hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                <div className={`w-10 h-10 mx-auto mb-4 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl md:text-5xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
