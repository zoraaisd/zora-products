import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { erpHero } from "../data";
import ErpHeroVisual from "./ErpHeroVisual";

const ErpHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl font-black tracking-tight text-[#1B2430] md:text-5xl lg:text-[3.15rem]">
            Simplify Billing.
            <br />
            <span className="text-[#D62818]">Grow Your Business.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#6B7280]">
            {erpHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#erp-features"
              className="peer order-2 inline-flex items-center gap-2 rounded-xl border border-[#F1DFD7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1B2430] shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-all duration-300 hover:scale-105 hover:border-[#E24A1A] hover:bg-[#E24A1A] hover:text-white hover:shadow-[0_20px_42px_rgba(226,74,26,0.28)]"
            >
              {erpHero.secondaryCta}
            </a>
            <Link
              to="/book-appointment"
              className="order-1 inline-flex items-center gap-2 rounded-xl bg-[#D62818] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(214,40,24,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#b91c1c] hover:shadow-[0_24px_48px_rgba(185,28,28,0.30)] peer-hover:bg-white peer-hover:text-[#D62818]"
            >
              {erpHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <ErpHeroVisual />
      </div>
    </section>
  );
};

export default ErpHero;
