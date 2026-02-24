import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import zoraLogo from "../../assets/Zora Logo Redesign.png";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll for blur background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linear-to-r from-black via-blue-950 to-purple-950 backdrop-blur-lg border-b border-purple-500/30"
          : "bg-linear-to-r from-black/40 via-blue-950/40 to-purple-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

  {/* Logo */}
  <img
    src={zoraLogo}
    alt="Zora"
    className="h-8 md:h-10 w-auto object-contain"
  />

  {/* RIGHT SIDE GROUP (Links + Button aligned together) */}
  <div className="hidden md:flex items-center gap-8 lg:gap-10">

    {/* Nav Links */}
    <ul className="flex items-center gap-8 lg:gap-10">
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
              className={`relative text-xs lg:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              )}
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
      className="px-5 py-2 text-xs lg:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
    >
      Book Appointment
    </a>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white text-2xl"
    onClick={() => setMobileOpen(!mobileOpen)}
  >
    ☰
  </button>
</div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-purple-500/20 px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4">
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
                className={`block w-full text-left text-xs md:text-sm transition ${
                  isMobileActive ? "text-purple-400" : "text-gray-300 hover:text-purple-400"
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
className="block w-fit px-3 py-1.5 text-center text-[10px] font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-md hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 mt-3"            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
