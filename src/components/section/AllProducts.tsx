import { motion } from "framer-motion";
import productsBg from "../../assets/products-bg.jpg";

const allProducts = [
  { title: "Secure Messenger", desc: "Enterprise-grade encrypted messaging." },
  { title: "Telecom Bot", desc: "AI-powered telecom automation." },
  { title: "Chat Bot", desc: "Advanced conversational AI." },
  { title: "Workflow Automation", desc: "Streamline business processes." },
  { title: "Email Automation", desc: "AI-driven email marketing engine." },
  { title: "WhatsApp Automation", desc: "CRM-integrated WhatsApp automation." },
];

const AllProducts = () => {
  return (
    <section id="products" className="relative py-40 overflow-hidden">

      {/* Background Image */}
      <div
        className="fixed inset-0 -z-40 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${productsBg})` }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-30 bg-black/70" />

      {/* Moving Aura */}
      <motion.div
        className="fixed inset-0 -z-20 opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[250px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[250px] rounded-full bottom-[-200px] right-[-200px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Our Complete AI Product Ecosystem
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {allProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 transition-all duration-500 hover:-translate-y-3"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-2xl" />

              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-wide">
                {product.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
