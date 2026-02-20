import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Nexus Core",
    desc: "Essential AI automation for growing businesses.",
    features: ["Lead Automation", "Basic Analytics", "Email Integration"],
  },
  {
    name: "Nexus Pro",
    desc: "Advanced AI systems for scaling companies.",
    features: ["Everything in Core", "CRM Intelligence", "Workflow AI"],
  },
  {
    name: "Nexus Quantum",
    desc: "Enterprise-grade AI ecosystem with full customization.",
    features: [
      "Everything in Pro",
      "Custom AI Model",
      "Dedicated Support",
    ],
  },
];

const NexusPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Submitted Data:", data);

    setSelectedPlan(null);
    setShowSuccess(true);

    // Auto hide success message
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-40 relative">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          ZORA Nexus AI Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-xl shadow-purple-500/10 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {plan.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {plan.desc}
              </p>

              <ul className="text-gray-300 space-y-2 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan.name)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Talk With Us
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl w-full max-w-md relative"
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Talk With Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="text-gray-400 text-sm">
                    Selected Plan
                  </label>
                  <input
                    type="text"
                    name="plan"
                    value={selectedPlan}
                    readOnly
                    className="w-full mt-1 p-3 rounded-xl bg-white/5 text-white border border-white/10 cursor-not-allowed"
                  />
                </div>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                />

                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="Mobile Number"
                  className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                />

                <textarea
                  name="description"
                  maxLength={100}
                  required
                  placeholder="Describe your requirement (max 100 words)"
                  className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 h-28 resize-none focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl text-white font-medium"
          >
            🚀 Our team will contact you soon.
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default NexusPricing;
