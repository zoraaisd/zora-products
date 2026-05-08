import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sitemap from "vite-plugin-sitemap";

const dynamicRoutes = [
  // ── Static pages ──────────────────────────────────────────────
  "/about",
  "/services",
  "/contact",
  "/blog",
  "/book-appointment",

  // ── IT Services ───────────────────────────────────────────────
  "/services/it",

  // Category pages
  "/services/it/website-web-application-services",
  "/services/it/mobile-application-development",
  "/services/it/ai-automation-solutions",
  "/services/it/custom-enterprise-software",
  "/services/it/cloud-infrastructure-services",
  "/services/it/cybersecurity-solutions",

  // Website & Web Application Services — items
  "/services/it/website-web-application-services/website-design-development",
  "/services/it/website-web-application-services/web-application-development",
  "/services/it/website-web-application-services/ecommerce-platform-development",
  "/services/it/website-web-application-services/saas-application-development",

  // Mobile Application Development — items
  "/services/it/mobile-application-development/android-app-development",
  "/services/it/mobile-application-development/ios-app-development",
  "/services/it/mobile-application-development/cross-platform-app-development",

  // AI & Automation Solutions — items
  "/services/it/ai-automation-solutions/chatbot-development",
  "/services/it/ai-automation-solutions/workflow-automation-rpa",
  "/services/it/ai-automation-solutions/recommendation-engine-development",
  "/services/it/ai-automation-solutions/machine-learning-solutions",
  "/services/it/ai-automation-solutions/computer-vision-solutions",
  "/services/it/ai-automation-solutions/aiot-solutions",

  // Custom Enterprise Software — items
  "/services/it/custom-enterprise-software/custom-enterprise-software-development",
  "/services/it/custom-enterprise-software/crm-services",
  "/services/it/custom-enterprise-software/it-staff-augmentation",

  // Cloud & Infrastructure Services — items
  "/services/it/cloud-infrastructure-services/cloud-migration-services",
  "/services/it/cloud-infrastructure-services/application-integrations",

  // Cybersecurity Solutions — items
  "/services/it/cybersecurity-solutions/security-audits",
  "/services/it/cybersecurity-solutions/vulnerability-assessment",
  "/services/it/cybersecurity-solutions/threat-monitoring",
  "/services/it/cybersecurity-solutions/data-protection-compliance",

  // ── Non-IT Services ───────────────────────────────────────────
  "/services/non-it",

  // Category pages
  "/services/non-it/business-strategy-consulting",
  "/services/non-it/staff-augmentation-workforce-solutions",
  "/services/non-it/branding-creative-services",
  "/services/non-it/accounting-financial-operations",
  "/services/non-it/digital-marketing-services",

  // Business & Strategy Consulting — items
  "/services/non-it/business-strategy-consulting/business-process-optimisation",
  "/services/non-it/business-strategy-consulting/operational-efficiency-consulting",
  "/services/non-it/business-strategy-consulting/digital-transformation-consulting",

  // Staff Augmentation & Workforce Solutions — items
  "/services/non-it/staff-augmentation-workforce-solutions/non-it-staff-augmentation",

  // Branding & Creative Services — items
  "/services/non-it/branding-creative-services/brand-identity-positioning",
  "/services/non-it/branding-creative-services/ui-ux-creative-design",
  "/services/non-it/branding-creative-services/creative-assets-marketing-design",
  "/services/non-it/branding-creative-services/website-corporate-content",
  "/services/non-it/branding-creative-services/content-management-support",

  // Accounting & Financial Operations — items
  "/services/non-it/accounting-financial-operations/accounting-management",
  "/services/non-it/accounting-financial-operations/bookkeeping-ledger-handling",
  "/services/non-it/accounting-financial-operations/financial-reporting",
  "/services/non-it/accounting-financial-operations/financial-operations-support",

  // Digital Marketing Services — items
  "/services/non-it/digital-marketing-services/seo-content-growth",
  "/services/non-it/digital-marketing-services/performance-marketing",
  "/services/non-it/digital-marketing-services/social-media-branding",
  "/services/non-it/digital-marketing-services/lead-generation-campaigns",

  // ── Blog posts ────────────────────────────────────────────────
  "/blog/website-development-trends",
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.zoraglobalai.com",
      dynamicRoutes,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
