import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import CrmBenefits from "./components/CrmBenefits";
import CrmAudience from "./components/CrmAudience";
import CrmCta from "./components/CrmCta";
import CrmFeatures from "./components/CrmFeatures";
import CrmHero from "./components/CrmHero";
import CrmWorkflow from "./components/CrmWorkflow";
import { crmHero } from "./data";

const ZoraCrmPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfbff] text-slate-900">
      <PageSEO
        title="ZORA CRM - Manage Relationships, Close More Deals"
        description={crmHero.description}
        canonical="/products/zora-crm"
        serviceSchema={{
          name: "ZORA CRM",
          description: crmHero.description,
          url: "https://www.zoraglobalai.com/products/zora-crm",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "ZORA CRM", path: "/products/zora-crm" },
        ]}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 14%, rgba(196,181,253,0.22), transparent 32%),
            radial-gradient(circle at 88% 18%, rgba(191,219,254,0.16), transparent 30%),
            radial-gradient(circle at 48% 86%, rgba(233,213,255,0.16), transparent 34%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <CrmHero />
        <CrmFeatures />
        <CrmWorkflow />
        <CrmAudience />
        <CrmBenefits />
        <CrmCta />
      </div>
    </main>
  );
};

export default ZoraCrmPage;
