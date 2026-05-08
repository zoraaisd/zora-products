// src/data/nonItServicesData.ts
export type NonITServiceItem = {
  title: string;
  slug: string;
  shortDesc: string;
  tags: string[];
};

export type NonITServiceCategory = {
  title: string;
  slug: string;
  desc: string;
  items: NonITServiceItem[];
};

export const NON_IT_SERVICE_CATEGORIES: NonITServiceCategory[] = [
  {
    title: "Business & Strategy Consulting",
    slug: "business-strategy-consulting",
    desc: "Strategic advisory to optimize operations, boost efficiency and drive sustainable growth.",
    items: [
      {
        title: "Business Process Optimisation",
        slug: "business-process-optimisation",
        shortDesc:
          "Reduce operational costs, streamline workflows and deliver measurable ROI through ERP and automation.",
        tags: ["ERP", "Workflow Automation", "Process Mapping", "ROI"],
      },
      {
        title: "Operational Efficiency Consulting",
        slug: "operational-efficiency-consulting",
        shortDesc:
          "Eliminate inefficiencies, maximize productivity and implement KPI-driven improvements across operations.",
        tags: ["Process Optimization", "Cost Reduction", "KPIs", "Dashboards"],
      },
      {
        title: "Digital Transformation Consulting",
        slug: "digital-transformation-consulting",
        shortDesc:
          "Modernize processes and technology ecosystems through strategy, cloud, automation, data and AI initiatives.",
        tags: ["Roadmap", "Cloud", "Automation", "Governance"],
      },
    ],
  },

  // ✅ NEW CATEGORY (for your “Non-IT Staff Augmentation” page)
  {
    title: "Staff Augmentation & Workforce Solutions",
    slug: "staff-augmentation-workforce-solutions",
    desc: "Flexible staffing solutions to help businesses scale non-IT teams quickly with qualified professionals.",
    items: [
      {
        title: "Non-IT Staff Augmentation",
        slug: "non-it-staff-augmentation",
        shortDesc:
          "Talent acquisition, manpower services, operational staffing, administrative staffing and customer support hiring.",
        tags: ["Recruitment", "Deployment", "Workforce", "Payroll Support"],
      },
    ],
  },

  {
    title: "Branding & Creative Services",
    slug: "branding-creative-services",
    desc: "Brand identity systems and creative execution that elevate market presence.",
    items: [
      {
        title: "Brand Identity Design",
        slug: "brand-identity-positioning",
        shortDesc:
          "Create distinctive and consistent brand identities with strategy, visual design and scalable guidelines.",
        tags: ["Logo", "Brand Strategy", "Guidelines", "Messaging"],
      },
      {
        title: "UI/UX Design Services",
        slug: "ui-ux-creative-design",
        shortDesc:
          "User-focused digital experiences that improve usability, engagement, conversions and brand perception.",
        tags: ["User Research", "Interface Design", "Usability Testing", "Prototypes"],
      },
      // ✅ NEW ITEMS (based on your content)
      {
        title: "Creative Assets & Marketing Design",
        slug: "creative-assets-marketing-design",
        shortDesc:
          "High-quality creative assets for marketing, branding, UI visuals and multimedia designs.",
        tags: ["Creatives", "UI Assets", "Illustrations", "Multimedia"],
      },
      {
        title: "Website & Corporate Content",
        slug: "website-corporate-content",
        shortDesc:
          "SEO-optimized, brand-aligned website content that ranks higher and converts visitors into customers.",
        tags: ["Copywriting", "SEO", "Blogs", "Landing Pages"],
      },
      {
        title: "Content Management Support",
        slug: "content-management-support",
        shortDesc:
          "End-to-end content management services to organize, publish, maintain and optimize digital content.",
        tags: ["Publishing", "Maintenance", "Governance", "Optimization"],
      },
    ],
  },

  {
    title: "Accounting & Financial Operations",
    slug: "accounting-financial-operations",
    desc: "Reliable financial operations support to improve accuracy, compliance and reporting.",
    items: [
      // ✅ Updated to match your content
      {
        title: "Accounting Management",
        slug: "accounting-management",
        shortDesc:
          "End-to-end accounting management: books, compliance, financial reporting and audit-ready accuracy.",
        tags: ["Bookkeeping", "Compliance", "Reporting", "Ledger"],
      },
      {
        title: "Bookkeeping & Ledger Handling",
        slug: "bookkeeping-ledger-handling",
        shortDesc:
          "Daily transaction recording, ledger maintenance, reconciliations and structured accounting records.",
        tags: ["Journal Entries", "General Ledger", "Reconciliation", "Standards"],
      },
      {
        title: "Financial Reporting",
        slug: "financial-reporting",
        shortDesc:
          "Balance sheets, income statements, cash flow statements, compliance reporting and analysis insights.",
        tags: ["Statements", "Compliance", "Analysis", "GAAP/IFRS"],
      },
      {
        title: "Financial Operations Support",
        slug: "financial-operations-support",
        shortDesc:
          "Billing, e-invoicing, invoice processing, accounts payable and receivable workflows for healthy cash flow.",
        tags: ["Billing", "AP", "AR", "Reconciliation"],
      },
    ],
  },

  {
    title: "Digital Marketing Services",
    slug: "digital-marketing-services",
    desc: "Performance-driven marketing systems engineered for growth and measurable ROI.",
    items: [
      {
        title: "SEO Services",
        slug: "seo-content-growth",
        shortDesc:
          "Technical SEO, on-page optimization, content strategy and ongoing SEO management for sustainable rankings.",
        tags: ["Technical SEO", "On-page", "Keywords", "Growth"],
      },
      {
        title: "Performance Marketing (Google & Meta Ads)",
        slug: "performance-marketing",
        shortDesc:
          "Google Ads + Meta Ads campaigns to generate leads, increase conversions and maximize ROI.",
        tags: ["Google Ads", "Meta Ads", "ROAS", "Funnels"],
      },
      {
        title: "Social Media Management",
        slug: "social-media-branding",
        shortDesc:
          "End-to-end social media management: strategy, content creation, scheduling, engagement and analytics.",
        tags: ["Strategy", "Content", "Community", "Analytics"],
      },
      // ✅ NEW ITEM (your “Lead Generation Campaigns” content)
      {
        title: "Lead Generation Campaigns",
        slug: "lead-generation-campaigns",
        shortDesc:
          "Strategy-led experience approach to drive better product journeys, clarity and conversion-ready design direction.",
        tags: ["Strategy", "UX", "Design Systems", "Execution"],
      },
    ],
  },
];