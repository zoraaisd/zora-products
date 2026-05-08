import React from "react";
import TextReveal from "./TextReveal";

const OurStory: React.FC = () => {
  return (
    <section className="mt-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-28 w-28 bg-[radial-gradient(circle,rgba(167,139,250,0.22)_1px,transparent_1px)] bg-[size:10px_10px]" />
          <img
            src="/about/our_story.webp"
            alt="Zora Global AI team story"
            className="relative min-h-[260px] w-[92%] overflow-hidden rounded-[28px] object-cover object-center lg:w-[88%]"
          />
        </div>

        <div>
          <TextReveal>
            <h2 className="font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Our Story
            </h2>
          </TextReveal>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <TextReveal delay={0.08}>
              <p>
                Zora Global AI was founded with a simple idea: make AI
                accessible, actionable and transformative for every business.
              </p>
            </TextReveal>
            <TextReveal delay={0.16}>
              <p>
                What started as a focused technology vision has grown into a
                trusted AI solutions company helping organizations modernize
                operations, improve decision-making and unlock sustainable
                digital growth.
              </p>
            </TextReveal>
            <TextReveal delay={0.24}>
              <p>
                Our journey is built on innovation, collaboration and a
                relentless focus on delivering value through intelligent systems
                that solve real business problems.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
