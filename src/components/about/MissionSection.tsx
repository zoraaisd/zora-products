import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";
// import zoraLogo from "../../assets/Zora Logo Redesign.png";

const missionItems = [
  {
    icon: Target,
    label: "Our Mission",
    heading: "Empower Every Business with AI",
    body: "We build enterprise-grade AI tools that are accessible, intuitive and built to scale. Our mission is to remove the complexity of AI adoption so every business - from startups to Fortune 500s - can automate, innovate and grow without limits.",
    color: "from-violet-500 to-purple-600",
    pillars: ["Accessible AI", "Scalable Infrastructure", "Zero Learning Curve"],
  },
  {
    icon: Eye,
    label: "Our Vision",
    heading: "A World Powered by Intelligent Systems",
    body: "We envision AI as a utility - embedded in every business process, driving efficiency, eliminating friction and unlocking human potential at scale across every industry and continent on Earth.",
    color: "from-cyan-500 to-blue-600",
    pillars: ["Global Reach", "Industry Agnostic", "Human + AI Synergy"],
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const logoX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.12, 0.12, 0]);

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">Who We Are</span>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-wide text-white mt-3">Purpose & <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Direction  </span> </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {missionItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative rounded-3xl overflow-hidden group h-full"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${item.color}`} />
                <div className="relative h-full min-h-[380px] border border-white/8 rounded-3xl p-8 md:p-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className={`inline-flex min-h-9 items-center gap-2 bg-linear-to-r ${item.color} rounded-full px-3.5 py-1.5 text-white text-xs font-bold uppercase tracking-widest mb-6`}>
                    <Icon className="w-3 h-3" />
                    {item.label}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 max-w-[13ch] sm:max-w-[15ch] md:max-w-[14ch] leading-tight min-h-[4.5rem] md:min-h-[5rem]">
                    {item.heading}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-1">
                    {item.body}
                  </p>
                  <div className="space-y-2 w-full">
                    {item.pillars.map((p, j) => (
                      <div key={j} className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
