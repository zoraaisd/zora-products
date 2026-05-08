import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-1 pt-5 pb-1 lg:pt-6 lg:pb-1">
      <div className="mx-auto max-w-[1120px] overflow-hidden border border-[#ebe7ff] bg-[radial-gradient(circle_at_top_left,rgba(130,98,255,0.08),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)] shadow-[0_24px_70px_rgba(109,61,244,0.12)]">
        <div className="grid items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 lg:min-h-[190px] lg:grid-cols-[minmax(0,1.12fr)_minmax(240px,0.48fr)] lg:px-6 lg:py-2.5 xl:px-7">
          <TextReveal className="flex h-full max-w-[860px] flex-col justify-center">
            <h2 className="max-w-[640px] text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-[#111834] md:text-[2rem]">
              Let&apos;s Build Your <span className="text-[#6a3df6]">Success Story</span>
            </h2>
            <p className="mt-1.5 max-w-[860px] text-[0.86rem] leading-6 text-[#4f5878] lg:whitespace-nowrap">
              Partner with us to unlock your business potential and achieve
              remarkable growth through strategy, execution and support.
            </p>

            <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex min-h-[38px] items-center justify-center gap-2 bg-[linear-gradient(135deg,#7c3aed_0%,#5b21b6_100%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(109,61,244,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(109,61,244,0.28)]"
              >
                Talk to Our Experts
                <ArrowRight size={16} />
              </Link>
            </div>
          </TextReveal>

          <TextReveal delay={0.12} className="lg:h-full lg:justify-self-end">
            <div className="mx-auto max-w-[300px] lg:flex lg:h-full lg:items-center lg:justify-end">
              <img
                src="/services/Web_application/CTA.webp"
                alt="Business growth and strategy illustration"
                className="w-full object-contain lg:max-h-[170px]"
              />
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
