import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import zoraLogo from "../../assets/Zora Logo Redesign.webp";

interface CTASectionProps {
  onExploreProduct: () => void;
  onContact: () => void;
}

const CTASection = ({ onContact, onExploreProduct }: CTASectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.4, 1.2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.12, 0.06]);

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      {/* <motion.img
        src={zoraLogo}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 object-contain pointer-events-none select-none"
        style={{ scale: logoScale, opacity: logoOpacity }}
      /> */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/20 to-black" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-8"
        >
          {/* <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl scale-150" />
            <img
              src={zoraLogo}
              alt="Zora"
              className="relative w-20 h-20 object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]"
            />
          </div> */}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl font-serif font-semibold tracking-wide text-white mb-5 leading-tight"
        >
          Ready to Build the
          <br />
          <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Future Together?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-sm md:text-lg mb-10 max-w-xl mx-auto"
        >
          Join 500+ enterprises already transforming their operations with Zora AI.
        </motion.p>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={onExploreProduct}
    className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
  >
    Explore Product
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={onContact}
    className="px-8 py-3 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
  >
    Contact Us
  </motion.button>
</motion.div>
      </div>
    </section>
  );
};

export default CTASection;
