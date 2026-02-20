import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40">

      {/* Soft Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Ready to Transform Your Business with AI?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Let ZORA design intelligent automation systems tailored
          to your enterprise growth strategy.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10"
        >
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
            Get Free Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
