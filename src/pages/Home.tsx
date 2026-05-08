// src/pages/Home.tsx
import PageSEO from "../components/PageSEO";
import {
  Hero,
  EnterpriseDifferentiators,
  Industries,
  Technologies,
  ProductsShowcase,
  DeliveryProcess,
  Cta,
  SectionReveal,
} from "../components/home";

const Home: React.FC = () => {
  return (
    <main className="relative overflow-x-hidden bg-white text-slate-900">
      <PageSEO
        title="Web, Mobile App & SEO Partner | Zora Global AI"
        description="Zora Global AI provides SEO services, website development, mobile app development and custom business applications for companies in India and worldwide."
        canonical="/"
      />
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(192,132,252,0.08),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(167,139,250,0.06),transparent_30%),radial-gradient(circle_at_75%_72%,rgba(96,165,250,0.06),transparent_32%)]" />

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Industries />
        <SectionReveal>
          <ProductsShowcase />
        </SectionReveal>
        <SectionReveal>
          <Technologies />
        </SectionReveal>
        <SectionReveal>
          <DeliveryProcess />
        </SectionReveal>
        <EnterpriseDifferentiators />
        {/* <SectionReveal>
          <Testimonials />
        </SectionReveal> */}
        <SectionReveal>
          <Cta />
        </SectionReveal>
      </div>
    </main>
  );
};

export default Home;
