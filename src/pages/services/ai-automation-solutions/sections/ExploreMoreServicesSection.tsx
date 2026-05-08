import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";
import { aiAutomationExploreServices } from "../content";

const ExploreMoreServicesSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="border-t border-[#ece8fb] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal>
          <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
            Explore More Services
          </p>
        </TextReveal>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {aiAutomationExploreServices.map((service, index) => (
            <TextReveal
              key={service.title}
              delay={0.08 * index}
              className="h-full"
            >
              <article className="group mx-auto flex h-full w-full max-w-[348px] flex-col overflow-hidden rounded-[22px] border border-[#ece8fb] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(89,76,160,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_36px_rgba(89,76,160,0.09)] active:-translate-y-0.5 active:border-violet-300 active:shadow-[0_14px_28px_rgba(89,76,160,0.1)]">
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#f7f2ff_0%,#eef2ff_72%,#ffffff_100%)] p-2 transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-[1.02]">
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col text-center">
                  <h3 className="text-[1rem] font-semibold leading-[1.2] tracking-[-0.03em] text-slate-950 sm:text-[1.12rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.92rem] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to={service.href}
                    onClick={scrollTop}
                    className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 self-center rounded-xl border border-[#8b5cf6] px-6 py-2.5 text-sm font-semibold text-violet-600 transition-all duration-300 hover:bg-violet-600 hover:text-white active:scale-[0.98] group-hover:border-violet-600 group-active:bg-violet-600 group-active:text-white"
                  >
                    View Service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreServicesSection;
