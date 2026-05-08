import {
  BarChart3,
  CheckCheck,
  ClipboardList,
  Mail,
  MessageCircleMore,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CrmFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CrmStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CrmAudience = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type CrmBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const crmHero = {
  badge: "All-in-One CRM Platform",
  title: "Manage Relationships. Close More Deals.",
  subtitle: "Customer Relationship Management System",
  description:
    "Zora CRM helps you capture leads, manage pipelines and build lasting customer relationships in one centralized, easy-to-use platform.",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Features",
};

export const crmHighlights = [
  "Lead Management",
  "Customer 360 View",
  "Sales Automation",
  "Reports & Analytics",
];

export const crmFeatures: CrmFeature[] = [
  {
    title: "Lead Management",
    description: "Capture, assign and nurture leads from multiple channels in one organized flow.",
    icon: User,
  },
  {
    title: "Contact Management",
    description: "Maintain detailed customer profiles and interaction history for stronger follow-up.",
    icon: Users,
  },
  {
    title: "Sales Pipeline",
    description: "Track every opportunity stage clearly so teams can focus on conversion momentum.",
    icon: TrendingUp,
  },
  {
    title: "Task & Activity Tracking",
    description: "Stay on top of calls, follow-ups, reminders and next actions across the sales cycle.",
    icon: ClipboardList,
  },
  {
    title: "Email & Messaging",
    description: "Manage outreach, updates and customer conversations without scattered tools.",
    icon: Mail,
  },
  {
    title: "Reports & Analytics",
    description: "Use real-time dashboards and reports to measure performance and improve decisions.",
    icon: BarChart3,
  },
  {
    title: "Workflow Automation",
    description: "Reduce repetitive work with smart automations for routing, reminders and updates.",
    icon: RefreshCw,
  },
  {
    title: "Team Collaboration",
    description: "Keep sales, marketing and support aligned with shared visibility into customer activity.",
    icon: MessageCircleMore,
  },
];

export const crmSteps: CrmStep[] = [
  {
    title: "Capture Leads",
    description: "Collect and organize leads from forms, referrals, campaigns and inbound inquiries.",
    icon: User,
  },
  {
    title: "Qualify & Track",
    description: "Score and segment opportunities so teams can prioritize the right deals faster.",
    icon: CheckCheck,
  },
  {
    title: "Nurture & Engage",
    description: "Follow up with timely communication, notes, reminders and pipeline updates.",
    icon: MessageCircleMore,
  },
  {
    title: "Close Deals",
    description: "Move opportunities through each stage with better visibility and coordinated actions.",
    icon: Target,
  },
  {
    title: "Retain & Grow",
    description: "Turn customers into long-term relationships with ongoing engagement and insight.",
    icon: TrendingUp,
  },
];

export const crmAudiences: CrmAudience[] = [
  {
    title: "Sales Teams",
    description: "Manage leads, follow-ups, proposals and conversion pipelines in one system.",
    icon: TrendingUp,
    image: "/products/crm/sales-teams.webp",
  },
  {
    title: "Marketing Teams",
    description: "Track lead sources, campaign quality and handoff performance with better visibility.",
    icon: Target,
    image: "/products/crm/marketing.webp",
  },
  {
    title: "Customer Support",
    description: "Access complete customer context to resolve issues faster and improve satisfaction.",
    icon: MessageCircleMore,
    image: "/products/crm/customer-support.webp",
  },
  {
    title: "Business Owners",
    description: "Monitor team performance, sales health and customer activity through real-time dashboards.",
    icon: ShieldCheck,
    image: "/products/crm/business-owner.webp",
  },
];

export const crmBenefits: CrmBenefit[] = [
  {
    title: "Increase Sales",
    description: "Improve follow-up consistency and pipeline clarity so more opportunities convert into revenue.",
    icon: TrendingUp,
  },
  {
    title: "Improve Productivity",
    description: "Save time with centralized records, task automation and simpler team workflows.",
    icon: RefreshCw,
  },
  {
    title: "Better Relationships",
    description: "Build trust with organized communication history and stronger customer visibility.",
    icon: Users,
  },
  {
    title: "Data-Driven Insights",
    description: "Use reporting and dashboards to understand sales trends and guide smarter decisions.",
    icon: BarChart3,
  },
  {
    title: "Stronger Team Alignment",
    description: "Give sales, marketing and support a shared view of customer activity to reduce handoff gaps and confusion.",
    icon: MessageCircleMore,
  },
  {
    title: "Better Follow-Up Consistency",
    description: "Standardize reminders, task tracking and next steps so no important opportunity gets missed.",
    icon: CheckCheck,
  },
];
