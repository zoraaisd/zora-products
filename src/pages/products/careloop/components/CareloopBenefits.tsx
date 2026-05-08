import { careloopBenefits } from "../data";

const CareloopBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-600">
          Benefits & Outcomes
        </p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Benefits For Your Clinic And Your Patients
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {careloopBenefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_48px_rgba(20,184,166,0.12)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareloopBenefits;
