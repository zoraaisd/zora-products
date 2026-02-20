import { motion } from "framer-motion";
import { FaAws, FaDocker, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import toolsBg from "../../assets/tools-bg.jpg";

const tools = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "NodeJS" },
  { icon: <FaDatabase />, name: "Database" },
];

const Tools = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Image with Parallax Drift */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${toolsBg})` }}
        animate={{ x: ["0%", "-2%", "0%"], scale: [1, 1.05, 1] }}
        transition={{
          duration: 0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Tools We Trust
        </h2>

        <div className="relative overflow-hidden w-full">
  <motion.div
    className="flex gap-16 w-max"
    animate={{ x: "-50%" }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 18,
      ease: "linear",
    }}
  >
    {[...tools, ...tools].map((tool, index) => (
      <div
        key={index}
        className="flex-shrink-0 group flex flex-col items-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl transition-all duration-500"
      >
        <div className="w-16 h-16 flex items-center justify-center text-4xl text-gray-300 group-hover:text-blue-500 transition duration-300">
          {tool.icon}
        </div>

        <span className="mt-4 text-gray-400 group-hover:text-purple-400 transition duration-300">
          {tool.name}
        </span>
      </div>
    ))}
  </motion.div>
</div>


      </div>
    </section>
  );
};

export default Tools;
