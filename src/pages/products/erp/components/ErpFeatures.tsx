import { erpFeatures } from "../data";

const ErpFeatures: React.FC = () => {
  return (
    <section id="erp-features" className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-10 xl:grid-cols-[minmax(220px,280px)_1fr] xl:items-start xl:gap-10">
        <div className="max-w-md pt-8 xl:sticky xl:top-28 xl:pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#E24A1A]">
            Features
          </p>
          <h2 className="mt-4 font-serif text-[2rem] font-black leading-tight tracking-tight text-slate-950 sm:text-[2rem] xl:text-[1.8rem]">
            Everything You Need to
            <br />
            Manage Billing Smoothly
          </h2>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {erpFeatures.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="h-full rounded-[28px] border border-[#F1DFD7] bg-white px-6 py-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F3B29B] hover:shadow-[0_24px_48px_rgba(226,74,26,0.12)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1EB] text-[#E24A1A] ring-6 ring-[#FFF8F5]">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-900">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpFeatures;
