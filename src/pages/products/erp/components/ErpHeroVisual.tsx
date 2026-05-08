const ErpHeroVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute inset-x-[10%] -top-6 h-24 rounded-full bg-[#FFD9CC]/70 blur-3xl sm:-top-8 sm:h-28"
        aria-hidden="true"
      />
      <div className="rounded-[36px] border border-[#F1DFD7] bg-white/90 p-4 shadow-[0_28px_70px_rgba(154,163,178,0.16)] lg:p-5">
        <div className="overflow-hidden rounded-[28px] border border-[#F3E7E2] bg-[linear-gradient(135deg,#ffffff,#fff8f5)]">
          <img
            src="/hero/billing.webp"
            alt="ERP billing dashboard preview"
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default ErpHeroVisual;
