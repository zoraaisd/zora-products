import React from "react";
import { BadgeCheck, Rocket, ShieldCheck } from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";

const highlights = [
  {
    icon: Rocket,
    title: "48 HOURS",
    description: "Fast Delivery",
  },
  {
    icon: ShieldCheck,
    title: "100% QUALITY",
    description: "No Compromise",
  },
  {
    icon: BadgeCheck,
    title: "CLIENT FOCUSED",
    description: "Your Success, Our Priority",
  },
] as const;

const TimelineSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden border border-[#efebfb] bg-white px-4 pt-6 pb-5 shadow-[0_14px_40px_rgba(89,76,160,0.05)] sm:px-6 sm:pt-8 sm:pb-6 lg:min-h-[520px] lg:px-8 lg:pt-9 lg:pb-7"
    >
      <div className="relative z-10 mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(440px,1fr)] lg:items-center lg:gap-6">
        <div className="flex max-w-[760px] flex-col items-start justify-center lg:min-h-[440px]">
          <TextReveal delay={0.08}>
            <h2 className="max-w-[320px] text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[#0b123f] sm:max-w-[420px] sm:text-[2.25rem] md:max-w-[520px] md:text-[2.55rem]">
              48 Services.
              <span className="mt-2 block font-bold text-[#5d3df5]">Delivered in 48 Hours.</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.16}>
            <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#5e6684] sm:mt-4 sm:max-w-[520px] sm:text-base sm:leading-7 md:max-w-[700px]">
              We help businesses launch, grow and scale with 48 essential digital
              solutions, all designed, developed and delivered within 48 hours with
              finalized requirements.
            </p>
          </TextReveal>

          <div className="mt-5 grid w-full max-w-[740px] gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3 md:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <TextReveal
                  key={item.title}
                  delay={0.24 + index * 0.08}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f7f2ff] text-[#6f3df4] shadow-[0_10px_24px_rgba(111,61,244,0.08)] sm:h-12 sm:w-12">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[0.95rem] font-semibold leading-tight tracking-[-0.02em] text-[#121936] sm:text-[1.05rem] md:whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[0.82rem] leading-5 text-[#6a7088] sm:text-[0.95rem] sm:leading-6 md:whitespace-nowrap">
                      {item.description}
                    </p>
                  </div>
                </TextReveal>
              );
            })}
          </div>
        </div>

        <TextReveal delay={0.12} className="hidden lg:block">
          <div className="flex justify-end">
            <img
              src="/services/Web_application/timeline.webp"
              alt="48 services delivery timeline"
              className="w-full max-w-[640px] object-contain"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default TimelineSection;
