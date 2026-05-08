import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const HeroSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services/Web_application/Web_application_hero.webp')" }}
      />
      <div className="absolute inset-0 bg-slate-950/52" />

      <div className="relative px-6 py-10 sm:px-8 lg:px-16 lg:py-14">
        <div className="max-w-[620px]">
          <TextReveal>
            <h1
              className="max-w-[560px] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] !text-white sm:text-5xl lg:text-[4.2rem]"
              style={{ textShadow: "0 10px 30px rgba(15, 23, 42, 0.45)" }}
            >
              Website &amp; Web
              <span className="block">Application Services</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p
              className="mt-5 max-w-[520px] text-base leading-7 !text-white sm:text-lg sm:leading-8"
              style={{ textShadow: "0 8px 24px rgba(15, 23, 42, 0.4)" }}
            >
              Building conversion-focused websites and scalable web applications for modern business growth.
            </p>
          </TextReveal>

          <TextReveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Connect with our experts
                <ArrowRight size={17} />
              </Link>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
