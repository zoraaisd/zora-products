import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Clients Served", value: 150 },
  { label: "AI Products Built", value: 12 },
  { label: "Enterprise Solutions", value: 40 },
  { label: "Success Rate (%)", value: 98 },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className=" text-violet-400 text-4xl md:text-5xl font-bold ">
      {count}+
    </span>
  );
};

const WhyChoose = () => {
  return (
    <section
      id="why"
      className="relative py-32 bg-gradient-to-b from-black via-[#0f0f1a] to-black overflow-hidden md:pb-2"
    >
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-600/15 to-transparent blur-[150px] rounded-full top-[-200px] left-[-200px] -z-30 pointer-events-none"
      />
      
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/10 to-transparent blur-[150px] rounded-full bottom-[-200px] right-[-200px] -z-30 pointer-events-none"
      />

      {/* Floating Particles - Reduced count */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 60, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Why Choose ZORA?
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10 shadow-md shadow-purple-500/10"
            >
              <Counter value={stat.value} />
              <p className="mt-4 text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
