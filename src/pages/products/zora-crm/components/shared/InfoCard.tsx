import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  badge?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: Icon,
  className = "",
  iconClassName = "bg-violet-50 text-violet-600",
  badge,
}) => {
  return (
    <article
      className={`rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(148,163,184,0.06)] lg:rounded-[24px] ${className}`.trim()}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClassName}`}>
          <Icon size={22} />
        </div>
        {badge ? <span className="text-sm font-bold text-violet-600">{badge}</span> : null}
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
};

export default InfoCard;
