import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import zoraLogo from "../assets/zora-logo-redesign.webp";
import { products } from "./products/data";
import { IT_SERVICE_CATEGORIES } from "../data/itServicesData";
import { NON_IT_SERVICE_CATEGORIES } from "../data/nonItServicesData";

type NavServiceItem = {
  label: string;
  to: string;
};

const CANONICAL_SERVICE_PATHS: Record<string, string> = {
  "website-web-application-services": "/services/website-web-application-services",
  "mobile-application-development": "/services/mobile-application-development",
  "ai-automation-solutions": "/services/ai-automation-solutions",
  "custom-enterprise-software": "/services/custom-enterprise-software",
  "cloud-infrastructure-services": "/services/cloud-infrastructure-services",
  "business-strategy-consulting": "/services/business-strategy-consulting",
  "staff-augmentation-workforce-solutions": "/services/staff-augmentation-workforce-solutions",
  "branding-creative-services": "/services/branding-creative-services",
  "accounting-financial-operations": "/services/accounting-financial-operations",
  "digital-marketing-services": "/services/digital-marketing-services",
};

const normalizeServicePath = (path: string) => {
  const match = path.match(/^\/services\/(?:it\/)?([^/]+)/);
  if (!match) return path;

  const slug = match[1];
  return `/services/${slug}`;
};

const itServices: NavServiceItem[] = IT_SERVICE_CATEGORIES.map((category) => ({
  label: category.title,
  to: CANONICAL_SERVICE_PATHS[category.slug] ?? `/services/${category.slug}`,
}));

const nonItServices: NavServiceItem[] = NON_IT_SERVICE_CATEGORIES.map((category) => ({
  label: category.title,
  to: CANONICAL_SERVICE_PATHS[category.slug] ?? `/services/${category.slug}`,
}));

