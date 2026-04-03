import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { topProducts } from "../products/topdata";

interface TopProductsProps {
  onProductClick?: (product: typeof topProducts[0]) => void;
}

const TopProducts: React.FC<TopProductsProps> = ({ onProductClick }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const products = topProducts.slice(0, 3);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [paused, products.length]);

  useEffect(() => {
    if (!paused) return;

    const timer = setTimeout(() => setPaused(false), 4000);
    return () => clearTimeout(timer);
  }, [paused]);

  const next = () => {
    setPaused(true);
    setActive((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setPaused(true);
    setActive((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const handleProductSelect = (product: typeof topProducts[0]) => {
    // Scroll to top immediately before calling onProductClick
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      onProductClick?.(product);
    }, 50);
  };

  return (
    <section className="relative pt-16 md:pt-15 pb-15 md:pb-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-cover bg-center"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0f0617] via-[#140a22] to-[#1a0f2e]" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#12071f] via-[#1b0f2e] to-[#2a1345]" /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#160a27] to-[#1f0d35]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-28"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl lg:whitespace-nowrap font-black font-serif mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Products Engineered
            <span className="block md:inline"> for Impact</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Cutting-edge solutions powered by artificial intelligence
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
  className="
    relative
    h-[480px]
    sm:h-[550px]
    md:h-[600px]
    lg:h-[650px]
    flex items-center justify-center
    md:pt-2
    w-full
    overflow-hidden
    2xl:overflow-visible
    px-6 sm:px-6 md:px-10
    mt-6 md:mt-0
  "
>
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
    x: offset * 260,
    scale: isActive ? 1 : 0.85,
    opacity: isActive ? 1 : 0.4,
    y: isActive ? 0 : 40,
  }}
  transition={{ 
    type: "spring",
    stiffness: 70,
    damping: 18,
    mass: 1,
    restDelta: 0.001
  }}
  className="
    absolute
    left-1/2
    -translate-x-1/2
    w-[85%]
    sm:w-[80%]
    md:w-[340px]
    xl:w-[380px]
  "
  style={{
    zIndex: isActive ? 20 : 10,
  }}
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: "0 0 35px rgba(139, 92, 246, 0.35)",
                    }}
                  />
                )}

                <motion.div
                  whileHover={isActive ? { scale: 1.02, y: -6 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`relative flex flex-col min-h-[280px] sm:min-h-[360px] md:min-h-[420px] p-4 md:p-8 rounded-2xl backdrop-blur-md border overflow-hidden cursor-pointer
                  ${
                    isActive
                      ? `bg-gradient-to-br ${product.color} bg-opacity-10 border-transparent shadow-xl`
                      : "bg-white/5 border-white/10"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  {/* Neon Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl p-px -z-10 ${
                      isActive
                        ? `bg-gradient-to-r ${product.color}`
                        : "bg-gradient-to-r from-gray-700 to-gray-800"
                    }`}
                  >
                    <div className="w-full h-full bg-black rounded-2xl" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full flex-1 justify-between gap-3 lg:gap-5">

                    {/* Product Image */}
                    <motion.div
                      animate={isActive ? { y: [-4, 4, -4] } : { y: 0 }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                      className={`w-full h-16 sm:h-24 md:h-28 rounded-xl overflow-hidden border border-white/20`}
                    >
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <h3 className="text-base md:text-3xl font-bold text-white">
                      {product.title}
                    </h3>

                    <p className="text-gray-300 w-full flex-none text-xs md:text-sm lg:text-base">
                      {product.shortDesc}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="space-y-2"
                      >
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.08, ease: "easeOut" }}
                            className="flex items-center justify-center sm:justify-start gap-2 text-xs md:text-sm text-gray-300 w-full"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}
                            />
                            {feature.title}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className={`w-full py-2.5 md:py-3 rounded-lg font-semibold bg-gradient-to-r ${product.color} text-white text-sm relative overflow-hidden shrink-0 mt-3`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleProductSelect(product);
                        }}
                      >
                        Explore More →
                      </motion.button>
                    )}

                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Navigation */}
          <motion.button
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={prev}
            className="absolute left-2 sm:left-4 md:left-5 lg:left-6 xl:left-8 2xl:-left-16 z-30 p-2 md:p-3 xl:p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 hover:from-cyan-500/40 hover:to-purple-500/40 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 md:w-6 h-4 md:h-6 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={next}
            className="absolute right-2 sm:right-4 md:right-5 lg:right-6 xl:right-8 2xl:-right-16 z-30 p-2 md:p-3 xl:p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 hover:from-cyan-500/40 hover:to-purple-500/40 transition-colors duration-300"
          >
            <ChevronRight className="w-4 md:w-6 h-4 md:h-6 text-white" />
          </motion.button>

          {/* Indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 bottom-0 md:-bottom-16">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ease-out ${
                  active === index
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopProducts;
