import { motion } from "framer-motion";
import Silk from "../Silk";

interface HeroProps {
  onProductClick?: () => void;
}

const Hero = ({ onProductClick }: HeroProps) => {
  const secondLine = "Built for Modern Enterprises";
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 Silk Animated Background */}
      <div className="absolute inset-0 -z-40">
        <div className="w-full h-full">
          <Silk
            speed={10}
            scale={1.2}
            color="#6315a8" // Tailwind purple-600
            noiseIntensity={1}
            rotation={0}
          />
        </div>
      </div>

      {/* Dark overlays for text readability */}
      {/* <div className="absolute inset-0 bg-black/50 -z-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 -z-20" /> */}

      {/* Soft glow accents */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full top-[-100px] left-[-100px] pointer-events-none -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px] pointer-events-none -z-10" />

      {/* Open Reveal Curtain */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-20 origin-top bg-gradient-to-b from-black via-black to-black/90 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 py-10 md:py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0.22, 0.4, 0.22], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[180px] md:w-[560px] md:h-[260px] bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"
        />
        <div className="-translate-y-1 sm:translate-y-0 -translate-x-1 sm:translate-x-0 md:-translate-x-16 lg:-translate-x-24 mt-0 sm:mt-1 font-serif font-black tracking-tight leading-tight">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -2, 0] }}
            transition={{
              opacity: { duration: 1.1, ease: "easeOut" },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="hero-heading relative mx-auto w-full max-w-full sm:max-w-[18ch] whitespace-pre-line text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl mt-20 sm:mt-10 md:mt-28 lg:mt-20 mb-8 sm:mb-10 md:mb-12 px-0 sm:px-0 leading-[1.35] sm:leading-[1.08] md:leading-[1.04] font-extrabold text-center bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(168,85,247,0.25)] [-webkit-text-stroke:1px_rgba(255,255,255,0.95)] sm:[-webkit-text-stroke:1.2px_rgba(10,16,30,0.9)] transition-all duration-[400ms] ease-in-out sm:hover:scale-[1.02] sm:hover:brightness-110 will-change-transform"
          >
          <motion.span
            style={{ WebkitTextFillColor: "transparent" }}
            className="font-serif relative inline-block bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.2, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="block whitespace-nowrap text-center"
              >
                Intelligent AI Systems
              </motion.span>
            </span>
            <span className="block mt-1">
              <span className="block text-center sm:hidden">
                <motion.span
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Built for Modern
                </motion.span>
                <motion.span
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Enterprises
                </motion.span>
              </span>
              <span className="hidden whitespace-nowrap text-center sm:block">
                {secondLine.split("").map((char, idx) => (
                  <motion.span
                    key={`${char}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + idx * 0.03, duration: 0.22, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </span>
          </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.45, duration: 1.05, ease: "easeOut" }}
          className="mt-3 md:mt-6 max-w-3xl mx-auto text-center text-gray-100 text-sm md:text-xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]"
        >
          ZORA empowers businesses through automation,
          customer intelligence, and scalable AI-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 md:mt-10"
        >
          <button
            onClick={onProductClick}
            className="px-5 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full border border-white/70 text-white bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md hover:scale-105 hover:border-white transition-all duration-300 shadow-lg shadow-purple-500/30"          >
            Explore Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
