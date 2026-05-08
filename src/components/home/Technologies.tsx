import React from "react";
import awsImage from "../../assets/amazonwebservice.webp";
import angularImage from "../../assets/angular.webp";
import dockerImage from "../../assets/doctor.webp";
import azureImage from "../../assets/microsoftazure.webp";
import flutterImage from "../../assets/flutter.webp";
import gcpImage from "../../assets/googlecloudplatform.webp";
import firebaseImage from "../../assets/firebase.webp";
import javaImage from "../../assets/java.webp";
import kubernetesImage from "../../assets/kubernetes.webp";
import nextjsImage from "../../assets/nextjs.webp";
import nodejsImage from "../../assets/nodejs.webp";
import pythonImage from "../../assets/python.webp";
import reactImage from "../../assets/react.svg";

type TechItem = {
  name: string;
  image?: string;
  badge?: string;
  badgeClassName?: string;
};

const TECH_STACK: TechItem[] = [
  { name: "Amazon Web Services", image: awsImage },
  { name: "Microsoft Azure", image: azureImage },
  { name: "Google Cloud Platform", image: gcpImage },
  { name: "Firebase", image: firebaseImage },
  { name: "React", image: reactImage },
  { name: "Next.js", image: nextjsImage },
  { name: "Angular", image: angularImage },
  { name: "Node.js", image: nodejsImage },
  { name: "Python", image: pythonImage },
  { name: "Java", image: javaImage },
  { name: "Flutter", image: flutterImage },
  { name: "Docker", image: dockerImage },
  { name: "Kubernetes", image: kubernetesImage },
];

const TechCard: React.FC<{ tool: TechItem }> = ({ tool }) => (
  <div
    className="relative flex h-[220px] flex-none flex-col overflow-hidden rounded-[22px] sm:h-[240px] sm:rounded-[24px] lg:h-[260px] lg:rounded-[26px]"
    style={{ width: "240px", minWidth: "240px", maxWidth: "240px" }}
  >
    <div className="flex h-full flex-col overflow-hidden rounded-[22px] border border-violet-100 bg-white shadow-[0_18px_50px_rgba(31,41,55,0.08)] sm:rounded-[24px] lg:rounded-[26px]">
      <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-t-[22px] bg-white sm:h-[165px] sm:rounded-t-[24px] lg:h-[180px] lg:rounded-t-[26px]">
        {tool.image ? (
          <img
            src={tool.image}
            alt={tool.name}
            className="absolute inset-0 h-full w-full rounded-t-[22px] object-contain p-6 sm:rounded-t-[24px] sm:p-7 lg:rounded-t-[26px] lg:p-8"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-5 sm:gap-4 sm:px-6">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-[24px] text-2xl font-black shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:h-24 sm:w-24 sm:rounded-[28px] sm:text-3xl ${tool.badgeClassName}`}
            >
              {tool.badge}
            </div>
            <p className="max-w-[180px] text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.18em]">
              {tool.name}
            </p>
          </div>
        )}
      </div>

      <div className="flex h-[70px] items-center justify-center border-t border-violet-100 bg-[#f5efff]/92 px-4 text-center sm:h-[78px] lg:h-[90px]">
        <p className="text-base font-serif font-semibold leading-snug tracking-wide text-slate-900 sm:text-lg lg:text-xl">
          {tool.name}
        </p>
      </div>
    </div>
  </div>
);

const Technologies: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl text-center">
        <style>{`
          @keyframes tech-marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <h2 className="mb-6 text-[clamp(1.2rem,6vw,1.65rem)] font-serif font-bold leading-tight text-slate-950 sm:text-4xl">
          <span className="block sm:hidden">
            <span className="block whitespace-nowrap">Built on a foundation</span>
            <span className="block whitespace-nowrap">of trusted technologies</span>
          </span>
          <span className="hidden sm:inline">
            Built on a foundation of trusted technologies
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-sm leading-7 text-slate-600 sm:mb-14 sm:text-base sm:leading-8">
          We use proven platforms, frameworks and infrastructure tools to
          deliver secure, scalable and future-ready digital solutions.
        </p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
          <div
            className="flex w-max gap-4 sm:gap-6"
            style={{ animation: "tech-marquee-left 58s linear infinite" }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tool, index) => (
              <TechCard key={`${tool.name}-${index}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
