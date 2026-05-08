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
        title="AI Automation Solutions | Zora Global AI"
        description="AI automation, chatbot development, workflow automation and machine learning solutions for businesses that need smarter operations."
        canonical="/services/ai-automation-solutions"
        serviceSchema={{
          name: "AI Automation Solutions",
          description:
            "AI automation, chatbot development, workflow automation and machine learning solutions for businesses.",
          url: "https://www.zoraai.us/services/ai-automation-solutions",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "AI Automation Solutions",
            path: "/services/ai-automation-solutions",
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
