import React from "react";
import { LifeBuoy, Rocket, Settings2, Users } from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { websiteWebAppDifferentiators } from "../content";

const icons = [Rocket, Users, Settings2, LifeBuoy] as const;

const WhyChooseSection: React.FC = () => {
  return (
    <section className="overflow-hidden border border-[#ece8fb] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-5 py-8 shadow-[0_10px_30px_rgba(89,76,160,0.04)] sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal>
        <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
          Why Choose Us
        </p>

        <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
          Why Companies Trust Us
        </h2>
        </TextReveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {websiteWebAppDifferentiators.map((item, index) => {
            const Icon = icons[index] ?? Rocket;

            return (
              <TextReveal
                key={item.title}
                delay={0.06 * index}
                className="flex items-start gap-4"
              >
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center border border-[#e8defd] bg-[#f8f3ff] text-[#7a58f1] shadow-[0_4px_14px_rgba(122,88,241,0.06)]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-7 text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
