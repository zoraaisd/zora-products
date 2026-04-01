import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import zoraLogo from "../../assets/Zora Logo Redesign.webp";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Product", href: "#products" },
  { name: "Contact Us", href: "#contact" },
];

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProductClick: () => void;
  onContactClick: () => void;
  currentPage: "home" | "about" | "products" | "product-detail" | "contact" | "privacy" | "terms" | "cookies" | "documentation" | "blog" | "faq";
}

const Navbar = ({ onHomeClick, onAboutClick, onProductClick, onContactClick, currentPage }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutsideTap = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (mobileMenuRef.current?.contains(target)) return;
      if (mobileButtonRef.current?.contains(target)) return;

      setMobileOpen(false);
    };

    const handleScroll = () => {
      setMobileOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideTap);
    document.addEventListener("touchstart", handleOutsideTap);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideTap);
      document.removeEventListener("touchstart", handleOutsideTap);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

  const handleLinkClick = (link: { name: string; href: string }) => {
    if (link.name === "Home") {
      onHomeClick();
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      setMobileOpen(false);
    } else if (link.name === "About") {
      onAboutClick();
      setTimeout(() => {
        const section = document.querySelector("#about");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      setMobileOpen(false);
    } else if (link.name === "Product") {
      onProductClick();
      setTimeout(() => {
        const section = document.querySelector("#products");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      setMobileOpen(false);
    } else if (link.name === "Contact Us") {
      onContactClick();
      setTimeout(() => {
        const section = document.querySelector("#contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const desktopBtn =
    "group relative px-7 py-2.5 font-bold rounded-full block text-sm transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-[0.99] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black after:absolute after:left-1/2 after:top-[1px] after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-violet-200/90 after:opacity-0 after:transition-all after:duration-300 group-hover:after:w-[72%] group-hover:after:opacity-100";
  const desktopBtnInactive =
    "text-[#fffcf0] bg-black hover:bg-[#090909] border border-white/30 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.52),0_12px_28px_rgba(0,0,0,0.32)] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.58),0_16px_34px_rgba(0,0,0,0.34),0_0_22px_rgba(168,85,247,0.38)]";
  const desktopBtnActive =
    "-translate-y-[2px] bg-[#fffcf0] text-black border border-white/75 [box-shadow:inset_0_2px_0_rgba(255,255,255,0.72),0_12px_24px_rgba(0,0,0,0.28),0_0_24px_rgba(167,139,250,0.45)] after:w-[72%] after:opacity-100";
  const mobileBtn =
    "flex items-center gap-3 px-5 py-3 rounded-full text-base font-semibold transition-all transform-gpu active:scale-[0.99] backdrop-blur-md min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90";
  const mobileBtnInactive =
    "text-[#fffcf0] bg-black border border-white/35 shadow-[0_10px_24px_rgba(0,0,0,0.3)]";
  const mobileBtnActive = "bg-[#fffcf0] text-black border border-white/75 shadow-[0_8px_20px_rgba(0,0,0,0.25)]";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-black via-purple-550 to-purple-950 backdrop-blur-lg border-b border-purple-500/30"
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

  {/* Logo */}
  <img
    src={zoraLogo}
    alt="Zora"
    className="h-10 md:h-12 w-auto object-contain -mt-1"
  />

  {/* RIGHT SIDE GROUP (Links + Button aligned together) */}
  <div className="hidden lg:flex items-center gap-4 lg:gap-5">

    {/* Nav Links */}
    <ul className="flex items-center gap-3 lg:gap-4">
      {navLinks.map((link) => {
        const isHomeActive = link.name === "Home" && currentPage === "home";
        const isAboutActive = link.name === "About" && currentPage === "about";
        const isProductActive =
          link.name === "Product" &&
          (currentPage === "products" || currentPage === "product-detail");
        const isContactActive =
          link.name === "Contact Us" && currentPage === "contact";

        const isActive =
          isHomeActive || isAboutActive || isProductActive || isContactActive;

        return (
          <li key={link.href}>
            <button
              onClick={() => handleLinkClick(link)}
              className={`${desktopBtn} ${isActive ? desktopBtnActive : desktopBtnInactive}`}
            >
              {link.name}
            </button>
          </li>
        );
      })}
    </ul>

    {/* Book Appointment Button */}
    <a
      href="https://calendly.com/zoraglobalai/30?month=2026-02"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-violet-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform-gpu shadow-[0_4px_0px_rgb(0,0,0,0.25)] hover:bg-violet-400 hover:-translate-y-0.5 hover:shadow-[0_6px_0px_rgb(0,0,0,0.22),0_0_26px_rgba(192,132,252,0.55)] active:translate-y-0.5 active:shadow-[0_1px_0px_rgb(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90"
    >
      Book Appointment
    </a>
  </div>

  {/* Mobile Menu Button */}
  <button
    ref={mobileButtonRef}
    className="lg:hidden text-white text-3xl"
    onClick={() => setMobileOpen(!mobileOpen)}
  >
    ☰
  </button>
</div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <>
          <div className="lg:hidden fixed inset-0 z-40" onClick={() => setMobileOpen(false)} />
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 z-50 bg-black/95 backdrop-blur-xl shadow-2xl border-t border-purple-500/20 px-4 md:px-8 py-6 md:py-8 space-y-4 md:space-y-6"
            onClick={(event) => event.stopPropagation()}
          >
            {navLinks.map((link) => {
              const isHomeActive = link.name === "Home" && currentPage === "home";
              const isAboutActive = link.name === "About" && currentPage === "about";
              const isProductActive = link.name === "Product" && (currentPage === "products" || currentPage === "product-detail");
              const isContactActive = link.name === "Contact Us" && currentPage === "contact";
              const isMobileActive = isHomeActive || isAboutActive || isProductActive || isContactActive;
              
              return (
              (link.name === "Home" || link.name === "About" || link.name === "Product" || link.name === "Contact Us") ? (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link)}
                  className={`${mobileBtn} w-full justify-start text-left ${
                    isMobileActive ? mobileBtnActive : mobileBtnInactive
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xs md:text-sm text-gray-300 hover:text-purple-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              )
              );
            })}
            <a
              href="https://calendly.com/zoraglobalai/30?month=2026-02"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-violet-500 text-white px-4 py-3 rounded-lg text-center transition-all duration-300 transform-gpu shadow-[0_3px_0px_rgb(0,0,0,0.25)] hover:bg-violet-400 active:scale-[0.98] active:translate-y-0.5 active:shadow-[0_1px_0px_rgb(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 mt-3"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </>
      )}
      <style>{`
        @keyframes navPulse {
          0%, 100% { box-shadow: 0 4px 0 rgba(0,0,0,0.25), 0 0 0 rgba(192,132,252,0); }
          50% { box-shadow: 0 4px 0 rgba(0,0,0,0.25), 0 0 24px rgba(192,132,252,0.5); }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
