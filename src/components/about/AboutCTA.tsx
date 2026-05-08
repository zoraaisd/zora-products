import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";

const AboutCTA: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#7c3aed,#8b5cf6,#6d28d9)] px-6 py-8 text-white shadow-[0_24px_60px_rgba(124,58,237,0.22)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <TextReveal>
              <h2 className="font-serif text-3xl font-black tracking-tight sm:text-4xl">
                Let&apos;s Build the Future Together
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-100 sm:text-base">
                Partner with Zora Global AI and unlock the power of intelligent
                systems for your business.
              </p>
            </TextReveal>
          </div>

          <TextReveal delay={0.12}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-[0_14px_28px_rgba(49,46,129,0.18)] transition-colors hover:bg-violet-50"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
