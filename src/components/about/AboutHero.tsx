import React from "react";
import TextReveal from "./TextReveal";

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h,0px)]">
      <div className="w-full">
        <div className="relative min-h-[500px] overflow-hidden bg-white lg:min-h-[500px]">
          <div className="absolute inset-x-0 top-0 h-72 overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[66%]">
            <img
              src="/about/company.webp"
              alt="Zora Global AI company building"
              className="h-full w-full object-cover object-center lg:object-[54%_center]"
            />
          </div>

          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-transparent to-white lg:hidden" />
          <svg
            className="absolute inset-y-0 left-0 z-10 hidden h-full w-[66%] lg:block"
            viewBox="0 0 760 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="aboutHeroCurve" clipPathUnits="userSpaceOnUse">
                <path d="M0 0H760C672 76 636 168 606 286C576 400 548 464 500 500H0V0Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#aboutHeroCurve)">
              <path d="M0 0H760C672 76 636 168 606 286C576 400 548 464 500 500H0V0Z" fill="white" />
            </g>
          </svg>

          <div className="relative z-20 flex min-h-[500px] items-end px-6 pb-10 pt-80 sm:px-10 lg:min-h-[500px] lg:w-[59%] lg:items-center lg:px-16 lg:py-12">
            <div className="max-w-[36rem]">
              <TextReveal delay={0.1}>
                <h1 className="font-sans text-4xl font-bold leading-[1.2] tracking-[0.01em] text-slate-950 sm:text-5xl lg:text-[2.65rem]">
                  Pioneering AI Solutions.
                  <span className="block text-violet-700">
                    Built on Trust. Driven by Impact.
                  </span>
                </h1>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="mt-6 max-w-[34rem] text-base leading-8 tracking-[0.01em] text-slate-700">
                  At Zora Global AI, we believe artificial intelligence has the
                  power to transform industries, empower people and solve complex
                  challenges. Our mission is to deliver intelligent solutions that
                  create measurable impact for businesses and society.
                </p>
              </TextReveal>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
