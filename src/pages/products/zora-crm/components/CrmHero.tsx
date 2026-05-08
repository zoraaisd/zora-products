import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { crmHero } from "../data";
import CrmHeroVisual from "./CrmHeroVisual";

const CrmHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
            Manage Relationships.
            <br />
            <span className="text-violet-600">Close More Deals.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            {crmHero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#crm-features"
              className="peer order-2 inline-flex items-center gap-2 rounded-xl border border-[#ece7fb] bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-all duration-300 hover:scale-105 hover:border-violet-600 hover:bg-violet-600 hover:text-white hover:shadow-[0_20px_42px_rgba(124,58,237,0.28)]"
            >
              {crmHero.secondaryCta}
            </a>
            <Link
              to="/book-appointment"
              className="order-1 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-all duration-300 hover:scale-105 hover:bg-violet-700 hover:shadow-[0_24px_48px_rgba(124,58,237,0.30)] peer-hover:bg-white peer-hover:text-violet-700"
            >
              {crmHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <CrmHeroVisual />
      </div>
    </section>
  );
};

export default CrmHero;
