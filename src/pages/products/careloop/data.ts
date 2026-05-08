import {
  Activity,
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  MessageCircleMore,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CareloopFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CareloopStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CareloopBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CareloopAudience = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const careloopHero = {
  title: "Digitize. Automate. Care Better.",
  description:
    "Care Loop helps clinics and doctors streamline operations, automate patient communication, manage appointments and grow their practice with a powerful, easy-to-use platform.",
  primaryCta: "Get Started Now",
  secondaryCta: "Book a Demo",
};

export const careloopFeatures: CareloopFeature[] = [
  {
    title: "Patient Management",
    description:
      "Manage patient profiles, visit history, medical records and treatment details in one secure place.",
    icon: UserRound,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Book, reschedule and track appointments easily with a smoother workflow for staff and doctors.",
    icon: CalendarCheck2,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Send appointment reminders, follow-up messages and important updates automatically through WhatsApp.",
    icon: MessageCircleMore,
  },
  {
    title: "Prescription & Reports",
    description:
      "Create prescriptions and share reports quickly while keeping patient records organized and accessible.",
    icon: FileText,
  },
  {
    title: "Subscription Management",
    description:
      "Handle plans, payment tracking, renewals and subscription updates without manual confusion.",
    icon: RefreshCw,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track clinic performance, patient trends and growth insights to make better day-to-day decisions.",
    icon: BarChart3,
  },
];

export const careloopSteps: CareloopStep[] = [
  {
    title: "Clinic Registration",
    description: "Sign up and create your clinic workspace in CareLoop.",
    icon: Users,
  },
  {
    title: "Admin Approval",
    description: "Our team reviews and approves your clinic for secure access.",
    icon: CheckCircle2,
  },
  {
    title: "Choose Plan",
    description: "Select the subscription plan that best matches your clinic's needs.",
    icon: CircleDollarSign,
  },
  {
    title: "Set Up Clinic",
    description: "Add doctors, staff, services and clinic details. Start managing patients.",
    icon: Activity,
  },
  {
    title: "Start Using",
    description: "Manage patients, appointments and communication from day one.",
    icon: Rocket,
  },
];

export const careloopBenefits: CareloopBenefit[] = [
  {
    title: "Reduce Manual Work",
    description:
      "Automate repetitive tasks like appointments, prescriptions and follow-ups to save valuable time and effort.",
    icon: BellRing,
  },
  {
    title: "Improve Communication",
    description:
      "Keep patients informed with automated reminders, updates and instant WhatsApp notifications.",
    icon: MessageCircleMore,
  },
  {
    title: "Better Data Management",
    description:
      "Maintain organized, secure and accessible patient records, prescriptions and reports.",
    icon: ShieldCheck,
  },
  {
    title: "Enhance Patient Satisfaction",
    description:
      "Deliver a faster, more convenient and professional experience that builds trust and loyalty.",
    icon: HeartHandshake,
  },
];

export const careloopAudiences: CareloopAudience[] = [
  {
    title: "Clinics",
    description:
      "Use the platform to manage operations, patients and communication efficiently.",
    icon: Building2,
    image: "/products/careloop/clinic.webp",
  },
  {
    title: "Doctors",
    description:
      "Access patient records, manage appointments and provide prescriptions digitally.",
    icon: Stethoscope,
    image: "/products/careloop/doctor.webp",
  },
  {
    title: "Patients",
    description:
      "Receive prescriptions, appointment updates and communicate with clinics easily.",
    icon: HeartHandshake,
    image: "/products/careloop/patient.webp",
  },
  {
    title: "Admin",
    description:
      "Monitor all clinics, manage subscriptions and control overall system activities.",
    icon: LayoutDashboard,
    image: "/products/careloop/admin.webp",
  },
];
