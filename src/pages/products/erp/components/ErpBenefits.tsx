import { erpBenefits } from "../data";
import SectionHeading from "./shared/SectionHeading";

const ErpBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Benefits & Outcomes"
          title="Drive Efficiency, Accuracy & Growth"
          description="Use Zora ERP to improve billing speed, financial visibility and business reliability across operations."
          align="center"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {erpBenefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex items-start gap-4 rounded-[24px] border border-[#F1DFD7] bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(226,74,26,0.12)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1EB] text-[#E24A1A]">
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1B2430]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6B7280]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ErpBenefits;
