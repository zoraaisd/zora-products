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
        title="Website Development & SEO Services | Zora Global AI"
        description="SEO-friendly website development, web application development, e-commerce platforms and SaaS products for growing businesses."
        canonical="/services/website-web-application-services"
        serviceSchema={{
          name: "Website Development and SEO Services",
          description:
            "SEO-friendly website development, web application development, e-commerce platforms and SaaS products for businesses.",
          url: "https://www.zoraglobalai.com/services/website-web-application-services",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Website Development & SEO Services",
            path: "/services/website-web-application-services",
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
