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

const MobileApplicationDevelopmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white pb-24 pt-20 text-slate-900">
      <PageSEO
        title="Mobile App Development Services | Zora Global AI"
        description="Custom Android, iOS and cross-platform mobile app development for businesses that need secure, scalable and user-friendly applications."
        canonical="/services/mobile-application-development"
        serviceSchema={{
          name: "Mobile App Development Services",
          description:
            "Custom Android, iOS and cross-platform mobile application development for growing businesses.",
          url: "https://www.zoraai.us/services/mobile-application-development",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Mobile App Development Services",
            path: "/services/mobile-application-development",
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

export default MobileApplicationDevelopmentPage;
