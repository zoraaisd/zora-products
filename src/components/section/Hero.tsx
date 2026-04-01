import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Silk from "../Silk";

interface HeroProps {
  onProductClick?: () => void;
}

const Hero = ({ onProductClick }: HeroProps) => {
  const aiText = "INTELLIGENT AI SYSTEMS";
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      i += 1;
      setTypedText(aiText.slice(0, i));
      if (i >= aiText.length) {
        window.clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, []);

  const pointerX = useMotionValue(0);
  const textShiftX = useSpring(useTransform(pointerX, [-1, 1], [-6, 6]), {
    stiffness: 80,
    damping: 18,
  });

  const textParticles = [
    { top: "12%", left: "8%", size: "h-1 w-1", delay: 0.2 },
    { top: "24%", left: "36%", size: "h-1.5 w-1.5", delay: 0.4 },
    { top: "40%", left: "14%", size: "h-2 w-2", delay: 0.7 },
    { top: "58%", left: "28%", size: "h-1 w-1", delay: 0.9 },
    { top: "72%", left: "4%", size: "h-1.5 w-1.5", delay: 1.2 },
    { top: "84%", left: "42%", size: "h-1 w-1", delay: 1.5 },
  ];

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerX.set(x);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
  };

  const handleSecondaryCta = () => {
    const whySection = document.getElementById("why");
    if (whySection) whySection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🔥 Silk Animated Background */}
      <div className="absolute inset-0 -z-40">
        <div className="h-full w-full">
          <Silk
            speed={10}
            scale={1.2}
            color="#6315a8"
            noiseIntensity={1}
            rotation={0}
          />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_14%,rgba(192,132,252,0.2),transparent_42%),radial-gradient(circle_at_76%_78%,rgba(147,51,234,0.22),transparent_46%),radial-gradient(circle_at_60%_28%,rgba(139,92,246,0.14),transparent_38%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 sm:px-6 pb-24 pt-16 md:items-center md:px-10 md:pt-24 lg:pb-16 lg:pt-24"
      >
        <motion.div className="relative text-center" style={{ x: textShiftX }}>
          {textParticles.map((particle, index) => (
            <motion.span
              key={`particle-${index}`}
              className={`pointer-events-none absolute ${particle.size} rounded-full bg-white/70`}
              style={{ top: particle.top, left: particle.left }}
              animate={{ y: [0, -16, 0], opacity: [0.15, 0.7, 0.15] }}
              transition={{
                delay: particle.delay,
                duration: 5 + index * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.h1 className="mx-auto mt-6 max-w-full px-4 font-['Zen_Dots','Space_Grotesk','Inter','SF_Pro_Display','Satoshi',sans-serif] text-[1.7rem] font-extrabold leading-[1.3] tracking-[0.05em] text-white sm:text-[2.25rem] md:text-[2.6rem] lg:text-[3.4rem] break-words">
            <motion.span
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", textShadow: "0 0 36px rgba(168,85,247,0.5)" }}
              transition={{ delay: 0.22, duration: 0.7 }}
              className="relative isolate inline-block max-w-[100%] whitespace-normal pb-[0.1em] font-['Zen_Dots',cursive] bg-gradient-to-r from-[#d9c2ff] via-[#b98aff] to-[#f06dff] bg-clip-text text-transparent [text-shadow:0_0_34px_rgba(168,85,247,0.5)] lg:whitespace-nowrap"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/0 to-transparent bg-clip-text text-transparent mix-blend-screen opacity-70"
              >
                {typedText}
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent bg-clip-text text-transparent opacity-55"
              >
                {typedText}
              </span>
              {typedText}
              <span className="ml-1 inline-block h-[0.9em] w-[0.08em] bg-cyan-200 align-[-0.08em]" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 12, filter: typingDone ? "blur(0px)" : "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="mt-2 block font-['Space_Grotesk',sans-serif] text-[0.9em] font-medium tracking-[0.01em] text-white md:mt-3 md:text-[1.02em] md:tracking-[0.015em]"
            >
              Built for Modern Enterprises
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mx-auto mt-7 max-w-xl font-['Space_Grotesk',sans-serif] text-base leading-relaxed text-blue-50/90 md:text-lg"
          >
            ZORA unifies automation, customer intelligence and AI orchestration so your teams ship
            production-ready experiences faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
          >
            <motion.button
              onClick={onProductClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-7 py-3 font-['Space_Grotesk',sans-serif] text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.55)] md:text-base"
            >
              Explore Products
            </motion.button>

            <motion.button
              onClick={handleSecondaryCta}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-xl border border-white/25 bg-white/10 px-7 py-3 font-['Space_Grotesk',sans-serif] text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-purple-300/70 hover:bg-white/20 hover:blur-[0.2px] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] md:text-base"
            >
              See Why ZORA
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
