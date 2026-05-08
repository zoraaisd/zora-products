import React, { useEffect } from "react";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import CtaSection from "./sections/CtaSection";
import ExploreMoreServicesSection from "./sections/ExploreMoreServicesSection";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import ProcessSection from "./sections/ProcessSection";
import WhyChooseSection from "./sections/WhyChooseSection";

const BusinessStrategyConsultingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white pb-10 pt-20 text-slate-900">
      <PageSEO
        title="Accounting & Financial Operations | Zora Global AI"
        description="Accounting management, bookkeeping, financial reporting, billing and finance operations support for growing businesses."
        canonical="/services/accounting-financial-operations"
        serviceSchema={{
          name: "Accounting and Financial Operations",
          description:
            "Accounting management, bookkeeping, financial reporting, billing and finance operations support for businesses.",
          url: "https://www.zoraai.us/services/accounting-financial-operations",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Accounting & Financial Operations",
            path: "/services/accounting-financial-operations",
          },
        ]}
      />
      <div className="w-full">
        <HeroSection />

        <div className="mt-5 space-y-5 lg:mt-6 lg:space-y-6">
          <OverviewSection />
          <ProcessSection />
          <WhyChooseSection />
          <ExploreMoreServicesSection />
          <CtaSection />
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategyConsultingPage;
