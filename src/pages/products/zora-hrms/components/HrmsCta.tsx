import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const HrmsCta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="flex flex-col gap-6 rounded-[28px] bg-[linear-gradient(135deg,#1F3A5F,#40567a_50%,#6C5DD3)] px-6 py-6 text-white shadow-[0_28px_60px_rgba(31,58,95,0.24)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-black tracking-tight lg:text-3xl">
              Build A More Efficient And Organized Workplace
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Streamline daily HR operations with better visibility, stronger control and the right support for business growth.
            </p>
          </div>
        </div>

        <Link
          to="/book-appointment"
          className="inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#6C5DD3] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F6FA] hover:shadow-[0_16px_32px_rgba(255,255,255,0.18)] lg:self-center"
        >
          Get Started Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default HrmsCta;
