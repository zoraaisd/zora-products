import React, { useEffect } from "react";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import CtaSection from "./sections/CtaSection";
import ExploreMoreServicesSection from "./sections/ExploreMoreServicesSection";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import ProcessSection from "./sections/ProcessSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import TimelineSection from "./sections/TimelineSection";
import WhyChooseSection from "./sections/WhyChooseSection";

const WebsiteWebApplicationServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white pb-10 pt-20 text-slate-900">
      <PageSEO
        title="Custom App Development for Business | Zora Global AI"
        description="Custom business app development, enterprise software, CRM, ERP and internal platforms built around your workflows and growth goals."
        canonical="/services/custom-enterprise-software"
        serviceSchema={{
          name: "Custom App Development for Business",
          description:
            "Custom business applications, enterprise software, CRM, ERP and internal platforms built for company workflows.",
          url: "https://www.zoraai.us/services/custom-enterprise-software",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Custom App Development",
            path: "/services/custom-enterprise-software",
          },
        ]}
      />
      <div className="w-full">
        <HeroSection />

        <div className="mt-8 space-y-8">
          <OverviewSection />
          <TimelineSection />
          <ProcessSection />
          <TechnologiesSection />
          <WhyChooseSection />
          <ExploreMoreServicesSection />
          <CtaSection />
        </div>
      </div>
    </section>
  );
};

export default WebsiteWebApplicationServicesPage;
