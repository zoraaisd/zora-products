import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { careloopHero } from "../data";

const CareloopHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-40 lg:pb-20 lg:pt-44">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
            {careloopHero.title.split("Care Better.")[0]}
            <span className="text-teal-500">Care Better.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            {careloopHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="peer order-2 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-all duration-300 hover:scale-105 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_20px_42px_rgba(20,184,166,0.28)]"
            >
              {careloopHero.secondaryCta}
            </Link>
            <Link
              to="/book-appointment"
              className="order-1 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(20,184,166,0.22)] transition-all duration-300 hover:scale-105 hover:bg-teal-600 hover:shadow-[0_24px_48px_rgba(13,148,136,0.30)] peer-hover:bg-white peer-hover:text-teal-600"
            >
              {careloopHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
          <img
            src="/hero/careloop.webp"
            alt="CareLoop clinic management platform"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CareloopHero;
