import React from "react";
import TextReveal from "./TextReveal";
import {
  Lightbulb,
  ShieldCheck,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

const values: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty and ethical practices.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We push boundaries and create intelligent solutions for tomorrow.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "We believe the best outcomes come from working together.",
    icon: Users,
  },
  {
    title: "Impact",
    description:
      "We focus on delivering measurable results that drive real change.",
    icon: Target,
  },
  {
    title: "Excellence",
    description:
      "We are committed to quality, continuous learning and exceeding expectations.",
    icon: Star,
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="mt-12 border-t border-slate-200 pt-9">
      <TextReveal>
        <h2 className="text-center font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-[2.75rem]">
          Our Core Values
        </h2>
      </TextReveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5 xl:gap-0">
        {values.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            className={`group flex flex-col items-center rounded-lg px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:bg-white hover:shadow-[0_18px_42px_rgba(124,58,237,0.18)] ${
              index !== values.length - 1
                ? "xl:border-r xl:border-slate-200"
                : ""
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600 shadow-[0_10px_30px_rgba(196,181,253,0.22)] transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(124,58,237,0.42)]">
              <Icon size={28} />
            </div>
            <TextReveal delay={index * 0.06}>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-6 text-slate-500">
                {description}
              </p>
            </TextReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
