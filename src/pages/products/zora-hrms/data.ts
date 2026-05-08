import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCheck,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  Globe,
  LayoutDashboard,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type HrmsFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrmsStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrmsAudience = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type HrmsBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hrmsHero = {
  title: "Empowering People. Driving Performance.",
  subtitle: "Smart HR, Stronger Workplace",
  description:
    "A smart HRMS that digitalizes and simplifies HR processes. Manage your workforce efficiently while saving time and boosting overall productivity.",
  primaryCta: "Get Started Now",
  secondaryCta: "Book a Demo",
};

export const hrmsHighlights = [ 
  "Centralized Data",
  "Automated Workflows",
  "Real-time Insights",
  "Secure & Compliant",
];

export const hrmsFeatures: HrmsFeature[] = [
  {
    title: "Employee Management",
    description:
      "Manage employee profiles, documents and organizational details in one place.",
    icon: UserRound,
  },
  {
    title: "Attendance Tracking",
    description:
      "Track attendance with biometric, geo-location and shift management.",
    icon: ClipboardCheck,
  },
  {
    title: "Payroll Processing",
    description:
      "Automate payroll, salary slips, tax handling and compliance tasks.",
    icon: FileSpreadsheet,
  },
  {
    title: "Leave Management",
    description:
      "Handle leave applications, approvals, balances and holiday calendars.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Recruitment Management",
    description:
      "Manage job posts, applicants, interviews and offer letters with ease.",
    icon: Users,
  },
  {
    title: "Performance Evaluation",
    description:
      "Set goals, track progress, conduct reviews and manage appraisals.",
    icon: Target,
  },
  {
    title: "HR Analytics & Reports",
    description:
      "Use reports and dashboards for better HR decisions and workforce insights.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access",
    description:
      "Control access securely so the right people see the right data.",
    icon: Lock,
  },
];

export const hrmsSteps: HrmsStep[] = [
  {
    title: "Centralized Data",
    description:
      "Store all employee information securely in one place.",
    icon: Database,
  },
  {
    title: "Automated Processes",
    description:
      "Automate attendance, payroll, leave, recruitment and HR tasks.",
    icon: Sparkles,
  },
  {
    title: "Approvals & Workflows",
    description:
      "Manage requests and approvals through simple workflows.",
    icon: CheckCheck,
  },
  {
    title: "Insights & Reports",
    description:
      "Use dashboards and analytics for clear, real-time insights.",
    icon: LineChart,
  },
  {
    title: "Better Decisions",
    description:
      "Make better HR decisions with accurate data and insights.",
    icon: LayoutDashboard,
  },
];

export const hrmsUseCases: HrmsAudience[] = [
  {
    title: "HR Departments",
    description:
      "Streamline HR tasks and manage the entire employee lifecycle.",
    icon: Users,
    image: "/products/hrms/hr.webp",
  },
  {
    title: "Managers",
    description:
      "Monitor team attendance, performance and productivity.",
    icon: UserCog,
    image: "/products/hrms/managers.webp",
  },
  {
    title: "Administrators",
    description:
      "Manage system settings, users, roles and organizational policies.",
    icon: ShieldCheck,
    image: "/products/hrms/administrators.webp",
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Affordable and scalable solution to manage growing teams.",
    icon: Building2,
    image: "/products/hrms/small-medium-business.webp",
  },
  {
    title: "Large Enterprises",
    description:
      "Handle complex HR operations across multiple departments and locations.",
    icon: Globe,
    image: "/products/hrms/large-enterprise.webp",
  },
  {
    title: "Remote & Hybrid Teams",
    description:
      "Access HRMS anytime, anywhere and stay connected.",
    icon: BriefcaseBusiness,
    image: "/products/hrms/remote-hybrid.webp",
  },
];

export const hrmsBenefits: HrmsBenefit[] = [
  {
    title: "Improved Efficiency",
    description:
      "Automate attendance, payroll and leave tasks to reduce manual work and improve efficiency.",
    icon: Sparkles,
  },
  {
    title: "Enhanced Data Accuracy",
    description:
      "Maintain accurate employee records with centralized data and automated updates.",
    icon: Database,
  },
  {
    title: "Time Savings",
    description:
      "Save time with automation, faster approvals and streamlined workflows.",
    icon: CheckCheck,
  },
  {
    title: "Better Decision-Making",
    description:
      "Use analytics and reports to make informed HR and business decisions.",
    icon: LineChart,
  },
  {
    title: "Compliance & Security",
    description:
      "Protect employee data and stay compliant with policies and regulations.",
    icon: ShieldCheck,
  },
  {
    title: "Higher Productivity",
    description:
      "Boost productivity with efficient tools, clearer workflows and reduced workload.",
    icon: BarChart3,
  },
];
