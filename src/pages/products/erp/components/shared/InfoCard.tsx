import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: Icon,
  className = "",
  iconClassName = "bg-[#FFF1EB] text-[#E24A1A]",
}) => {
  return (
    <article
      className={`rounded-[24px] border border-[#F1DFD7] bg-white p-6 shadow-[0_18px_38px_rgba(237,111,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(226,74,26,0.12)] ${className}`.trim()}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconClassName}`}>
        <Icon size={20} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#1B2430]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#6B7280]">{description}</p>
    </article>
  );
};

export default InfoCard;
