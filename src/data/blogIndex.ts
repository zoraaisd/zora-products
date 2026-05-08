export interface MockSectionMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  afterParagraph?: number;
  poster?: string;
}

export interface MockBlogSection {
  subtitle: string;
  paragraphs: string[];
  media?: MockSectionMedia[];
}

export interface MockBlogPost {
  slug: string;
  title: string;
  description: string;
  department: string;
  image: string;
  date: string;
  readTime: string;
  sections: MockBlogSection[];
  boldSubtitles?: boolean;
  featured?: boolean;
}

export const mockBlogPosts: MockBlogPost[] = [
  {
    slug: "modern-website-engineering-playbook-2026",
    title: "Modern Website Engineering Playbook for 2026",
    description:
      "A practical blueprint to design, build and optimize websites that improve SEO visibility and conversion rates.",
    department: "Website & Web Application Services",
    image: "/insights/web-application-services.webp",
    date: "2026-03-29",
    readTime: "6 min read",
    sections: [
      {
        subtitle: "Architecture That Scales",
        paragraphs: [
          "Fast, maintainable architectures are now essential for long-term digital growth.",
          "Teams that prioritize component reuse and performance budgets ship features faster.",
        ],
      },
      {
        subtitle: "SEO and UX Together",
        paragraphs: [
          "Search visibility and user experience must be planned together from day one.",
          "Structured content, internal linking and clean page hierarchy improve discoverability.",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-growth-strategies-for-service-brands",
    title: "Mobile App Growth Strategies for Service Brands",
    description:
      "How to build mobile applications that improve retention, engagement and recurring customer interactions.",
    department: "Mobile Application Development",
    image: "/insights/mobile-application-development.webp",
    date: "2026-03-27",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Retention-First Product Design",
        paragraphs: [
          "Mobile experiences should reduce friction for repeat actions and key workflows.",
          "Clear onboarding and focused user journeys improve activation and long-term usage.",
        ],
      },
      {
        subtitle: "Performance and Reliability",
        paragraphs: [
          "Stable app performance directly impacts ratings and user trust.",
          "Monitoring crash-free sessions and load times helps teams improve quality consistently.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-workflows-for-growing-teams",
    title: "AI Automation Workflows for Growing Teams: Where to Start and What to Measure",
    description:
      "Learn how small and mid-sized teams can use AI automation across support, sales and operations without creating process chaos.",
    department: "AI & Automation Solutions",
    image: "/insights/automation-solutions.webp",
    date: "2026-03-24",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Start with Repeatable Tasks",
        paragraphs: [
          "Support triage, lead routing and document handling are ideal first workflows because they are repetitive and easy to measure.",
          "These tasks create quick wins, helping teams build confidence in automation before extending it into more complex business processes.",
        ],
      },
      {
        subtitle: "Build for Reliability First",
        paragraphs: [
          "Simple automations that consistently reduce manual work create stronger impact than complex systems that break frequently.",
          "A stable workflow with clear ownership typically delivers better long-term ROI than advanced automations without monitoring.",
        ],
        media: [
          {
            type: "video",
            src: "",
            poster: "/it-hero/recommendation.webp",
            caption: "Video demo appears here when backend provides a valid URL.",
            afterParagraph: 1,
          },
        ],
      },
      {
        subtitle: "Connect Systems Gradually",
        paragraphs: [
          "After initial success, teams can chain CRM updates, task creation and follow-up actions to remove delays across departments.",
          "Incremental integration lowers risk and gives stakeholders time to validate outcomes at each stage of automation maturity.",
        ],
      },
      {
        subtitle: "Measure Operational Impact",
        paragraphs: [
          "Track time saved, error rates and completion speed to understand whether automation is improving both quality and efficiency.",
          "When metrics are reviewed weekly, teams can spot process drift early and refine automation rules before service quality drops.",
        ],
      },
    ],
  },
  {
    slug: "custom-enterprise-software-roadmap-for-operations-teams",
    title: "Custom Enterprise Software Roadmap for Operations Teams",
    description:
      "A phased approach for building software systems that align with business workflows and reporting needs.",
    department: "Custom Enterprise Software",
    image: "/it-hero/crm.webp",
    date: "2026-03-22",
    readTime: "6 min read",
    sections: [
      {
        subtitle: "Process Mapping Before Development",
        paragraphs: [
          "Successful enterprise builds start with clear workflow mapping and ownership.",
          "Early alignment across stakeholders prevents costly rework during implementation.",
        ],
      },
      {
        subtitle: "Integration-Ready Foundations",
        paragraphs: [
          "Modern enterprise software should connect smoothly with existing systems and tools.",
          "API-first planning improves reporting consistency and cross-team efficiency.",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure-priorities-for-growing-companies",
    title: "Cloud Infrastructure Priorities for Growing Companies",
    description:
      "Core infrastructure decisions that improve uptime, reduce operational risk and support scaling.",
    department: "Cloud & Infrastructure Services",
    image: "/it-hero/cloud-migration.webp",
    date: "2026-03-20",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Right-Sized Cloud Architecture",
        paragraphs: [
          "A right-sized architecture helps control costs while maintaining service reliability.",
          "Capacity planning and observability reduce surprise outages as traffic grows.",
        ],
      },
      {
        subtitle: "Security and Compliance Baselines",
        paragraphs: [
          "Infrastructure security must be embedded through policy, access control and monitoring.",
          "Compliance-ready configurations simplify audits and reduce long-term risk.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-controls-every-scaling-business-needs",
    title: "Cybersecurity Controls Every Scaling Business Needs",
    description:
      "A focused checklist of controls to protect systems, customer data and internal operations.",
    department: "Cybersecurity Solutions",
    image: "/it-hero/data-protection.webp",
    date: "2026-03-19",
    readTime: "6 min read",
    sections: [
      {
        subtitle: "Proactive Threat Monitoring",
        paragraphs: [
          "Continuous monitoring enables faster detection and response to suspicious activity.",
          "Early detection reduces downtime and limits business impact during incidents.",
        ],
      },
      {
        subtitle: "Access and Data Protection",
        paragraphs: [
          "Strong identity controls and encryption policies are foundational for secure growth.",
          "Regular access reviews help organizations minimize exposure from stale permissions.",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-playbook-for-service-businesses",
    title: "Digital Marketing Playbook for Service Businesses in 2026",
    description:
      "A focused playbook for building predictable lead flow through content strategy, performance campaigns and conversion-ready landing pages.",
    department: "Digital Marketing Services",
    image: "/it-hero/crm.webp",
    date: "2026-03-18",
    readTime: "7 min read",
    boldSubtitles: true,
    sections: [
      {
        subtitle: "Intent-Led Content Strategy",
        paragraphs: [
          "Top-performing teams publish content around real buyer questions and map each article to a focused next step.",
          "This approach improves lead intent because readers move from educational content into service pages that match their exact pain points.",
        ],
        media: [
          {
            type: "image",
            src: "/it-hero/content-writing.jpg",
            alt: "Content strategy planning board",
            caption: "Intent-led content planning improves conversion quality across the funnel.",
            afterParagraph: 0,
          },
        ],
      },
      {
        subtitle: "Landing Pages that Convert",
        paragraphs: [
          "Single-goal landing pages with clear proof points and frictionless forms consistently outperform generic service pages.",
          "High-converting pages also reduce decision fatigue by limiting distractions and reinforcing one clear conversion path.",
        ],
        media: [
          {
            type: "image",
            src: "/it-hero/website.webp",
            alt: "High-converting service landing page layout",
            caption: "Conversion-ready pages keep messaging and call-to-action tightly aligned.",
            afterParagraph: 1,
          },
        ],
      },
      {
        subtitle: "Creative and Funnel Alignment",
        paragraphs: [
          "Campaigns improve when ad messaging, page content and follow-up sequences are tested as one connected journey.",
          "When messaging stays consistent from ad click to email follow-up, trust increases and conversion cycles become shorter.",
        ],
        media: [
          {
            type: "image",
            src: "/it-hero/crm.webp",
            alt: "Campaign and funnel alignment dashboard",
            caption: "Consistent messaging across ad, page and follow-up increases trust.",
            afterParagraph: 0,
          },
        ],
      },
      {
        subtitle: "Balanced Multi-Channel Growth",
        paragraphs: [
          "Combining SEO, paid media and lifecycle nurturing protects lead flow and reduces dependence on a single acquisition source.",
          "A balanced channel mix also gives businesses more control when platform costs rise or algorithm changes affect visibility.",
        ],
      },
    ],
  },
  {
    slug: "business-strategy-frameworks-for-service-expansion",
    title: "Business Strategy Frameworks for Service Expansion",
    description:
      "How leadership teams can prioritize services, markets and operating models for predictable growth.",
    department: "Business & Strategy Consulting",
    image: "/it-hero/custom-software.webp",
    date: "2026-03-16",
    readTime: "7 min read",
    sections: [
      {
        subtitle: "Opportunity Prioritization",
        paragraphs: [
          "Growth planning works best when opportunities are ranked by impact and feasibility.",
          "Clear prioritization helps teams focus on high-value initiatives first.",
        ],
      },
      {
        subtitle: "Execution and Governance",
        paragraphs: [
          "Strategy only creates value when execution ownership is clearly assigned.",
          "Regular review cadences keep decisions aligned with business outcomes.",
        ],
      },
    ],
  },
  {
    slug: "brand-positioning-systems-for-modern-service-companies",
    title: "Brand Positioning Systems for Modern Service Companies",
    description:
      "A guide to building clear brand positioning, voice and creative consistency across channels.",
    department: "Branding & Creative Services",
    image: "/it-hero/website.webp",
    date: "2026-03-14",
    readTime: "5 min read",
    sections: [
      {
        subtitle: "Positioning That Differentiates",
        paragraphs: [
          "Strong positioning communicates why your service is different and relevant.",
          "Clear messaging reduces confusion and improves conversion quality.",
        ],
      },
      {
        subtitle: "Consistent Creative Systems",
        paragraphs: [
          "Design consistency across web, social and sales assets strengthens recall.",
          "A reusable creative system helps teams move faster without losing brand identity.",
        ],
      },
    ],
  },
  {
    slug: "finance-operations-workflows-for-growing-businesses",
    title: "Finance Operations Workflows for Growing Businesses",
    description:
      "Practical frameworks for managing bookkeeping, reporting and financial operations at scale.",
    department: "Accounting & Financial Operations",
    image: "/it-hero/crm.webp",
    date: "2026-03-12",
    readTime: "6 min read",
    sections: [
      {
        subtitle: "Month-End Process Discipline",
        paragraphs: [
          "Reliable month-end close processes improve visibility for leadership decisions.",
          "Standardized workflows reduce errors and speed up financial reporting cycles.",
        ],
      },
      {
        subtitle: "Operational Reporting Clarity",
        paragraphs: [
          "Clear financial dashboards help teams track profitability and cost efficiency.",
          "Aligned reporting definitions improve trust in numbers across departments.",
        ],
      },
    ],
  },
];

export const blogIndex = mockBlogPosts.map((post) => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  date: post.date,
  readTime: post.readTime,
  category: post.department,
  featured: Boolean(post.featured),
}));
