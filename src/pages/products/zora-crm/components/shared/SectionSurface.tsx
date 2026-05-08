import type { ReactNode } from "react";

type SectionSurfaceProps = {
  children: ReactNode;
  className?: string;
};

const SectionSurface: React.FC<SectionSurfaceProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(148,163,184,0.08)] sm:p-6 lg:rounded-[32px] lg:p-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default SectionSurface;
