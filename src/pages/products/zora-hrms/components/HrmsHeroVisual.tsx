const HrmsHeroVisual: React.FC = () => {
  return (
    <div className="rounded-[36px] border border-[#E5E7EB] bg-white/90 p-4 shadow-[0_28px_70px_rgba(154,163,178,0.16)] lg:p-5">
      <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[linear-gradient(135deg,#ffffff,#f5f6fa)]">
        <img
          src="/hero/hrms.webp"
          alt="HRMS dashboard interface preview"
          className="w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default HrmsHeroVisual;
