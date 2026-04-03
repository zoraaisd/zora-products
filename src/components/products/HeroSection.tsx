import { motion } from "framer-motion";
import FloatingLines from "../FloatingLines";

interface HeroSectionProps {
  onContact: () => void;
}

const HeroSection = ({ onContact }: HeroSectionProps) => (
  <section className="relative min-h-[100dvh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">

    {/* Floating Background */}
    <div className="absolute inset-0 z-10">
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
    <div className="absolute inset-0 bg-black/60 z-[5]" />
    <div className="pointer-events-none absolute inset-0 z-[12] md:hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_42%,rgba(0,0,0,0.65)_61%,rgba(0,0,0,0)_100%)]" />
    <div className="pointer-events-none absolute inset-0 z-[12] hidden md:block bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.62)_61%,rgba(0,0,0,0)_100%)]" />
    <div className="pointer-events-none absolute inset-0 z-[11] md:hidden bg-[radial-gradient(circle_at_50%_10%,rgba(233,69,245,0.48),transparent_38%),linear-gradient(to_bottom,rgba(47,75,192,0.2)_0%,rgba(0,0,0,0)_40%)] mix-blend-screen" />

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
        className="text-5xl sm:text-5xl md:text-8xl font-serif font-semibold tracking-wide leading-tight mb-3 md:mb-6"
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
        className="text-white-400 hidden md:block text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        A complete ecosystem of enterprise-grade AI tools designed
        to work independently or as one unified intelligence platform
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-justify text-white-400 md:hidden text-base font-extrabold max-w-2xl mx-auto leading-relaxed"
      >
        A complete ecosystem of enterprise-grade AI tools designed to work independently or as one unified intelligence platform
        <br />
        Designed to transform how modern organizations operate by integrating automation, predictive intelligence and scalable technology
        <br />
        From managing workflows to generating powerful insights, our AI products help teams move faster, work smarter and innovate without limits
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContact}
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
      >
        Book a Free Trail
      </motion.button>
    </div>

  </section>
);

export default HeroSection;
