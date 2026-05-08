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
        title="Business Strategy Consulting | Zora Global AI"
        description="Strategic consulting, workforce solutions, creative services, financial operations and digital marketing to help businesses grow stronger and smarter."
        canonical="/services/business-strategy-consulting"
        serviceSchema={{
          name: "Business Strategy Consulting",
          description:
            "Strategic consulting and business support services that improve operations, accelerate growth and strengthen execution.",
          url: "https://www.zoraglobalai.com/services/business-strategy-consulting",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Business Strategy Consulting",
            path: "/services/business-strategy-consulting",
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
