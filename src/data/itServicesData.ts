// src/data/itServicesData.ts

export type ServiceItem = {
  slug: string; // ✅ added
  title: string;
  description: string;
  features: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  desc: string;
  items: ServiceItem[];
};

export const IT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "website-web-application-services",
    title: "Website & Web Application Services",
    desc: "Scalable, secure and high-performance web solutions tailored to modern business needs.",
    items: [
      {
        slug: "website-design-development",
        title: "Website Design & Development",
        description: "Modern, responsive and SEO-optimized websites built for growth.",
        features: [
          "UI/UX Design",
          "Responsive Development",
          "SEO-Friendly Architecture",
          "Performance Optimization",
          "CMS Integration",
        ],
      },
      {
        slug: "web-application-development",
        title: "Web Application Development",
        description: "Secure and scalable web applications for business operations.",
        features: [
          "Custom Web App Development",
          "API Integration",
          "Authentication & Authorization",
          "Scalable Architecture",
          "Performance Optimization",
        ],
      },
      {
        slug: "ecommerce-platform-development",
        title: "E-Commerce Platform Development",
        description: "Conversion-focused and secure e-commerce platforms.",
        features: [
          "Custom Storefront Development",
          "Payment Gateway Integration",
          "Order & Inventory Management",
          "Security & Compliance",
          "Performance Optimization",
        ],
      },
      {
        slug: "saas-application-development",
        title: "SaaS Application Development",
        description: "Cloud-native SaaS platforms engineered for scale.",
        features: [
          "Multi-Tenant Architecture",
          "Subscription & Billing Systems",
          "Cloud-Native Design",
          "Security & Compliance",
          "CI/CD Pipelines",
        ],
      },
    ],
  },

  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "High-performance mobile applications for Android, iOS and cross-platform environments.",
    items: [
      {
        slug: "android-app-development",
        title: "Android App Development",
        description: "Scalable Android applications with superior performance.",
        features: [
          "Native Android Development",
          "API Integration",
          "Performance Optimization",
          "Play Store Deployment",
          "App Security",
        ],
      },
      {
        slug: "ios-app-development",
        title: "iOS App Development",
        description: "Premium iOS applications for Apple devices.",
        features: [
          "Native iOS Development",
          "App Store Deployment",
          "Performance Optimization",
          "Security Best Practices",
          "API Integration",
        ],
      },
      {
        slug: "cross-platform-app-development",
        title: "Cross-Platform App Development",
        description: "Single codebase apps for iOS and Android.",
        features: [
          "Cross-Platform Architecture",
          "Reusable Components",
          "API Integration",
          "Performance Optimization",
          "App Store Deployment",
        ],
      },
    ],
  },

  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    desc: "Intelligent systems that automate processes and enable data-driven decisions.",
    items: [
      {
        slug: "chatbot-development",
        title: "Chatbot Development",
        description: "Conversational AI for customer engagement.",
        features: [
          "Natural Language Processing",
          "Omnichannel Deployment",
          "CRM Integration",
          "Analytics & Insights",
          "Custom Training",
        ],
      },
      {
        slug: "workflow-automation-rpa",
        title: "Workflow Automation & RPA",
        description: "Automated workflows for operational efficiency.",
        features: [
          "Process Automation",
          "Bot Development",
          "System Integration",
          "Monitoring & Optimization",
          "Compliance Handling",
        ],
      },
      {
        slug: "recommendation-engine-development",
        title: "Recommendation Engine Development",
        description: "Personalized recommendation systems.",
        features: [
          "Data Modeling",
          "Behavioral Analysis",
          "Algorithm Design",
          "Real-Time Processing",
          "Scalable Deployment",
        ],
      },
      {
        slug: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        description: "Predictive and intelligent ML systems.",
        features: [
          "Predictive Modeling",
          "Model Training",
          "Data Engineering",
          "Deployment & Monitoring",
          "Optimization",
        ],
      },
      {
        slug: "computer-vision-solutions",
        title: "Computer Vision Solutions",
        description: "Visual intelligence for automation.",
        features: [
          "Image Recognition",
          "Object Detection",
          "Video Analytics",
          "Model Training",
          "Edge Deployment",
        ],
      },
      {
        slug: "aiot-solutions",
        title: "AIoT Solutions",
        description: "AI-powered IoT intelligence.",
        features: [
          "IoT Integration",
          "AI Analytics",
          "Real-Time Monitoring",
          "Edge Computing",
          "Scalable Architecture",
        ],
      },
    ],
  },

  // ✅ UPDATED to match your NEW slugs used in itServiceItemContent.ts
  {
    slug: "custom-enterprise-software",
    title: "Custom Enterprise Software",
    desc: "Enterprise-grade software solutions built for complex business needs.",
    items: [
      {
        slug: "custom-enterprise-software-development",
        title: "Custom Enterprise Software Development",
        description: "Enterprise CRM, ERP, HRMS and internal systems.",
        features: [
          "Enterprise CRM & Business Applications",
          "ERP & Process Automation",
          "HRMS & Internal Management Systems",
          "Secure & Scalable Architecture",
          "DevOps-Driven Delivery",
        ],
      },
      {
        slug: "crm-services",
        title: "CRM Services",
        description: "Customer relationship management platforms.",
        features: [
          "Sales CRM Solutions",
          "Marketing Automation CRM",
          "Customer Support CRM",
          "CRM Customization & Setup",
          "Deployment & Continuous Improvement",
        ],
      },
      {
        slug: "it-staff-augmentation",
        title: "IT Staff Augmentation",
        description: "Scale teams with expert developers.",
        features: [
          "Software & Application Developers",
          "Mobile App Development Teams",
          "Specialized Engineering Talent",
          "Rapid Onboarding",
          "Flexible Engagement Models",
        ],
      },
    ],
  },

  // ✅ UPDATED to match your NEW slugs used in itServiceItemContent.ts
  {
    slug: "cloud-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable and cost-optimized cloud solutions.",
    items: [
      {
        slug: "cloud-migration-services",
        title: "Cloud Migration Services",
        description: "Secure migration to AWS, Azure and Google Cloud.",
        features: [
          "Application Migration",
          "Data & Database Migration",
          "Infrastructure Modernization",
          "Cloud Readiness & Strategy",
          "Performance & Cost Optimization",
        ],
      },
      {
        slug: "application-integrations",
        title: "Application Integrations",
        description: "Connect enterprise systems and automate workflows.",
        features: [
          "API & Third-Party Integrations",
          "Enterprise System Integration",
          "Process Automation & Data Flow",
          "Monitoring & Continuous Improvement",
          "Secure & Scalable Integrations",
        ],
      },
    ],
  },
];
