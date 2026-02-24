import { motion } from "framer-motion";
import Silk from "../Silk";

interface HeroProps {
  onProductClick?: () => void;
}

const Hero = ({ onProductClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-[70vh] md:min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden"
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 py-10 md:py-20 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="text-2xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_6px_25px_rgba(0,0,0,0.9)]"        >
          Intelligent AI Systems
          <br />
          Built for Modern Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-3 md:mt-6 text-gray-200 text-sm md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"        >
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