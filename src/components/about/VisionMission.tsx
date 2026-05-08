import React from "react";
import TextReveal from "./TextReveal";

const VisionMission: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="relative overflow-hidden rounded-[24px] border border-violet-100 bg-[url('/about/mission_vision_bg.webp')] bg-cover bg-center shadow-[0_24px_70px_rgba(148,163,184,0.14)]">
        <div className="absolute inset-0 bg-violet-950/10" aria-hidden="true" />

        <div className="relative grid min-h-[190px] gap-0 lg:grid-cols-[1.05fr_1fr_1fr_1.05fr]">
          <div className="hidden lg:block" />

          <div className="flex h-full flex-col justify-center border-b border-violet-200/70 bg-white/18 p-6 backdrop-blur-[1px] sm:p-7 lg:border-b-0 lg:border-r lg:px-9 lg:py-7">
            <TextReveal>
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-[2rem]">
                Our Mission
              </h2>
              <p className="mt-4 max-w-[26rem] font-serif text-[15px] italic leading-7 text-slate-800">
                <span
                  aria-hidden="true"
                  className="mr-1 inline-block align-top text-[1.7em] leading-none text-slate-700"
                >
                  &ldquo;
                </span>
                To transform simple ideas into innovative and impactful digital
                solutions that help businesses grow, compete, and succeed in the
                modern world.
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block align-bottom text-[1.7em] leading-none text-slate-700"
                >
                  &rdquo;
                </span>
              </p>
            </TextReveal>
          </div>

          <div className="flex h-full flex-col justify-center bg-white/18 p-6 backdrop-blur-[1px] sm:p-7 lg:px-9 lg:py-7">
            <TextReveal delay={0.12}>
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-[2rem]">
                Our Vision
              </h2>
              <p className="mt-4 max-w-[26rem] font-serif text-[15px] italic leading-7 text-slate-800">
                <span
                  aria-hidden="true"
                  className="mr-1 inline-block align-top text-[1.7em] leading-none text-slate-700"
                >
                  &ldquo;
                </span>
                Empowering businesses to transform from local brands into global
                leaders through continuous innovation and advanced digital
                solutions.
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block align-bottom text-[1.7em] leading-none text-slate-700"
                >
                  &rdquo;
                </span>
              </p>
            </TextReveal>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