const serviceGroups = [
  {
    items: itServices,
  },
  {
    items: nonItServices,
  },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const servicesCloseTimeoutRef = useRef<number | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
    setDesktopProductsOpen(false);
    setServicesOpen(false);
  };

  const handleNavSelection = () => {
    closeAllMenus();
    scrollTop();
  };

  const handleServiceNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    const currentPath = location.pathname;
    const normalizedCurrentPath = normalizeServicePath(currentPath);
    const normalizedTargetPath = normalizeServicePath(to);

    event.preventDefault();
    closeAllMenus();

    if (normalizedCurrentPath === normalizedTargetPath) {
      window.location.assign(to);
      return;
    }

    navigate(CANONICAL_SERVICE_PATHS[normalizedTargetPath.split("/").pop() ?? ""] ?? to);
    scrollTop();
  };

  const openServicesMenu = () => {
    if (servicesCloseTimeoutRef.current !== null) {
      window.clearTimeout(servicesCloseTimeoutRef.current);
      servicesCloseTimeoutRef.current = null;
    }

    setServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (servicesCloseTimeoutRef.current !== null) {
      window.clearTimeout(servicesCloseTimeoutRef.current);
    }

    servicesCloseTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (servicesCloseTimeoutRef.current !== null) {
        window.clearTimeout(servicesCloseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (navRef.current?.contains(target)) return;
      closeAllMenus();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const el = navBarRef.current;
    if (!el) return;

    const setVar = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  const desktopBtn =
    "group relative px-3 py-2 font-bold block text-sm transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfbff] after:absolute after:left-1/2 after:top-full after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-violet-600 after:transition-all after:duration-300";
  const desktopBtnInactive =
    "text-slate-700 hover:text-violet-700";
  const desktopBtnActive =
    "text-violet-700 after:w-8";
  const mobileBtn =
    "flex items-center justify-center gap-3 px-5 py-3.5 rounded-full text-lg font-bold tracking-[0.01em] whitespace-nowrap transition-all transform-gpu active:scale-[0.99] backdrop-blur-md min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/90";
  const mobileBtnInactive =
    "text-slate-700 bg-white/78 hover:bg-violet-100 hover:text-violet-800 active:bg-violet-200 active:text-violet-900 border border-violet-100 shadow-[0_10px_24px_rgba(148,163,184,0.14)]";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 text-slate-900 transition-all duration-300 border-b border-violet-100/80 bg-white shadow-[0_10px_30px_rgba(148,163,184,0.08)]"
    >
      <div
        ref={navBarRef}
        className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-1.5 flex justify-between items-center"
      >
        <Link
          to="/"
          className="flex items-center"
          onClick={handleNavSelection}
        >
          <img
            src={zoraLogo}
            alt="ZoraGlobalAI"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-2 md:ml-3 lg:ml-6">

          <Link
            to="/"
            className={`${desktopBtn} ${location.pathname === "/" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={handleNavSelection}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${desktopBtn} ${location.pathname === "/about" ? desktopBtnActive : desktopBtnInactive}`}
            onClick={handleNavSelection}
          >
            About
          </Link>

          {/* BLOG ADDED */}
          <Link
            to="/blog"
            className={`${desktopBtn} ${location.pathname.startsWith("/blog") ? desktopBtnActive : desktopBtnInactive}`}
            onClick={handleNavSelection}
          >
            Blog
          </Link>

          <div
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <button
              type="button"
              className={`${desktopBtn} ${location.pathname.startsWith("/services") ? desktopBtnActive : desktopBtnInactive} inline-flex items-center gap-1.5`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`fixed left-1/2 z-50 w-[1020px] -translate-x-1/2 pt-0 transition-all duration-200 ${servicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
              style={{ top: "calc(var(--nav-h) - 2px)" }}
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
                <div className="grid grid-cols-2 border border-slate-100 bg-white px-6 py-5 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-white">
                  {serviceGroups.map((group, index) => (
                    <div
                      key={index}
                      className={`flex min-h-full flex-col items-center px-6 py-5 ${index === 0 ? "border-r border-violet-100/80" : ""}`}
                    >
                      <div className="w-full max-w-md space-y-1">
                        {group.items.map((item) => (
                          <div key={item.to}>
                            <Link
                              to={item.to}
                              className="flex items-center justify-center py-3 text-[15px] font-semibold leading-7 text-slate-800 transition-colors duration-200 hover:text-violet-700"
                              onClick={(event) => handleServiceNavigation(event, item.to)}
                            >
                              <span>{item.label}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <button
              type="button"
              className={`${desktopBtn} ${location.pathname.startsWith("/products") ? desktopBtnActive : desktopBtnInactive} inline-flex items-center gap-1.5`}
              onClick={() => setDesktopProductsOpen((value) => !value)}
            >
              Products
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${desktopProductsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition-all duration-200 ${desktopProductsOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <div className="border border-violet-100 bg-white/95 p-3 shadow-[0_20px_50px_rgba(124,58,237,0.14)] backdrop-blur-xl">
                <div className="space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="block px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700"
                      onClick={handleNavSelection}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className={`${desktopBtn} ${location.pathname === "/contact" ? desktopBtnActive : desktopBtnInactive}`}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="bg-violet-600 text-white font-bold text-[11px] lg:text-xs xl:text-sm px-2.5 lg:px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 shadow-[0_10px_22px_rgba(124,58,237,0.22)] hover:bg-violet-700"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden relative h-11 w-11 rounded-full text-slate-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white px-6 py-6 space-y-3 border-t border-violet-100 md:px-8 md:py-7">
          <Link
            to="/"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={handleNavSelection}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={handleNavSelection}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={handleNavSelection}
          >
            Blog
          </Link>
          <button
            type="button"
            className={`${mobileBtn} ${mobileBtnInactive} w-full md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={() => setMobileServicesOpen((value) => !value)}
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen ? (
            <div className="space-y-2 p-1">
              {serviceGroups.map((group) => (
                <div
                  key={group.items[0]?.to ?? "services-group"}
                  className="space-y-1"
                >
                  {group.items.map((item) => (
                    <div key={item.to}>
                      <Link
                        to={item.to}
                        className="block py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-violet-700"
                        onClick={(event) => handleServiceNavigation(event, item.to)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : null}
          <button
            type="button"
            className={`${mobileBtn} ${mobileBtnInactive} w-full md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={() => setMobileProductsOpen((value) => !value)}
          >
            Products
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileProductsOpen ? (
            <div className="md:w-fit md:min-w-[220px]">
              <div className="border border-violet-100 bg-white/95 p-3 shadow-[0_20px_50px_rgba(124,58,237,0.14)] backdrop-blur-xl">
                <div className="space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="block px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700"
                      onClick={handleNavSelection}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          <Link
            to="/contact"
            className={`${mobileBtn} ${mobileBtnInactive} md:w-fit md:min-w-[220px] md:justify-center`}
            onClick={handleNavSelection}
          >
            Contact Us
          </Link>
          <Link
            to="/book-appointment"
            className="block bg-violet-600 text-white px-5 py-3.5 rounded-lg text-center text-lg font-extrabold tracking-[0.01em] whitespace-nowrap md:w-fit md:min-w-[220px]"
            onClick={handleNavSelection}
          >
            <span className="font-bold">Book Appointment</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
