// src/pages/ContactPage.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle,
  User,
  PencilLine,
} from "lucide-react";
import PageSEO from "../components/PageSEO";
import DocumentHead from "../components/DocumentHead";

const ContactPage: React.FC = () => {
  const EMAIL = "info@zoraglobalai.com";
  const PHONE = "9087000345";
  const OFFICE_ADDRESS =
    "Ground Floor, 12, Rajiv Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu 600096";
  const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/${encodeURIComponent(
    OFFICE_ADDRESS
  )}`;
  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}`;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setNameError("Only letters and spaces are allowed");
      return;
    }
    setName(value.slice(0, 30));
    setNameError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setPhoneError("Only numbers are allowed");
      return;
    }
    setPhone(value.slice(0, 10));
    setPhoneError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/\s/g, "");

    if (!/^[a-zA-Z0-9@.]*$/.test(sanitizedValue)) {
      setEmailError("Only letters, numbers, @ and . are allowed");
      return;
    }

    const atCount = (sanitizedValue.match(/@/g) || []).length;
    if (atCount > 1) {
      setEmailError("Only one @ symbol is allowed");
      return;
    }

    setEmail(sanitizedValue);

    if (!sanitizedValue) {
      setEmailError("");
      return;
    }

    if (!/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/.test(sanitizedValue)) {
      setEmailError("Enter a valid email address");
      return;
    }

    setEmailError("");
  };

  const openMail = () => {
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
  };

  const openPhoneDialpad = () => {
    window.location.href = `tel:+91${PHONE}`;
  };

  const openGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameError || phoneError || emailError || !name || !phone || !email) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/mpqjodrv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setNameError("");
        setPhoneError("");
        setEmailError("");
        e.currentTarget.reset();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: EMAIL,
      description: "Send us an email anytime!",
      color: "from-violet-600 to-purple-600",
      action: openMail,
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9087000345",
      description: "Mon-Sat from 9am to 7pm.",
      color: "from-violet-600 to-purple-600",
      action: openPhoneDialpad,
    },
    {
      icon: MapPin,
      title: "Office",
      details: OFFICE_ADDRESS,
      description: "",
      color: "from-violet-600 to-purple-600",
      action: openGoogleMaps,
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-[#17124a]">
      <PageSEO
        title="Contact Us - Get in Touch | Zora Global AI"
        description="Contact Zora Global AI to discuss SEO, website development, mobile app development or custom business app projects. Our team responds within 24 hours."
        canonical="/contact"
      />
      <DocumentHead
        scripts={[
          {
            type: "application/ld+json",
            content: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Zora Global AI",
              url: "https://www.zoraglobalai.com",
              logo: "https://www.zoraglobalai.com/logo.webp",
              email: "info@zoraglobalai.com",
              telephone: "+91-9087000345",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ground Floor, 12, Rajiv Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600096",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9087000345",
                contactType: "customer service",
                email: "info@zoraglobalai.com",
                hoursAvailable: "Mo-Fr 08:00-17:00",
                availableLanguage: "English",
              },
              sameAs: ["https://www.linkedin.com/company/zora-global-ai"],
            }),
          },
        ]}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_58%,#ffffff_100%)]" />
        <div className="absolute left-[-120px] top-28 h-[380px] w-[380px] rounded-full bg-violet-100/60 blur-[120px]" />
        <div className="absolute right-[-120px] top-64 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-[130px]" />
        <div className="absolute inset-x-0 top-[470px] h-48 opacity-45 [background-image:radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.16)_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-5 pt-20 md:px-6 md:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="max-w-[620px] font-serif text-3xl font-black leading-[1.08] tracking-tight text-[#17124a] sm:text-4xl lg:whitespace-nowrap lg:text-[2.85rem]">
              Have Some{" "}
              <span className="bg-gradient-to-r from-violet-700 to-sky-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>

            <img
              src="/contact/contact2.webp"
              alt="Contact support illustration"
              className="mt-8 w-full max-w-[520px] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[24px] border border-violet-100 bg-white/90 p-5 shadow-[0_28px_90px_rgba(44,36,116,0.10)] backdrop-blur md:p-6"
          >
            {submitSuccess ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-6 h-16 w-16 text-emerald-500" />
                <h2 className="text-3xl font-black text-[#17124a]">
                  Message Sent!
                </h2>
                <p className="mt-3 text-slate-600">Thank you for reaching out!</p>
                <p className="mt-2 text-lg font-semibold text-violet-700">
                  Our team will reach you soon
                </p>
                <motion.button
                  onClick={() => setSubmitSuccess(false)}
                  whileHover={{ scale: 1.03 }}
                  className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                >
                  Send Another Message
                </motion.button>
              </div>
            ) : (
              <>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Send className="h-6 w-6" />
                  </div>
                  <h2 className="font-serif text-2xl font-black tracking-tight text-[#17124a]">
                    Send Us a Message
                  </h2>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#55527d]">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77749a]" />
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleNameChange}
                          maxLength={30}
                          required
                          className="h-11 w-full rounded-lg border border-[#dddff0] bg-white pl-11 pr-4 text-[#17124a] placeholder:text-[#8b88aa] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          placeholder="Enter your name"
                        />
                      </div>
                      {nameError && (
                        <p className="mt-1 text-xs text-red-500">{nameError}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#55527d]">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77749a]" />
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={handlePhoneChange}
                          inputMode="numeric"
                          maxLength={10}
                          required
                          className="h-11 w-full rounded-lg border border-[#dddff0] bg-white pl-11 pr-4 text-[#17124a] placeholder:text-[#8b88aa] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          placeholder="Mobile number"
                        />
                      </div>
                      {phoneError && (
                        <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#55527d]">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77749a]" />
                        <input
                          type="email"
                          name="email"
                          value={email}
                          required
                          onKeyDown={(e) => {
                            if (e.key === " ") e.preventDefault();
                          }}
                          onChange={handleEmailChange}
                          className="h-11 w-full rounded-lg border border-[#dddff0] bg-white pl-11 pr-4 text-[#17124a] placeholder:text-[#8b88aa] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                          placeholder="Enter your email"
                        />
                      </div>
                      {emailError && (
                        <p className="mt-1 text-xs text-red-500">{emailError}</p>
                      )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#55527d]">
                      Your Message
                    </label>
                    <div className="relative">
                      <PencilLine className="pointer-events-none absolute left-4 top-5 h-4 w-4 text-[#77749a]" />
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full resize-none rounded-lg border border-[#dddff0] bg-white px-4 py-4 pl-11 text-[#17124a] placeholder:text-[#8b88aa] outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        placeholder="Write your message here..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-700 to-sky-600 text-sm font-bold text-white shadow-[0_14px_30px_rgba(79,70,229,0.25)] transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-6 grid gap-0 overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_20px_60px_rgba(44,36,116,0.08)] md:grid-cols-3"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <button
                key={info.title}
                type="button"
                onClick={info.action}
                className={`flex gap-5 p-6 text-left transition hover:bg-violet-50/60 ${
                  index > 0
                    ? "border-t border-violet-100 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${info.color} text-white shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-base font-black text-[#17124a]">
                    {info.title}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-violet-700">
                    {info.details}
                  </span>
                  {info.description ? (
                    <span className="mt-1 block text-sm text-[#55527d]">
                      {info.description}
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="relative my-5 overflow-hidden rounded-[24px] border border-violet-100 bg-white px-6 py-8 shadow-[0_22px_60px_rgba(44,36,116,0.12)] md:px-10"
        >
          <div
            className="absolute inset-0 bg-cover opacity-95"
            style={{
              backgroundImage: "url('/contact/Contact_cta.webp')",
              backgroundPosition: "center -56px",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white/20" aria-hidden="true" />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-[0_16px_35px_rgba(109,40,217,0.28)]">
                <Sparkles className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#07143d] md:text-3xl">
                  Ready for a Free Consultation?
                </h2>
                <p className="mt-3 text-base text-[#312d63] md:text-lg">
                  Let's discuss how our AI solutions can help your business grow and scale.
                </p>
              </div>
            </div>

            <motion.a
              href="https://calendly.com/zoraglobalai/30?month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-violet-700 px-9 text-base font-bold text-white shadow-[0_18px_36px_rgba(109,40,217,0.28)] transition hover:bg-violet-800"
            >
              Get an Appointment
              <span aria-hidden="true">-&gt;</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
