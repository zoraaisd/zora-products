import { erpAudiences } from "../data";
import SectionHeading from "./shared/SectionHeading";

const ErpAudience: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Built For Businesses Of All Sizes"
          title="Perfect Billing Solution For Every Industry"
          description="From retail to services and e-commerce, Zora ERP helps teams bill smarter and operate with more control."
          align="center"
        />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {erpAudiences.map(({ title, description, image, icon: Icon }) => (
          <article
            key={title}
            className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_20px_44px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(226,74,26,0.14)]"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative p-6">
              <div className="-mt-12 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D62818] text-white shadow-[0_16px_32px_rgba(214,40,24,0.22)]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#1B2430]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ErpAudience;
