import SectionReveal from "./SectionReveal";
import { motion, type Variants } from "framer-motion";

type Differentiator = {
  number: string;
  title: string;
  desc: string;
};

const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "SEO-First Website Development",
    desc: "Fast, structured websites built for search visibility, clear messaging and stronger lead conversion.",
  },
  {
    number: "02",
    title: "Mobile App Product Engineering",
    desc: "Android, iOS and cross-platform apps designed for reliable performance and smooth customer journeys.",
  },
  {
    number: "03",
    title: "Custom Business Applications",
    desc: "CRM, ERP, portals and workflow tools tailored to how your teams actually operate.",
  },
  {
    number: "04",
    title: "Growth-Focused Delivery",
    desc: "Strategy, design, development and support aligned to measurable business outcomes.",
  },
];

const cardsContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 110,
    y: 18,
    scale: 0.97,
    boxShadow: "0 0 0 rgba(124,58,237,0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    boxShadow: [
      "0 0 0 rgba(124,58,237,0)",
      "0 24px 50px rgba(124,58,237,0.12), 0 0 28px rgba(139,92,246,0.20)",
      "0 18px 42px rgba(15,23,42,0.06)",
    ],
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const EnterpriseDifferentiators: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-16 h-44 w-44 rounded-full bg-violet-200/35 blur-[110px]" />
        <div className="absolute right-[12%] top-12 h-52 w-52 rounded-full bg-sky-100/60 blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-fuchsia-100/60 blur-[100px]" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
        <SectionReveal className="section-text-reveal">
          <div className="max-w-[30rem]">
            <div>
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.32em] text-violet-600">
                Why Enterprises Choose Us
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[2.1rem] font-black leading-[0.96] tracking-tight text-slate-950 sm:text-[2.8rem] lg:text-[3.5rem]">
              Built for What
              <br />
              Matters Most
            </h2>

            <p className="mt-7 max-w-[28rem] text-[1.04rem] leading-9 text-slate-600">
              Businesses choose us for SEO-friendly websites, high-performance
              mobile apps and custom software that supports real operations. We
              combine strategy, design and engineering to build digital products
              that are reliable, easy to use and ready to grow with your team.
            </p>
          </div>

        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          <div className="space-y-4 pt-2">
            {differentiators.map(({ number, title, desc }) => (
              <motion.article
                key={title}
                variants={cardVariants}
                className="flex overflow-hidden rounded-[22px] border border-violet-100/80 bg-white/95 shadow-[0_18px_42px_rgba(15,23,42,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(124,58,237,0.12)]"
              >
                <div
                  className="flex w-[72px] shrink-0 items-center justify-center bg-[linear-gradient(180deg,#9b6bff_0%,#7c3aed_100%)] text-[1.65rem] font-black tracking-tight text-white sm:w-[88px] sm:text-[1.85rem]"
                  style={{
                    clipPath:
                      "polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%, 0 0)",
                  }}
                >
                  {number}
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-4 sm:px-5 sm:py-4.5">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[1rem] font-black leading-tight tracking-tight text-slate-950 sm:text-[1.15rem]">
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-[32rem] text-[0.82rem] leading-6 text-slate-600 sm:text-[0.88rem]">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseDifferentiators;
