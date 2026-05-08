import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: "careloop",
    title: "CARELOOP",
    description:
      "Smart healthcare management for clinics and care teams with patient records, scheduling and follow-up visibility.",
    image: "/hero/careloop.webp",
    accent: "Healthcare Platform",
  },
  {
    id: "zora-crm",
    title: "ZORA CRM",
    description:
      "Powerful CRM to manage leads, customers and sales pipelines with clearer reporting and team coordination.",
    image: "/hero/crm.webp",
    accent: "Sales Operations",
  },
  {
    id: "zora-hrms",
    title: "ZORA HRMS",
    description:
      "Centralize attendance, payroll, employee records and workforce workflows in one operational dashboard.",
    image: "/hero/hrms.webp",
    accent: "People Operations",
  },
  {
    id: "erp",
    title: "ERP",
    description:
      "A smart billing software designed for efficient order management, product handling and seamless payment processing.",
    image: "/hero/billing.webp",
    accent: "Business Operations",
  },
  {
    id: "groomvy",
    title: "GROOMVY",
    description:
      "Manage appointments, walk-ins, staff schedules and customer histories for modern salon and spa teams.",
    image: "/hero/groomvy.webp",
    accent: "Service Management",
  },
];

const ProductsShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    const midpoint = Math.floor(products.length / 2);

    if (offset > midpoint) {
      offset -= products.length;
    }

    if (offset < -midpoint) {
      offset += products.length;
    }

    return offset;
  };

  return (
    <section className="relative overflow-hidden bg-[#faf8ff] px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.10),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl rounded-[32px] border border-violet-100 bg-white/95 p-4 shadow-[0_24px_70px_rgba(76,29,149,0.08)] sm:p-6 lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-8">
          <div className="flex w-full max-w-[330px] flex-col items-start gap-6 pt-1 xl:sticky xl:top-24 xl:self-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-500">
                Our Products
              </p>
              <h2 className="mt-4 max-w-none font-serif text-[2.45rem] font-black leading-[1.08] tracking-tight text-slate-950 sm:text-[2.7rem] lg:text-[2.85rem]">
                <span className="block whitespace-nowrap">Innovative</span>
                <span className="block whitespace-nowrap">Products Built</span>
                <span className="block whitespace-nowrap">for Tomorrow</span>
              </h2>
              <p className="mt-5 max-w-none text-[15px] leading-8 text-slate-600">
                <span className="block whitespace-nowrap">
                  Our in-house products are designed
                </span>
                <span className="block whitespace-nowrap">
                  to simplify operations, enhance
                </span>
                <span className="block whitespace-nowrap">
                  engagement and accelerate business growth.
                </span>
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-[13px] font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)] transition-colors hover:bg-violet-700"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative w-full max-w-[760px] xl:ml-auto">
            <div className="pointer-events-none absolute inset-x-[18%] top-8 h-32 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative hidden h-[430px] [perspective:1800px] md:block">
              {products.map((product, index) => {
                const offset = getOffset(index);
                const isActive = offset === 0;
                const isPreview = Math.abs(offset) === 1;
                const isHidden = Math.abs(offset) > 1;

                const transform =
                  offset === 0
                    ? "translateX(-50%) translateY(0px) scale(1) rotateY(0deg)"
                    : offset === -1
                      ? "translateX(calc(-50% - 210px)) translateY(10px) scale(0.82) rotateY(16deg)"
                      : offset === 1
                        ? "translateX(calc(-50% + 210px)) translateY(10px) scale(0.82) rotateY(-16deg)"
                        : "translateX(-50%) translateY(18px) scale(0.72) rotateY(0deg)";

                return (
                  <button
                    type="button"
                    key={product.title}
                    onClick={(event) => {
                      if (!isActive) {
                        event.preventDefault();
                        setActiveIndex(index);
                        return;
                      }
                      navigate(`/products/${product.id}`);
                    }}
                    className="group absolute left-1/2 top-2 flex h-[370px] w-[78%] max-w-[420px] origin-center flex-col rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_18px_46px_rgba(15,23,42,0.10)] transition-all duration-500 ease-out"
                    style={{
                      transform,
                      transformStyle: "preserve-3d",
                      opacity: isHidden ? 0 : isActive ? 1 : 0.54,
                      zIndex: isActive ? 30 : isPreview ? 20 : 10,
                      pointerEvents: isHidden ? "none" : "auto",
                    }}
                  >
                    <div className="relative overflow-hidden rounded-[18px] border border-violet-100 bg-white p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-[16/7.6] w-full rounded-[16px] object-contain bg-white transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>

                    {isActive ? (
                      <div className="flex flex-1 flex-col px-1 pt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                          {product.accent}
                        </p>
                        <h3 className="mt-2.5 text-[1.85rem] font-semibold leading-tight text-slate-900">
                          {product.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                          {product.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                          Learn More
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    ) : (
                      <div className="mt-auto rounded-[18px] border border-white/70 bg-white/88 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                          {product.accent}
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold leading-tight text-slate-900">
                          {product.title}
                        </h3>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="relative md:hidden">
              {products.map((product, index) => {
                if (index !== activeIndex) {
                  return null;
                }

                  return (
                    <button
                      type="button"
                      key={product.title}
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="group flex flex-col rounded-[22px] border border-slate-200 bg-white p-4 text-left shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
                    >
                    <div className="overflow-hidden rounded-[18px] border border-violet-100 bg-white p-0.5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-[16/8] w-full rounded-[16px] object-contain bg-white"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-1 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                        {product.accent}
                      </p>
                      <h3 className="mt-2.5 text-[1.65rem] font-semibold leading-tight text-slate-900">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                        Learn More
                        <ArrowRight size={16} />
                      </span>
                    </div>
                    </button>
                  );
              })}
            </div>

            <div className="relative mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (current) => (current - 1 + products.length) % products.length,
                  )
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-700 shadow-[0_10px_24px_rgba(124,58,237,0.12)] transition-colors hover:bg-violet-50"
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {products.map((product, index) => (
                  <button
                    key={product.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-violet-600"
                        : "w-2.5 bg-violet-200 hover:bg-violet-300"
                    }`}
                    aria-label={`Show ${product.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) => (current + 1) % products.length)
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-700 shadow-[0_10px_24px_rgba(124,58,237,0.12)] transition-colors hover:bg-violet-50"
                aria-label="Next product"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
