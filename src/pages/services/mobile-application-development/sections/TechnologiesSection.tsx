import React from "react";
import TextReveal from "../../../../components/about/TextReveal";
import awsImage from "../../../../assets/amazonwebservice.webp";
import dockerImage from "../../../../assets/doctor.webp";
import firebaseImage from "../../../../assets/firebase.webp";
import flutterImage from "../../../../assets/flutter.webp";
import javaImage from "../../../../assets/java.webp";
import azureImage from "../../../../assets/microsoftazure.webp";
import nextjsImage from "../../../../assets/nextjs.webp";
import nodejsImage from "../../../../assets/nodejs.webp";
import pythonImage from "../../../../assets/python.webp";
import reactImage from "../../../../assets/react.svg";

type TechnologyCard = {
  name: string;
  image: string;
};

const technologyCards: TechnologyCard[] = [
  { name: "React", image: reactImage },
  { name: "Next.js", image: nextjsImage },
  { name: "Node.js", image: nodejsImage },
  { name: "Firebase", image: firebaseImage },
  { name: "Python", image: pythonImage },
  { name: "Java", image: javaImage },
  { name: "Flutter", image: flutterImage },
  { name: "Azure", image: azureImage },
  { name: "AWS", image: awsImage },
  { name: "Docker", image: dockerImage },
];

const TechnologiesSection: React.FC = () => {
  return (
    <section className="overflow-hidden border border-[#ece8fb] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-5 py-8 shadow-[0_10px_30px_rgba(89,76,160,0.04)] sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal className="max-w-[760px] pt-1">
          <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
            Technologies We Use
          </p>
          <h2 className="mt-4 max-w-[560px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
            Modern Technologies for Modern Solutions
          </h2>
          <p className="mt-4 max-w-[620px] text-base leading-8 text-slate-600">
            We leverage the latest technologies and frameworks to build fast, secure and
            future-ready applications.
          </p>
        </TextReveal>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            {technologyCards.map((technology, index) => (
              <TextReveal
                key={technology.name}
                delay={0.04 * index}
                className="flex min-h-[104px] items-center justify-center rounded-[18px] border border-[#f0ecfb] bg-[#fdfcff] px-3 py-4 shadow-[0_4px_14px_rgba(96,83,160,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(96,83,160,0.06)] sm:min-h-[98px] sm:px-4 md:min-h-[96px] lg:min-h-[92px]"
              >
                <div className="flex w-full flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
                  <img
                    src={technology.image}
                    alt={technology.name}
                    className="h-8 w-auto max-w-[58px] object-contain sm:h-9 sm:max-w-[68px]"
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="text-sm font-semibold leading-5 text-slate-950 sm:text-base">
                    {technology.name}
                  </span>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
