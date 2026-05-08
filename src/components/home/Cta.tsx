import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";

const Cta: React.FC = () => {
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#7c3aed,#8b5cf6,#6d28d9)] px-6 py-8 text-white shadow-[0_24px_60px_rgba(124,58,237,0.22)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionReveal>
              <h2 className="font-serif text-3xl font-black tracking-tight sm:text-4xl">
                Ready to Discuss Your Next Big Idea?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-100 sm:text-base">
                Book an appointment with our team to plan your SEO, website,
                mobile app or custom business application with a clear roadmap.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal className="md:flex md:justify-end">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-[0_14px_28px_rgba(49,46,129,0.18)] transition-colors hover:bg-violet-50"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Cta;
