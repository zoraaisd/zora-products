import React from "react";
import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  TowerControl,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionReveal from "./SectionReveal";

type Industry = {
  title: string;
  desc: string;
  Icon: LucideIcon;
  image: string;
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const industries: Industry[] = [
  {
    title: "Banking & Financial Services",
    desc: "Secure digital products and workflow automation that improve service delivery, compliance and customer trust.",
    Icon: Landmark,
    image: "/industries/banking.webp",
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Connected healthcare platforms that improve outcomes, streamline care and support clinical innovation.",
    Icon: HeartPulse,
    image: "/industries/healthcare.webp",
  },
  {
    title: "Manufacturing & Supply Chain",
    desc: "Operational visibility and automation that improve efficiency, reduce bottlenecks and strengthen performance.",
    Icon: Factory,
    image: "/industries/manufacture.webp",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Commerce solutions and scalable storefronts that improve engagement, retention and digital growth.",
    Icon: ShoppingCart,
    image: "/industries/retail.webp",
  },
  {
    title: "Telecommunications",
    desc: "Scalable systems that improve service delivery, simplify operations and support reliable customer experiences.",
    Icon: TowerControl,
    image: "/industries/Telecommunications.webp",
  },
  {
    title: "Enterprise SaaS",
    desc: "Reliable SaaS products and scalable architectures that support growth and faster delivery.",
    Icon: Building2,
    image: "/industries/saas.webp",
  },
];

const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => {
  const Icon = industry.Icon;

  return (
    <motion.article
      variants={cardVariants}
      tabIndex={0}
      className="group relative min-h-[310px] overflow-hidden border border-slate-200 bg-white outline-none"
    >
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-105 sm:group-focus:scale-105"
      />

      <div className="absolute inset-0 bg-black/55 transition-colors duration-300 sm:bg-black/10 sm:group-hover:bg-black/55 sm:group-focus:bg-black/55" />

      <div className="absolute inset-0 flex items-end p-5 sm:p-6">
        <div className="translate-y-0 opacity-100 transition-all duration-300 sm:translate-y-24 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus:translate-y-0 sm:group-focus:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 sm:h-16 sm:w-16">
            <Icon className="h-6 w-6 text-violet-700 sm:h-7 sm:w-7" strokeWidth={1.9} />
          </div>

          <h3 className="mt-4 text-lg font-bold leading-tight text-white sm:text-2xl">
            {industry.title}
          </h3>
          <p className="mt-3 max-w-[26ch] text-sm leading-7 text-white/90 sm:text-base sm:leading-7">
            {industry.desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const Industries: React.FC = () => {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl xl:text-[4rem]">
            Industries <span className="text-violet-700">We Serve</span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl px-2 text-left text-sm leading-7 text-slate-600 sm:mt-5 sm:px-0 sm:text-lg sm:leading-8">
            We deliver tailored technology solutions across a wide range of
            industries, helping businesses streamline operations, improve
            efficiency and accelerate digital transformation. Our scalable,
            innovation-driven approach empowers organizations to adapt faster,
            enhance customer experiences and achieve sustainable long-term growth
            in an evolving digital landscape.
          </p>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.14 }}
          variants={cardsContainerVariants}
          className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
