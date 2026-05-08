import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import CareloopAudience from "./components/CareloopAudience";
import CareloopBenefits from "./components/CareloopBenefits";
import CareloopCta from "./components/CareloopCta";
import CareloopFeatures from "./components/CareloopFeatures";
import CareloopHero from "./components/CareloopHero";
import CareloopWorkflow from "./components/CareloopWorkflow";
import { careloopHero } from "./data";

const CareloopPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      <PageSEO
        title="CareLoop - Clinic Management Platform"
        description={careloopHero.description}
        canonical="/products/careloop"
        serviceSchema={{
          name: "CareLoop",
          description: careloopHero.description,
          url: "https://www.zoraglobalai.com/products/careloop",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "CareLoop", path: "/products/careloop" },
        ]}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 14%, rgba(45,212,191,0.14), transparent 28%),
            radial-gradient(circle at 86% 12%, rgba(99,102,241,0.12), transparent 26%),
            radial-gradient(circle at 50% 88%, rgba(14,165,233,0.10), transparent 30%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <CareloopHero />
        <CareloopFeatures />
        <CareloopWorkflow />
        <CareloopAudience />
        <CareloopBenefits />
        <CareloopCta />
      </div>
    </main>
  );
};

export default CareloopPage;
