const CrmHeroVisual: React.FC = () => {
  return (
    <div className="rounded-[36px] border border-violet-100 bg-white/90 p-4 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-5">
      <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(135deg,#ffffff,#f6f3ff)]">
        <img
          src="/hero/crm.webp"
          alt="Zora CRM dashboard interface preview"
          className="w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CrmHeroVisual;
