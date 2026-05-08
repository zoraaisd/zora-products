import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  className?: string;
  badge?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: Icon,
  iconClassName = "bg-[#E6E1F7] text-[#6C5DD3]",
  className = "",
  badge,
}) => {
  return (
    <article
      className={`rounded-[22px] border border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-[0_12px_28px_rgba(154,163,178,0.06)] lg:rounded-[24px] ${className}`.trim()}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClassName}`}>
          <Icon size={22} />
        </div>
        {badge ? <span className="text-sm font-bold text-[#6C5DD3]">{badge}</span> : null}
      </div>
      <h3 className="mt-4 text-base font-bold text-[#1F3A5F] sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#6B7280]">{description}</p>
    </article>
  );
};

export default InfoCard;
