import React from "react";

const GlobalImpact: React.FC = () => {
  const valuePoints = [
    "Enterprise-grade architecture designed for scalability, resilience and security.",
    "AI-powered automation and analytics that improve operational efficiency and accelerate growth.",
  ];

  return (
    <section className="relative isolate mt-0 overflow-hidden bg-transparent pb-16 pt-4 text-slate-900 sm:pb-20 sm:pt-6 md:pb-24 md:pt-8">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(196,181,253,0.24),transparent_58%),radial-gradient(circle_at_80%_80%,rgba(216,180,254,0.2),transparent_58%)]" />
        <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-violet-300/14 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-fuchsia-200/14 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Intelligent Digital Transformation
            </h2>

            <p className="mt-5 text-left text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Zora Global AI Technologies Pvt. Ltd. delivers cutting-edge
              AI-driven solutions, enterprise platforms and scalable digital
              transformation initiatives tailored for modern businesses. Our
              intelligent automation frameworks enable organizations to
              accelerate innovation, enhance agility and maintain a competitive
              edge in an evolving digital landscape.
            </p>

            <p className="mt-4 text-left text-sm font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Zora Global AI Technologies provides{" "}
              <span className="font-extrabold text-violet-700">48+ services</span>{" "}
              within <span className="font-extrabold text-violet-700">48 hours</span>{" "}
              using <span className="font-extrabold text-violet-700">AI automation</span>.
            </p>

            <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
              {valuePoints.map((text, idx) => (
                <p key={idx} className="text-left text-sm leading-7 text-slate-600 sm:text-base">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,180,254,0.20),transparent_60%)] blur-3xl" />
            <div className="relative">
              <img
                src="/global-impact/transformation.webp"
                alt="Digital transformation dashboard preview"
                className="w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
