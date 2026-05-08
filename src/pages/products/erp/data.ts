import {
  BarChart3,
  BellRing,
  Boxes,
  CreditCard,
  FileSpreadsheet,
  ReceiptIndianRupee,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  UserCog,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type ErpFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ErpStep = {
  title: string;
  description: string;
};

export type ErpAudience = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type ErpBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const erpHero = {
  badge: "All-in-One Billing Solution",
  title: "Simplify Billing. Grow Your Business.",
  subtitle: "Enterprise Resource Planning",
  description:
    "Zora ERP helps you create invoices, manage payments, track expenses and automate operational workflows in one streamlined business platform.",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Features",
  heroImage: "/hero/billing.webp",
};

export const erpHighlights = [
  "Create Invoices In Seconds",
  "Automate Payments & Reminders",
  "Real-time Financial Insights",
];

export const erpFeatures: ErpFeature[] = [
  {
    title: "Invoice Management",
    description: "Create, send and manage invoices with templates and status tracking.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Payment Tracking",
    description: "Track payments and reconcile customer transactions with less manual follow-up.",
    icon: CreditCard,
  },
  {
    title: "Automated Reminders",
    description: "Reduce overdue payments with reminders and scheduled notifications.",
    icon: BellRing,
  },
  {
    title: "Expense Management",
    description: "Record and monitor expenses to keep books organized and clear.",
    icon: Wallet,
  },
  {
    title: "Tax & Compliance",
    description: "Support tax-ready invoicing and documentation for compliance needs.",
    icon: FileSpreadsheet,
  },
  {
    title: "Reports & Analytics",
    description: "Use reports to track cash flow, collections and performance.",
    icon: BarChart3,
  },
  {
    title: "Multi-User Access",
    description: "Let teams collaborate securely with role-based visibility.",
    icon: UserCog,
  },
  {
    title: "Secure & Reliable",
    description: "Protect business data with secure access and dependable workflows.",
    icon: ShieldCheck,
  },
];

export const erpSteps: ErpStep[] = [
  {
    title: "Add Details",
    description: "Enter customer, service, inventory or billing details in one place.",
  },
  {
    title: "Create Invoice",
    description: "Generate invoices quickly using structured data and templates.",
  },
  {
    title: "Send & Track",
    description: "Share invoices and track approvals and payment status in real time.",
  },
  {
    title: "Receive Payments",
    description: "Track collections, confirm receipts and manage balances easily.",
  },
  {
    title: "Analyze & Grow",
    description: "Review reports and improve billing and financial decisions.",
  },
];

export const erpAudiences: ErpAudience[] = [
  {
    title: "Retail Businesses",
    description: "Manage sales, invoices and customer billing with better speed and visibility.",
    image: "/products/erp/retail.webp",
    icon: ShoppingCart,
  },
  {
    title: "Service Providers",
    description: "Bill clients accurately, track outstanding payments and simplify recurring invoicing.",
    image: "/products/erp/service.webp",
    icon: UserCog,
  },
  {
    title: "E-commerce Stores",
    description: "Coordinate invoices orders, refunds and inventory-linked business workflows in one place.",
    image: "/products/erp/bill.webp",
    icon: Boxes,
  },
  {
    title: "Freelancers & Consultants",
    description: "Create polished invoices, manage expenses and monitor cash flow without heavy systems.",
    image: "/products/erp/freelancers.webp",
    icon: ReceiptIndianRupee,
  },
];

export const erpBenefits: ErpBenefit[] = [
  {
    title: "Save Time",
    description: "Automate repetitive billing and finance tasks so teams can focus on more valuable work.",
    icon: Wallet,
  },
  {
    title: "Reduce Errors",
    description: "Minimize manual mistakes through structured invoicing, tracked updates and cleaner records.",
    icon: ShieldCheck,
  },
  {
    title: "Improve Cash Flow",
    description: "Track payments, reminders and outstanding invoices to improve collection consistency.",
    icon: TrendingUp,
  },
  {
    title: "Better Financial Control",
    description: "Gain clearer visibility into revenue, expenses and payment activity across the business.",
    icon: BarChart3,
  },
  {
    title: "Increase Productivity",
    description: "Centralize billing, reporting and coordination so teams spend less time switching tools.",
    icon: UserCog,
  },
  {
    title: "Happy Customers",
    description: "Deliver timely invoices, professional communication and smoother payment experiences.",
    icon: CreditCard,
  },
];
