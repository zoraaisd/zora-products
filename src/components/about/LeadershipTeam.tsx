import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import TextReveal from "./TextReveal";

const contactEmail = "info@zoraglobalai.com";

const openMail = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactEmail
  )}`;
  window.open(composeUrl, "_blank", "noopener,noreferrer");
};

const LeadershipTeam: React.FC = () => {
  return (
    <section className="mt-14 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <TextReveal>
          <h2 className="text-3xl font-serif font-black tracking-tight text-slate-950 sm:text-4xl">
            Our Leadership Team
          </h2>
        </TextReveal>

        <TextReveal delay={0.08}>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Vision-driven leaders shaping the future of AI innovation, enterprise
            transformation and global digital growth.
          </p>
        </TextReveal>
      </div>

      <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-6 items-stretch">
        <div className="relative group">
          <div className="absolute -inset-1 bg-violet-200 rounded-[24px] blur-xl opacity-50 group-hover:opacity-80 transition" />

          <div className="relative h-full flex flex-col bg-white border border-violet-100 rounded-[24px] p-6 text-center transform group-hover:-translate-y-2 transition duration-500 shadow-[0_18px_44px_rgba(148,163,184,0.14)]">
            <div className="relative w-32 h-32 mx-auto mb-5 flex items-center justify-center">
              <div className="absolute inset-0 bg-violet-200/80 blur-2xl rounded-full" />
              <img
                src="/founders/md.webp"
                alt="Managing Director"
                className="w-full h-full object-cover object-center rounded-full border border-violet-200 shadow-[0_16px_34px_rgba(124,58,237,0.2)] relative"
              />
            </div>

            <TextReveal delay={0.08}>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Dr. Adv. S. Ansar Ali
              </h3>
              <p className="text-violet-600 mb-3 text-sm">
                Managing Director
              </p>
            </TextReveal>

            <TextReveal delay={0.16}>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leads operational excellence and execution strategy, ensuring
                delivery precision, innovation continuity and long-term enterprise
                partnerships while driving sustainable organizational growth and
                performance excellence across global initiatives.
              </p>
            </TextReveal>

            <div className="mt-auto pt-5 flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/dransarali/"
                target="_blank"
                rel="noreferrer"
                aria-label="MD LinkedIn"
                className="text-slate-500 hover:text-violet-700 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/Adv_Dr_S_Ansar"
                target="_blank"
                rel="noreferrer"
                aria-label="MD X"
                className="text-slate-500 hover:text-violet-700 transition"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                onClick={openMail}
                aria-label="MD Email"
                className="cursor-pointer text-slate-500 hover:text-violet-700 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-violet-200 rounded-[24px] blur-xl opacity-50 group-hover:opacity-80 transition" />

          <div className="relative h-full flex flex-col bg-white border border-violet-100 rounded-[24px] p-6 text-center transform group-hover:-translate-y-2 transition duration-500 shadow-[0_18px_44px_rgba(148,163,184,0.14)]">
            <div className="relative w-32 h-32 mx-auto mb-5 flex items-center justify-center pl-3">
              <div className="absolute inset-0 bg-violet-200/80 blur-2xl rounded-full" />
              <img
                src="/founders/ceo.webp"
                alt="CEO"
                className="w-full h-full object-cover object-left rounded-full border border-violet-200 shadow-[0_16px_34px_rgba(124,58,237,0.2)] relative"
              />
            </div>

            <TextReveal delay={0.08}>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                S. Ashik Ali
              </h3>
              <p className="text-violet-600 mb-3 text-sm">
                Chief Executive Officer
              </p>
            </TextReveal>

            <TextReveal delay={0.16}>
              <p className="text-slate-600 text-sm leading-relaxed">
                Driving strategic vision and innovation while leading enterprise
                AI transformation through scalable intelligent systems and
                future-focused technology leadership.
              </p>
            </TextReveal>

            <div className="mt-auto pt-5 flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/ashik-ali-1775b6185?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="CEO LinkedIn"
                className="text-slate-500 hover:text-violet-700 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/AshikAli676774"
                target="_blank"
                rel="noreferrer"
                aria-label="CEO Twitter"
                className="text-slate-500 hover:text-violet-700 transition"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                onClick={openMail}
                aria-label="CEO Email"
                className="cursor-pointer text-slate-500 hover:text-violet-700 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10" />
    </section>
  );
};

export default LeadershipTeam;
