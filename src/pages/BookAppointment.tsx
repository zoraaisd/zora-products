import React, { useEffect } from "react";
import PageSEO from "../components/PageSEO";

const BookAppointment: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fcfbff] px-6 pb-20 pt-28 text-slate-900">
      <PageSEO
        title="Book a Free Consultation | Zora Global AI"
        description="Schedule a free consultation with Zora Global AI to plan your SEO, website development, mobile app or custom business application."
        canonical="/book-appointment"
      />

      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 18%, rgba(196,181,253,0.24), transparent 42%),
            radial-gradient(circle at 86% 16%, rgba(216,180,254,0.22), transparent 40%),
            radial-gradient(circle at 50% 88%, rgba(191,219,254,0.2), transparent 45%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-6 font-serif text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Book a <span className="text-violet-600">Consultation</span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg leading-9 text-slate-600">
          Schedule a strategic consultation with our experts to explore AI-driven
          transformation and business growth solutions.
        </p>

        <div className="rounded-[28px] border border-violet-100 bg-white p-10 shadow-[0_26px_60px_rgba(139,92,246,0.12)] md:p-14">
          <h2 className="mb-4 font-serif text-3xl font-black text-violet-700">
            Free 30-Minute Consultation
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-slate-600">
            Choose a convenient time slot and connect with our team to discuss your
            business needs.
          </p>

          <a
            href="https://calendly.com/zoraglobalai/30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[linear-gradient(90deg,#7c3aed,#8b5cf6,#6d28d9)] px-8 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(124,58,237,0.24)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
