import React from "react";
import { Globe, Layers3, MonitorSmartphone, ShoppingCart } from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { websiteWebAppOverviewCards } from "../content";

const icons = [Globe, MonitorSmartphone, ShoppingCart, Layers3] as const;

const OverviewSection: React.FC = () => {
  return (
    <section
      id="overview"
      className="border border-slate-200/70 bg-[linear-gradient(180deg,#f1f6ff_0%,#dfe9ff_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_420px] lg:items-start lg:gap-12">
        <div>
          <div className="max-w-[760px]">
            <TextReveal>
              <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
                Overview
              </p>
              <h2 className="mt-4 max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
                End-to-End Web Solutions
                <span className="block">Built for Growth</span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.08} className="mt-6 max-w-[760px] space-y-5 text-base leading-8 text-slate-600">
              <p>
                We deliver end-to-end website and web application solutions designed to help startups
                and growing businesses establish a strong digital foundation. Our approach combines
                modern UI/UX design, scalable architecture and performance-driven development to
                build platforms that not only look great but also deliver real business impact.
              </p>
              <p>
                From concept to deployment, we focus on creating fast, secure and user-centric
                digital experiences tailored to your unique business goals. Whether it&apos;s a
                high-converting website, a complex web application or a scalable SaaS platform, our
                solutions are built to grow with your business.
              </p>
            </TextReveal>
          </div>

          <TextReveal delay={0.14} className="mt-10">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
              What We Offer
            </h3>
          </TextReveal>

          <div className="mt-6 grid max-w-[920px] gap-5 md:grid-cols-2">
            {websiteWebAppOverviewCards.map((item, index) => {
              const Icon = icons[index] ?? Globe;

              return (
                <TextReveal
                  key={item.title}
                  delay={0.06 * index}
                  className="border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center bg-violet-50 text-violet-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </TextReveal>
              );
            })}
          </div>
        </div>

        <TextReveal delay={0.12} className="lg:sticky lg:top-36">
          <div className="overflow-hidden border border-slate-200 bg-slate-50 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
            <img
              src="/services/Web_application/webServices.webp"
              alt="Website and web application services"
              className="h-full w-full object-cover"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default OverviewSection;
