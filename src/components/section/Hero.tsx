import { motion } from "framer-motion";
// import heroBg from "../../assets/hero-bg.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* AI Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-pulse opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      {/* Floating Glow Circles */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Intelligent AI Systems  
          <br />
          Built for Modern Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          ZORA empowers businesses through automation,
          customer intelligence, and scalable AI-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10"
        >
          <a
            href="#products"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
          >
            Explore Products
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 mt-2 rounded-full" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;