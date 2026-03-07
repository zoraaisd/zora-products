import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { team } from "./data";

const TeamSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/5 to-black" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
            The People Behind Zora
          </span>

          <h2 className="text-3xl md:text-6xl font-serif font-semibold tracking-wide text-white mt-3">
            Leadership
            <span className="ml-3 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden cursor-default"
            >
              {/* Glow Layer */}
              <div
                className={`absolute inset-0 bg-linear-to-b ${member.color}
                opacity-[0.08] group-hover:opacity-[0.18]
                transition-all duration-500 rounded-3xl`}
              />

              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1
                bg-linear-to-r ${member.color}`}
              />

              {/* Card */}
              <div
                className="relative border border-white/8
                group-hover:border-white/20
                transition-all duration-300
                rounded-3xl p-6 pb-8 backdrop-blur-sm
                h-full flex flex-col"
              >
                {/* Avatar */}
                <div className="relative mx-auto w-20 h-20 mb-5">
                  <div
                    className={`w-full h-full rounded-2xl bg-linear-to-br ${member.color}
                    flex items-center justify-center text-white text-2xl font-black
                    shadow-xl group-hover:scale-105 transition-transform duration-300`}
                  >
                    {member.initials}
                  </div>

                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full
                    bg-linear-to-br ${member.color} border-2 border-black`}
                  />
                </div>

                {/* Name */}
                <h4 className="text-white font-bold text-base text-center">
                  {member.name}
                </h4>

                {/* Role */}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider text-center
                  bg-linear-to-r ${member.color}
                  bg-clip-text text-transparent mt-1 mb-3`}
                >
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-500 text-xs leading-relaxed text-center line-clamp-3 flex-1">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
