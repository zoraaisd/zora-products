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
        title="SEO & Digital Marketing Services | Zora Global AI"
        description="Technical SEO, content strategy, performance marketing, social media management and lead generation services for business growth."
        canonical="/services/digital-marketing-services"
        serviceSchema={{
          name: "SEO and Digital Marketing Services",
          description:
            "Technical SEO, content strategy, performance marketing, social media and lead generation services for businesses.",
          url: "https://www.zoraai.us/services/digital-marketing-services",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "SEO & Digital Marketing Services",
            path: "/services/digital-marketing-services",
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
