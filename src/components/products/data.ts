import {
  Briefcase,
  Building2,
  ClipboardList,
  CreditCard,
  HeartPulse,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ProductAccent =
  | "violet"
  | "blue"
  | "rose"
  | "teal"
  | "amber"
  | "indigo";

export type ProductItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  accent: ProductAccent;
  icon: LucideIcon;
};

export type ProductReason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const products: ProductItem[] = [
  {
    id: "zora-hrms",
    title: "ZORA HRMS",
    subtitle: "Human Resource Management System",
    description:
      "Streamline HR operations from recruitment to retirement.",
    bullets: [
      "Employee Lifecycle",
      "Payroll & Benefits",
      "Attendance & Leave",
      "Performance",
    ],
    accent: "violet",
    icon: Users,
  },
  {
    id: "zora-crm",
    title: "ZORA CRM",
    subtitle: "Customer Relationship Management System",
    description:
      "Build stronger relationships and deliver exceptional customer experiences.",
    bullets: [
      "Lead Management",
      "Customer 360 View",
      "Sales Automation",
      "Reports & Analytics",
    ],
    accent: "blue",
    icon: Briefcase,
  },
  {
    id: "careloop",
    title: "CARELOOP",
    subtitle: "Healthcare Management System",
    description:
      "Manage patient care seamlessly and improve healthcare outcomes.",
    bullets: [
      "Patient Management",
      "Appointments",
      "Billing & Invoicing",
      "Medical Records",
    ],
    accent: "rose",
    icon: HeartPulse,
  },
  {
    id: "groomvy",
    title: "GROOMVY",
    subtitle: "Salon & Spa Management System",
    description:
      "Manage appointments, staff, inventory and customer loyalty.",
    bullets: [
      "Appointment Management",
      "Staff & Services",
      "Inventory Management",
      "Loyalty & Promotions",
    ],
    accent: "teal",
    icon: Sparkles,
  },
  {
    id: "erp",
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    description:
      "Integrate and manage core business processes across departments.",
    bullets: [
      "Finance & Accounting",
      "Inventory & Supply Chain",
      "Procurement",
      "Business Intelligence",
    ],
    accent: "amber",
    icon: Building2,
  },
];

export const getProductById = (id?: string) =>
  products.find((product) => product.id === id);

export const reasons: ProductReason[] = [
  {
    title: "Enterprise Security",
    description: "Your data is protected with best-in-class security.",
    icon: ShieldCheck,
  },
  {
    title: "Proven Technology",
    description: "Reliable, scalable and built for performance.",
    icon: Layers3,
  },
  {
    title: "Customer-Centric",
    description: "Designed to enhance experiences that matter.",
    icon: Users,
  },
  {
    title: "Dedicated Support",
    description: "Here to help you succeed, every step of the way.",
    icon: ClipboardList,
  },
];

export const accentClasses: Record<ProductAccent, string> = {
  violet:
    "border-violet-100 bg-violet-50 text-violet-700 shadow-[0_18px_38px_rgba(124,58,237,0.08)]",
  blue:
    "border-sky-100 bg-sky-50 text-sky-700 shadow-[0_18px_38px_rgba(59,130,246,0.08)]",
  rose:
    "border-rose-100 bg-rose-50 text-rose-600 shadow-[0_18px_38px_rgba(244,63,94,0.08)]",
  teal:
    "border-teal-100 bg-teal-50 text-teal-700 shadow-[0_18px_38px_rgba(20,184,166,0.08)]",
  amber:
    "border-amber-100 bg-amber-50 text-amber-700 shadow-[0_18px_38px_rgba(245,158,11,0.08)]",
  indigo:
    "border-indigo-100 bg-indigo-50 text-indigo-700 shadow-[0_18px_38px_rgba(99,102,241,0.08)]",
};

export const accentDotClasses: Record<ProductAccent, string> = {
  violet: "bg-violet-500",
  blue: "bg-sky-500",
  rose: "bg-rose-500",
  teal: "bg-teal-500",
  amber: "bg-amber-500",
  indigo: "bg-indigo-500",
};

export const ctaPlaceholderIcon = CreditCard;
