import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import ErpAudience from "./components/ErpAudience";
import ErpBenefits from "./components/ErpBenefits";
import ErpCta from "./components/ErpCta";
import ErpFeatures from "./components/ErpFeatures";
import ErpHero from "./components/ErpHero";
import ErpWorkflow from "./components/ErpWorkflow";
import { erpHero } from "./data";

const ErpPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFFBF9] text-[#1B2430]">
      <PageSEO
        title="ERP - Billing, Payments & Business Operations"
        description={erpHero.description}
        canonical="/products/erp"
        serviceSchema={{
          name: "ERP",
          description: erpHero.description,
          url: "https://www.zoraai.us/products/erp",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "ERP", path: "/products/erp" },
        ]}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 14%, rgba(226,74,26,0.12), transparent 32%),
            radial-gradient(circle at 88% 18%, rgba(249,115,22,0.10), transparent 30%),
            radial-gradient(circle at 48% 86%, rgba(255,217,204,0.30), transparent 34%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <ErpHero />
        <ErpFeatures />
        <ErpWorkflow />
        <ErpAudience />
        <ErpBenefits />
        <ErpCta />
      </div>
    </main>
  );
};

export default ErpPage;
