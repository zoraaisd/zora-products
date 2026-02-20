import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import topBg from "../../assets/top-bg.jpg";

const products = [
  {
    title: "Orbileads",
    desc: "AI-powered lead generation and customer acquisition engine.",
  },
  {
    title: "HRMS",
    desc: "Intelligent Human Resource Management System.",
  },
  {
    title: "CRMS",
    desc: "Advanced customer relationship intelligence platform.",
  },
];

const TopProducts = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  const next = () => {
    setActive((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative py-40 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SECTION-ONLY Background */}
      <div className="absolute inset-0 -z-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${topBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-black/70 to-blue-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-24 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Most Requested AI Products
        </h2>

        <div className="relative h-[420px] flex items-center justify-center">

          {products.map((product, index) => {
            const isActive = index === active;
            const offset =
              index === (active - 1 + products.length) % products.length
                ? -1
                : index === (active + 1) % products.length
                ? 1
                : 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 280,
                  scale: isActive ? 1.15 : 0.8,
                  opacity: isActive ? 1 : 0.4,
                  rotateY: isActive ? 0 : offset * 25,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ duration: 0.6 }}
                className="absolute w-[420px]"
              >
                <div className="relative p-14 rounded-3xl bg-white/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(168,85,247,0.4)]">

                  {isActive && (
                    <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl" />
                  )}

                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    {product.title}
                  </h3>

                  <p className="text-gray-300 mb-8">
                    {product.desc}
                  </p>

                  {isActive && (
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg">
                      Explore More →
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Manual Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-10 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            <ChevronRight className="text-white" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default TopProducts;
