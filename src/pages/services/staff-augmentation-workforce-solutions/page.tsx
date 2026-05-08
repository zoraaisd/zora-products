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
        title="Staff Augmentation Services | Zora Global AI"
        description="Flexible workforce and staff augmentation services to help businesses scale teams with qualified professionals and reliable support."
        canonical="/services/staff-augmentation-workforce-solutions"
        serviceSchema={{
          name: "Staff Augmentation Services",
          description:
            "Flexible workforce and staff augmentation services for businesses that need qualified professionals and reliable support.",
          url: "https://www.zoraai.us/services/staff-augmentation-workforce-solutions",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Staff Augmentation Services",
            path: "/services/staff-augmentation-workforce-solutions",
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
