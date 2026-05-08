import React from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  Search,
  Target,
  Wrench,
} from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { businessStrategyProcessSteps } from "../content";

const icons = [Search, BriefcaseBusiness, Wrench, BarChart3, Target] as const;

const ProcessSection: React.FC = () => {
  return (
    <section className="overflow-hidden border border-[#ece9fb] bg-[linear-gradient(180deg,#ffffff_0%,#fafbff_100%)] px-5 py-8 shadow-[0_14px_34px_rgba(89,76,160,0.03)] sm:px-6 sm:py-10 lg:px-8 lg:py-12 xl:px-10">
      <TextReveal className="mx-auto max-w-[1160px]">
        <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
          How We Deliver
        </p>
        <h2 className="mt-4 max-w-[620px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.35rem] xl:text-[2.55rem]">
          Our Proven Approach
        </h2>
        <p className="mt-4 max-w-[700px] text-base leading-7 text-slate-600 sm:leading-8">
          We follow a structured and collaborative process to understand challenges, shape strategies and deliver measurable business outcomes with clarity at every stage.
        </p>
      </TextReveal>

      <div className="mx-auto mt-8 grid max-w-[1160px] grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:mt-12 xl:grid-cols-5 xl:gap-4">
        {businessStrategyProcessSteps.map((step, index) => {
          const Icon = icons[index] ?? Search;

          return (
            <TextReveal
              key={step.title}
              delay={0.06 * index}
              className="relative flex h-full flex-col items-center rounded-[22px] border border-[#efeafb] bg-white/90 px-5 py-6 text-center shadow-[0_10px_24px_rgba(89,76,160,0.04)] sm:px-6 xl:border-transparent xl:bg-transparent xl:px-2 xl:py-2 xl:shadow-none"
            >
              <div className="relative mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center sm:h-[62px] sm:w-[62px]">
                {index < businessStrategyProcessSteps.length - 1 ? (
                  <div className="absolute left-full top-1/2 hidden h-0 w-[calc(100%+0.75rem)] -translate-y-1/2 xl:block">
                    <div className="w-full border-t border-dotted border-[#d7d0fb]" />
                  </div>
                ) : null}
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#ddd5fb] bg-[linear-gradient(180deg,#ffffff_0%,#fcfbff_100%)] text-[#7057f5] shadow-[0_4px_12px_rgba(112,87,245,0.04)] sm:h-[62px] sm:w-[62px]">
                  <Icon size={20} strokeWidth={1.95} />
                </div>
              </div>
              <h3 className="text-base font-semibold leading-7 text-slate-950 sm:text-[1.02rem]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[24ch] text-sm leading-7 text-slate-600 sm:max-w-[26ch] xl:max-w-[18ch]">
                {step.description}
              </p>
            </TextReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
