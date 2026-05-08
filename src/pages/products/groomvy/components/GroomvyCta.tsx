import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const GroomvyCta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="flex flex-col gap-6 rounded-[28px] bg-[linear-gradient(135deg,#2F190E,#4a2a19_50%,#5A341F)] px-6 py-6 text-white shadow-[0_28px_60px_rgba(47,25,14,0.24)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-black tracking-tight lg:text-3xl">
              Ready to Transform Your Salon Operations?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Join Groomvy and simplify the way you manage appointments, billing,
              staff and customer experiences.
            </p>
          </div>
        </div>
        <Link
          to="/book-appointment"
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#5A341F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f1ed] hover:shadow-[0_16px_32px_rgba(255,255,255,0.18)] lg:self-center"
        >
          Book a Demo
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default GroomvyCta;
