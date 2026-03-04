import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import zoraLogo from "../../assets/Zora Logo Redesign.png";

interface HeroSectionProps {
  onExploreProduct: () => void;
}

const HeroSection = ({}: HeroSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      {/* Background Image */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          alt="Abstract technology background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      </motion.div>

      {/* Radial Spotlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl px-6"
      >
        <div className="flex flex-col items-center text-center">

          {/* Logo with depth */}
          <motion.div style={{ y: logoY }} className="mb-8 relative">
            <div className="absolute inset-0 blur-2xl bg-purple-500/20 rounded-full scale-150" />
            <motion.img
              src={zoraLogo}
              alt="Zora"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-40 md:w-48 lg:w-56 object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.7)]"
            />
          </motion.div>
          <motion.h1
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-tight tracking-wide mb-8"
          >
            <span className="bg-gradient-to-br from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-white/400 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Zora builds enterprise grade AI systems that think, adapt,
            and evolve powering the next generation of digital transformation.
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
