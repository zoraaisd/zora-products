import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import GroomvyAudience from "./components/GroomvyAudience";
import GroomvyCta from "./components/GroomvyCta";
import GroomvyFeatures from "./components/GroomvyFeatures";
import GroomvyHero from "./components/GroomvyHero";
import GroomvyOutcomes from "./components/GroomvyOutcomes";
import GroomvyWorkflow from "./components/GroomvyWorkflow";
import { groomvyHero } from "./data";

const GroomvyPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfbff] text-slate-900">
      <PageSEO
        title="Groomvy - Salon & Spa Management System"
        description={groomvyHero.description}
        canonical="/products/groomvy"
        serviceSchema={{
          name: "Groomvy",
          description: groomvyHero.description,
          url: "https://www.zoraglobalai.com/products/groomvy",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Groomvy", path: "/products/groomvy" },
        ]}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 14%, rgba(90,52,31,0.12), transparent 32%),
            radial-gradient(circle at 88% 18%, rgba(47,25,14,0.08), transparent 30%),
            radial-gradient(circle at 48% 86%, rgba(90,52,31,0.10), transparent 34%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <GroomvyHero />
        <GroomvyFeatures />
        <GroomvyWorkflow />
        <GroomvyAudience />
        <GroomvyOutcomes />
        <GroomvyCta />
      </div>
    </main>
  );
};

export default GroomvyPage;
