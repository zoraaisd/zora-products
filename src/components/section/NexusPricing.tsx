import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Zora Quantum",
    tier: "quantum",
    badge: "PREMIUM",
    desc: "Enterprise-grade AI ecosystem with full customization.",
    fullDesc:
      "The ultimate solution for enterprises. Deploy custom AI models trained on your data, get dedicated support, and unlock unlimited possibilities with our most powerful platform.",
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
];

const NexusPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
          processes, amplify productivity, and drive intelligent decision-making.
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
                  onClick={() => setSelectedPlan(plan.name)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-white font-bold text-base"
                >
                  Talk With Us
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NexusPricing;