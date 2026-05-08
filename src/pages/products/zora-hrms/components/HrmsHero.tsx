import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HrmsHeroVisual from "./HrmsHeroVisual";
import { hrmsHero } from "../data";

const HrmsHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl font-black tracking-tight text-[#1F3A5F] md:text-5xl lg:text-[3.15rem]">
            {hrmsHero.title.split("Driving ")[0]}
            <br />
            Driving <span className="text-[#6C5DD3]">Performance.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#6B7280]">
            {hrmsHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#hrms-features"
              className="peer order-2 inline-flex items-center gap-2 rounded-xl border border-[#d9d5f3] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F3A5F] shadow-[0_14px_30px_rgba(154,163,178,0.08)] transition-all duration-300 hover:scale-105 hover:border-[#6C5DD3] hover:bg-[#6C5DD3] hover:text-white hover:shadow-[0_20px_42px_rgba(108,93,211,0.28)]"
            >
              Explore Features
            </a>
            <Link
              to="/book-appointment"
              className="order-1 inline-flex items-center gap-2 rounded-xl bg-[#6C5DD3] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(108,93,211,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#5a4dc0] hover:shadow-[0_24px_48px_rgba(108,93,211,0.30)] peer-hover:bg-white peer-hover:text-[#1F3A5F]"
            >
              {hrmsHero.secondaryCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <HrmsHeroVisual />
      </div>
    </section>
  );
};

export default HrmsHero;
