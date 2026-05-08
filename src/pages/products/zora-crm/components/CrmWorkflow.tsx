import { crmSteps } from "../data";

const CrmWorkflow: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
      <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#4c1d95,#6d28d9_54%,#7c3aed)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(76,29,149,0.24)] lg:px-10 lg:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ede9fe]">
            How It Works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl">
            A Simple Process To Manage Relationships Better
          </h2>
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-9 hidden border-t border-dashed border-white/30 xl:block" />
          {crmSteps.map(({ title, description }, index) => (
            <article
              key={title}
              className="relative text-center"
            >
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-white/10 bg-white text-xl font-black text-violet-700 shadow-[0_14px_32px_rgba(0,0,0,0.18)]">
                {index + 1}
              </div>
              <p className="mt-6 text-sm font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-7 text-[#f3efff]/85">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmWorkflow;
