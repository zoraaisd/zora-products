import { motion } from "framer-motion";
import FloatingLines from "../FloatingLines";

const HeroSection = () => (
  <section className="relative h-[60vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">

    {/* Floating Background */}
    <div className="absolute inset-0 z-0">
      <FloatingLines
        linesGradient={["#E945F5", "#2F4BC0", "#a06dfd"]}
        animationSpeed={1.2}
        interactive={false}
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
        parallax
        parallaxStrength={0.3}
      />
    </div>

    {/* Lighter overlay (important fix) */}
    <div className="absolute inset-0 bg-black/60 z-10" />

    {/* Content */}
    <div className="relative z-20 text-center px-4 md:px-6 max-w-6xl mx-auto">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-5 py-2 text-purple-300 text-xs font-semibold mb-8 uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
        10 AI-Powered Products
      </motion.div> */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl sm:text-5xl md:text-8xl font-serif font-semibold tracking-wide leading-tight mb-3 md:mb-6"
      >
        <span className="bg-gradient-to-br from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
          Our AI
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Product Suite
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-white-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        A complete ecosystem of enterprise-grade AI tools designed
        to work independently or as one unified intelligence platform.
      </motion.p>
    </div>

  </section>
);

export default HeroSection;
