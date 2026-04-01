import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, X } from "lucide-react";

const plans = [
  {
    name: "Zora Core",
    tier: "core",
    badge: "CORE",
    desc: "Essential AI automation for growing businesses.",
    fullDesc:
      "Perfect for startups and small teams looking to automate processes.",
    features: [
      "Lead Automation",
      "Basic Analytics",
      "Email Integration",
      "Up to 1,000 Records",
      "Community Support",
    ],
    ideal: "Best for: Startups & Small Teams",
  },
  
  {
    name: "Zora Pro",
    tier: "pro",
    badge: "PRO",
    desc: "Advanced AI systems for scaling companies.",
    fullDesc:
      "Designed for growing companies that need advanced automation.",
    features: [
      "Everything in Core",
      "CRM Intelligence",
      "Workflow Automation",
      "Up to 10,000 Records",
      "Priority Support",
      "API Access",
    ],
    ideal: "Best for: Growing Companies",
  },
  {
    name: "Zora Quantum",
    tier: "quantum",
    badge: "PREMIUM",
    desc: "Enterprise-grade AI ecosystem with full customization.",
    fullDesc:
      "The ultimate solution for enterprises. Deploy custom AI models trained on your data, get dedicated support and unlock unlimited possibilities with our most powerful platform.",
    features: [
      "Everything in Pro",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "Unlimited Records & Users",
      "24/7 Enterprise Support",
      "Custom Integrations",
      "White-label Options",
      "Advanced Security & Compliance",
      "SLA Guarantee",
      "On-premises Deployment Option",
    ],
    ideal: "Best for: Enterprises & Corporations",
  },
  
];

const NexusPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setShowModal(true);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("plan", selectedPlan || "");
      form.append("_subject", "New Plan Inquiry - Pricing");

      const response = await fetch("https://formspree.io/f/mpqjodrv", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", phone: "", email: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitSuccess(false);
    setFormData({ name: "", phone: "", email: "" });
    setSelectedPlan(null);
  };

  const getBadgeStyle = (tier: string) => {
    switch (tier) {
      case "quantum":
        return "from-yellow-400 to-amber-500 text-black shadow-yellow-500/40";
      case "pro":
        return "from-purple-500 to-indigo-600 text-white shadow-purple-500/40";
      case "core":
        return "from-gray-300 to-gray-500 text-black shadow-gray-400/40";
      default:
        return "";
    }
  };

  return (
    <section className="relative py-14 md:py-30 bg-black overflow-hidden md:pb-2">
      <div className="absolute inset-0 bg-black -z-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ZORA AI Plans
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-base md:text-xl leading-relaxed">
          Enterprise-grade artificial intelligence platform designed to automate
          processes, amplify productivity and drive intelligent decision-making.
        </p>

        <h3 className="text-3xl font-bold text-white mb-14">
          Choose Your Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300"
            >
              {/* Floating Tier Badge */}
              <motion.div
                // animate={{ y: [0, -5, 0] }}
                // transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -top-4 left-1/2 -translate-x-1/2 
px-5 py-2 
text-sm md:text-base 
font-bold rounded-full 
bg-gradient-to-r ${getBadgeStyle(plan.tier)} 
shadow-xl`}
              >
                {plan.badge}
              </motion.div>

              <div className="relative z-10 flex flex-col h-full text-left mt-4">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-base text-cyan-400 font-semibold">
                    {plan.ideal}
                  </p>
                </div>

                <div className="min-h-[140px] mb-6">
                  <p className="text-gray-200 text-base mb-3 leading-relaxed font-medium">
                    {plan.desc}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {plan.fullDesc}
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 mb-6 flex-grow border border-white/5">
                  <p className="text-white font-bold text-base mb-4">
                    Features:
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-gray-200">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-purple-400 mt-0.5 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handlePlanSelect(plan.name)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-white font-bold text-base"
                >
                  Talk With Us
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.button>

              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mb-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Inquiry Submitted!
                  </h2>
                  <p className="text-gray-400 mb-2">
                    Thank you for your interest in {selectedPlan}
                  </p>
                  <p className="text-purple-300 font-medium text-lg mb-6">
                    Our team will reach you soon
                  </p>
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Plan Inquiry
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Fill in your details to discuss {selectedPlan}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                        placeholder="Your email"
                      />
                    </div>

                    {/* Plan Field (Read-only) */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Selected Plan
                      </label>
                      <input
                        type="text"
                        value={selectedPlan || ""}
                        disabled
                        className="w-full bg-purple-600/20 border border-purple-500/30 rounded-lg px-4 py-3 text-purple-300 font-semibold focus:outline-none cursor-not-allowed"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.button>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full py-2 text-gray-400 hover:text-white font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NexusPricing;