import { hrmsBenefits } from "../data";

const HrmsBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6C5DD3]">
          Benefits & Outcomes
        </p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#1F3A5F] sm:text-4xl">
          Measurable Outcomes For Efficiency, Accuracy and Growth
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hrmsBenefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex items-start gap-4 rounded-[24px] border border-[#e5e1f6] bg-white p-6 shadow-[0_18px_38px_rgba(154,163,178,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(108,93,211,0.12)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1efff] text-[#6C5DD3]">
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1F3A5F]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6B7280]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HrmsBenefits;
