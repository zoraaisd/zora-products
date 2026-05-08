import React, { useEffect } from "react";
import PageSEO from "../components/PageSEO";
import {
  AboutHero,
  OurStory,
  CoreValues,
  VisionMission,
  LeadershipTeam,
  AboutCTA,
} from "../components/about";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#fcfbff] text-slate-900">
      <PageSEO
        title="About Zora Global AI | Web, Mobile App & SEO Team"
        description="Learn about Zora Global AI, a technology team helping businesses grow with SEO-ready websites, mobile apps and custom business software."
        canonical="/about"
      />

      <div
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 18%, rgba(196,181,253,0.24), transparent 46%),
            radial-gradient(circle at 88% 12%, rgba(191,219,254,0.24), transparent 45%),
            radial-gradient(circle at 52% 90%, rgba(233,213,255,0.22), transparent 55%)
          `,
        }}
      />

      <div
        className="absolute left-1/2 top-0 -z-30 h-[900px] w-[900px] -translate-x-1/2 animate-[spin_55s_linear_infinite] rounded-full blur-[190px]"
        style={{
          background: "radial-gradient(circle, rgba(216,180,254,0.22), transparent 62%)",
        }}
      />

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.3]" />

      <AboutHero />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <OurStory />
        <CoreValues />
        <VisionMission />
        <LeadershipTeam />
        <AboutCTA />
      </div>
    </section>
  );
};

export default About;
