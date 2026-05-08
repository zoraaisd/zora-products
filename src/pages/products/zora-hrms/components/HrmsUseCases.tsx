import { hrmsUseCases } from "../data";

const HrmsUseCases: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6C5DD3]">
          Who It's For
        </p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#1F3A5F] sm:text-4xl">
          Built For HR Teams, Managers and Modern Organizations
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {hrmsUseCases.map(({ title, description, icon: Icon, image }) => (
          <article
            key={title}
            className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_20px_44px_rgba(154,163,178,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(108,93,211,0.14)]"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative p-6">
              <div className="-mt-12 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C5DD3] text-white shadow-[0_16px_32px_rgba(108,93,211,0.26)]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#1F3A5F]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HrmsUseCases;
