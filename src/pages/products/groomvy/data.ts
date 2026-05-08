import {
  BarChart3,
  ClipboardList,
  Clock3,
  Globe,
  Headset,
  LayoutDashboard,
  Package,
  Receipt,
  Scissors,
  ShieldCheck,
  Store,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type GroomvyFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GroomvyStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GroomvyAudience = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageClassName?: string;
};

export type GroomvyOutcome = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const groomvyHero = {
  badge: "All-in-One Salon & Spa Management",
  title: "Grow Your Salon Business Effortlessly",
  subtitle: "Salon & Spa Management System",
  description:
    "Groomvy is a complete salon management system that streamlines daily operations, enhances customer experience and drives measurable business growth.",
  heroImage: "/hero/groomvy.webp",
  highlights: [
    {
      title: "Easy to Use",
      description: "Intuitive interface",
      icon: Clock3,
    },
    {
      title: "Secure & Reliable",
      description: "Your data is safe",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Support",
      description: "We're here for you",
      icon: Headset,
    },
  ],
};

export const groomvyFeatures: GroomvyFeature[] = [
  {
    title: "Client Management",
    description:
      "Store customer details, visit history, preferences and loyalty insights.",
    icon: UserRound,
  },
  {
    title: "Service Management",
    description:
      "Manage services, pricing, combos and staff-wise assignments.",
    icon: Scissors,
  },
  {
    title: "Smart Billing",
    description:
      "Automate price calculation for services and products with discounts.",
    icon: Receipt,
  },
  {
    title: "Inventory Control",
    description:
      "Track products, stock alerts and purchase management in one place.",
    icon: Package,
  },
  {
    title: "Staff Management",
    description:
      "Manage staff profiles, roles, commissions, attendance and performance.",
    icon: Users,
  },
  {
    title: "Sales & Reports",
    description:
      "Monitor sales, appointments and business performance with clear reports.",
    icon: BarChart3,
  },
  {
    title: "Multilingual Support",
    description:
      "Enable smoother operations with localized experiences for diverse teams.",
    icon: Globe,
  },
  {
    title: "Role-Based Access",
    description:
      "Separate views for owners, managers and staff for better control.",
    icon: LayoutDashboard,
  },
];

export const groomvySteps: GroomvyStep[] = [
  {
    title: "Add / Find Customer",
    description:
      "Register new customers or fetch existing details using phone number.",
    icon: UserRound,
  },
  {
    title: "Select Services & Products",
    description:
      "Choose services and products with instant, accurate pricing.",
    icon: Wallet,
  },
  {
    title: "Generate Bill",
    description:
      "Apply discounts, taxes and service charges automatically.",
    icon: ClipboardList,
  },
  {
    title: "Update Records",
    description:
      "Inventory, sales and customer history update in real time.",
    icon: Package,
  },
  {
    title: "Get Insights",
    description:
      "Review reports and trends to grow revenue and improve operations.",
    icon: TrendingUp,
  },
];

export const groomvyAudiences: GroomvyAudience[] = [
  {
    title: "Salon Owners",
    description: "Digitize operations, improve efficiency and grow revenue.",
    icon: Store,
    image: "/products/groomvy/saloon.webp",
    imageClassName: "object-[center_18%]",
  },
  {
    title: "Spa Managers",
    description: "Coordinate appointments, staff and services seamlessly.",
    icon: ShieldCheck,
    image: "/products/groomvy/salon_manager.webp",
  },
  {
    title: "Multi-Branch Salons",
    description: "Centralize performance tracking and operations across locations.",
    icon: LayoutDashboard,
    image: "/products/groomvy/multi branch saloons.webp",
  },
  {
    title: "Grooming Businesses",
    description: "Support barbershops, grooming studios and beauty centers.",
    icon: Scissors,
    image: "/products/groomvy/grooming_services.webp",
  },
];

export const groomvyOutcomes: GroomvyOutcome[] = [
  {
    title: "Improved Efficiency",
    description: "Automate repetitive daily tasks and save valuable time.",
    icon: TrendingUp,
  },
  {
    title: "Better Customer Experience",
    description: "Deliver faster, more personalized service to every client.",
    icon: UserRound,
  },
  {
    title: "Accurate Records",
    description: "Keep clean customer, inventory and billing data at all times.",
    icon: ClipboardList,
  },
  {
    title: "Data-Driven Decisions",
    description: "Use real-time insights to make better business decisions.",
    icon: BarChart3,
  },
  {
    title: "Increased Revenue",
    description: "Upsell services, improve loyalty and grow your business.",
    icon: Wallet,
  },
  {
    title: "Professional Brand Image",
    description: "Create a modern, polished experience for your customers.",
    icon: Globe,
  },
];
