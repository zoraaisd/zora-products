import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import MissionSection from "./MissionSection";
import ValuesSection from "./ValuesSection";
import TimelineSection from "./TimelineSection";
import TeamSection from "./TeamSection";
import CTASection from "./CTASection";
import Footer from "../layout/Footer";

// Elegant split line divider component
const SplitLine = () => (
  <div className="relative py-8 md:py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative flex items-center justify-center">
        {/* Left gradient line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500/50" />
        
        {/* Center diamond */}
        <div className="mx-4 w-2 h-2 rotate-45 bg-purple-500/60 shadow-lg shadow-purple-500/30" />
        
        {/* Right gradient line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/50" />
      </div>
    </div>
  </div>
);

interface AboutProps {
  onBack: () => void;
  onProduct: () => void;
  onContact: () => void;
  onDocumentation?: () => void;
  onBlog?: () => void;
  onFAQ?: () => void;
  onPrivacy?: () => void;
  onTerms?: () => void;
  onCookie?: () => void;
}

const About = ({ 
  onBack, 
  onProduct, 
  onContact,
  onDocumentation,
  onBlog,
  onFAQ,
  onPrivacy,
  onTerms,
  onCookie
}: AboutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-black text-white overflow-x-hidden min-h-screen flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      <HeroSection onExploreProduct={onProduct} />
      <SplitLine />
      <StatsSection />
      <SplitLine />
      <MissionSection />
      <SplitLine />
      <ValuesSection />
      <SplitLine />
      <TimelineSection />
      <SplitLine />
      <TeamSection />
      <SplitLine />
      <CTASection onContact={onContact} onExploreProduct={onProduct} />
      <Footer 
        onHomeClick={onBack}
        onAboutClick={onBack} 
        onProductClick={onProduct} 
        onContactClick={onContact}
        onDocumentationClick={onDocumentation}
        onBlogClick={onBlog}
        onFAQClick={onFAQ}
        onPrivacyClick={onPrivacy}
        onTermsClick={onTerms}
        onCookieClick={onCookie}
      />
    </motion.div>
  );
};

export default About;
