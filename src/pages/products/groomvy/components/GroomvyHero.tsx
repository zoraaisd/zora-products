import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { groomvyHero } from "../data";

const GroomvyHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl font-black tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
            {groomvyHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            {groomvyHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#groomvy-features"
              className="peer order-2 inline-flex items-center gap-2 rounded-xl border border-[#d9c7be] bg-white px-6 py-3.5 text-sm font-semibold text-[#2F190E] shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-all duration-300 hover:scale-105 hover:border-[#5A341F] hover:bg-[#5A341F] hover:text-white hover:shadow-[0_20px_42px_rgba(90,52,31,0.28)]"
            >
              Explore Features
            </a>
            <Link
              to="/book-appointment"
              className="order-1 inline-flex items-center gap-2 rounded-xl bg-[#5A341F] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(90,52,31,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#2F190E] hover:shadow-[0_24px_48px_rgba(47,25,14,0.30)] peer-hover:bg-white peer-hover:text-[#2F190E]"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="rounded-[36px] border border-[#eadfd8] bg-white/90 p-4 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-5">
          <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(135deg,#ffffff,#f6f3ff)]">
            <img
              src={groomvyHero.heroImage}
              alt="Groomvy dashboard preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomvyHero;
