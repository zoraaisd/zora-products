import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import zoraLogo from "../assets/zora-logo-redesign.webp";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const MAP_QUERY = "Zora Global AI Technologies Chennai";
  const HEADQUARTERS_ADDRESS =
    "128 City Road, London, United Kingdom, EC1V 2NX";
  const OFFICE_ADDRESS =
     "No:12,Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu-600096";

  const LINKEDIN_URL =
    "https://www.linkedin.com/company/zora-global-ai-technologies/?viewAsMember=true";
  const YOUTUBE_URL = "https://www.youtube.com/@zoraglobalaitechnologies";
  const TWITTER_URL = "https://x.com/zoraglobalai";
  const FACEBOOK_URL = "https://www.facebook.com/ZoraGlobalAiTechnologies/";
  const EMAIL = "info@zoraglobalai.com";
  const PHONE = "9087000345";
  const TEl_PHONE="044-4625-4744";
  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}`;
  const openMail = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative isolate border-t border-violet-100 bg-[linear-gradient(180deg,#fcfbff_0%,#f7f4ff_100%)] pt-10 text-slate-600">
      {/* Top glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* ✅ MAIN GRID */}
        <div className="grid items-start gap-12 lg:grid-cols-6 lg:gap-10">
          {/* ================================================= */}
          {/* 1️⃣ Company + Contact (NOW SPANS 2 COLUMNS ✅) */}
          {/* ================================================= */}
          <div className="self-start lg:col-span-2">
            <img
              src={zoraLogo}
              alt="Zora Global AI"
              className="-mt-3 -ml-4 mb-4 h-auto w-full max-w-[292px]"
              loading="lazy"
            />

            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-500">
              Empowering enterprises with AI-driven solutions, cloud
              transformation and strategic consulting.
            </p>

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FaMapMarkerAlt className="text-violet-500" />
                  <span>Headquarters</span>
                </h4>
                <p className="max-w-md text-sm leading-6 text-slate-600">
                  {HEADQUARTERS_ADDRESS}
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FaMapMarkerAlt className="text-violet-500" />
                  <span>Regional Office</span>
                </h4>
                <p className="max-w-md text-sm leading-6 text-slate-600">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>

            <h3 className="mb-3 text-lg font-semibold text-slate-900">Contact</h3>

            <div className="space-y-3 text-sm">
              {/* ✅ Gmail (click opens mail) */}
              <a
                href={`mailto:${EMAIL}`}
                onClick={openMail}
                className="flex items-center gap-2 text-slate-500 transition hover:text-violet-600"
              >
                <FaEnvelope className="text-violet-500" />
                <span>{EMAIL}</span>
              </a>

              {/* ✅ Phone (click to call) */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-slate-500 transition hover:text-violet-600"
              >
                <FaPhoneAlt className="text-violet-500" />
                <span>{PHONE}</span>
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-slate-500 transition hover:text-violet-600"
              >
                <FaPhoneAlt className="text-violet-500" />
                <span>{TEl_PHONE}</span>
              </a>

              {/* ✅ Social icons (all clickable) */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition hover:text-violet-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition hover:text-violet-600"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition hover:text-violet-600"
                  aria-label="X"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition hover:text-violet-600"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* 2️⃣ Links Wrapper (NOW SPANS 2 COLUMNS ✅) */}
          {/* ================================================= */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:col-span-2 lg:grid-cols-3 lg:pt-24">
            {/* Company */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="transition hover:text-violet-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="transition hover:text-violet-600"
                  >
                    Services
                  </Link>
                </li>

                {/* ✅ Products should open external site (same as navbar behavior) */}
                <li>
                  <Link to="/products" className="transition hover:text-violet-600">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="text-center lg:text-left">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">Products</h3>
              <ul className="space-y-2 text-sm">
                {/* Keep your existing internal product routes as-is */}
                <li>
                  <Link to="/products#zora-hrms" className="transition hover:text-violet-600">ZORA HRMS</Link>
                </li>
                <li>
                  <Link to="/products#zora-crm" className="transition hover:text-violet-600">ZORA CRM</Link>
                </li>
                <li>
                  <Link to="/products" className="transition hover:text-violet-600">CareLoop</Link>
                </li>
                <li>
                  <Link to="/products" className="transition hover:text-violet-600">Groomvy</Link>
                </li>
                <li>
                  <Link to="/products" className="transition hover:text-violet-600">ERP</Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Solutions
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/services/website-web-application-services"
                    className="transition hover:text-violet-600"
                  >
                    Website Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/business-strategy-consulting"
                    className="transition hover:text-violet-600"
                  >
                    Business Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book-appointment"
                    className="transition hover:text-violet-600"
                  >
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ================================================= */}
          {/* 5️⃣ Location */}
          {/* ================================================= */}
          <div className="lg:col-span-2 lg:pt-24">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Location</h3>

            <div className="overflow-hidden rounded-2xl border border-violet-100 bg-white/70 shadow-[0_14px_32px_rgba(148,163,184,0.1)]">
              <iframe
                title="Zora Global AI Location"
                src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(
                  MAP_QUERY
                )}`}
                className="w-full h-[240px] sm:h-[280px] lg:h-[260px]"
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Zora Global AI Technologies, London and Chennai
            </p>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-violet-100 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Zora Global AI Technologies. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
