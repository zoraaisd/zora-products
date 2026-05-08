import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroBackgrounds = [
    "/home/hero_bg.webp",
    "/home/hero_bg%202.webp",
    "/home/hero_bg3.webp",
  ];
  const lineOne = "Websites that rank";
  const lineTwo = "apps that grow";
  const lineOneSpeed = 32;
  const lineTwoSpeed = 26;
  const linePause = 90;
  const [activeBackground, setActiveBackground] = useState(0);
  const [lineOneLength, setLineOneLength] = useState(
    prefersReducedMotion ? lineOne.length : 0,
  );
  const [lineTwoLength, setLineTwoLength] = useState(
    prefersReducedMotion ? lineTwo.length : 0,
  );

  const revealVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  const paragraphVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          y: 8,
        },
        visible: {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          y: 0,
        },
      };

  useEffect(() => {
    if (prefersReducedMotion) {
      setLineOneLength(lineOne.length);
      setLineTwoLength(lineTwo.length);
      return;
    }

    setLineOneLength(0);
    setLineTwoLength(0);

    const timers: number[] = [];
    const lineTwoStart = lineOne.length * lineOneSpeed + linePause;

    for (let index = 0; index < lineOne.length; index += 1) {
      timers.push(
        window.setTimeout(() => {
          setLineOneLength(index + 1);
        }, index * lineOneSpeed),
      );
    }

    for (let index = 0; index < lineTwo.length; index += 1) {
      timers.push(
        window.setTimeout(() => {
          setLineTwoLength(index + 1);
        }, lineTwoStart + index * lineTwoSpeed),
      );
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [lineOne.length, lineTwo.length, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveBackground(0);
      return;
    }

    const interval = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [heroBackgrounds.length, prefersReducedMotion]);

  const paragraphDelay = prefersReducedMotion
    ? 0.15
    : (lineOne.length * lineOneSpeed + linePause + lineTwo.length * lineTwoSpeed) / 1000 + 0.18;
  const buttonDelay = paragraphDelay + 0.35;

  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h,0px)]">
      {heroBackgrounds.map((image, index) => (
        <div
          key={image}
          className={`pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat transition-opacity duration-1000 ${
            activeBackground === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.28)_0%,rgba(15,23,42,0.18)_24%,rgba(15,23,42,0.08)_42%,rgba(15,23,42,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(125,211,252,0.10),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(129,140,248,0.12),transparent_26%)]" />

      <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-4 pb-10 pt-8 sm:min-h-[470px] sm:px-6 sm:pb-12 sm:pt-10 lg:min-h-[520px] lg:px-8 lg:pb-14">
        <div className="w-full max-w-[720px]">
            <h1 className="flex max-w-[13ch] flex-col font-serif text-[2.5rem] font-black leading-[1.02] tracking-tight text-white sm:max-w-[14ch] sm:text-5xl sm:leading-[0.99] lg:max-w-none lg:text-[3.3rem] lg:leading-[0.97] xl:text-[3.7rem]">
              <span className="block min-h-[1.05em] sm:whitespace-nowrap">
                {lineOne.slice(0, lineOneLength)}
              </span>
              <span className="mt-2 block min-h-[1.12em] pb-[0.14em] leading-[1.08] sm:mt-3 sm:whitespace-nowrap lg:mt-2">
                <span className="bg-gradient-to-r from-[#a5b4fc] via-[#c4b5fd] to-[#67e8f9] bg-clip-text text-transparent">
                  {lineTwo.slice(0, lineTwoLength)}
                </span>
              </span>
            </h1>

            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              transition={
                prefersReducedMotion
                  ? { duration: 0.25, delay: paragraphDelay }
                  : { duration: 0.95, delay: paragraphDelay, ease: [0.16, 1, 0.3, 1] }
              }
              className="mt-6 max-w-[32rem] text-base leading-8 text-slate-100 sm:text-lg sm:leading-8"
            >
              Zora Global AI builds SEO-ready websites, mobile applications
              and custom business apps that help your company attract, convert
              and serve customers better.
            </motion.p>
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={
                prefersReducedMotion
                  ? { duration: 0.25, delay: buttonDelay }
                  : { duration: 1.2, delay: buttonDelay, ease: [0.22, 1, 0.36, 1] }
              }
              className="mt-8 sm:mt-9"
            >
              <Link
                to="/services"
                className="inline-flex min-h-[50px] min-w-[184px] items-center justify-center gap-2 rounded-xl border border-cyan-200/70 bg-slate-950/24 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#081226] hover:shadow-[0_18px_36px_rgba(103,232,249,0.28)] active:scale-[0.98] sm:min-h-[54px]"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
