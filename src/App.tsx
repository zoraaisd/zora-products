import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Hero";
import TopProducts from "./components/section/TopProducts";
import AllProducts from "./components/section/AllProducts";
import WhyChoose from "./components/section/WhyChoose";
import Tools from "./components/section/Tools";
import CTA from "./components/section/CTA";
import Footer from "./components/layout/Footer";
import NexusPricing from "./components/section/NexusPricing";
import About from "./components/about";
import ProductsPage from "./components/products";
import ContactPage from "./components/contact";
import { products, type Product } from "./components/products/data";
import { topProducts, type TopProduct } from "./components/products/topdata";
import SecureMessengerPage from "./components/products/detail/secure-messenger";
import TelecomBotPage from "./components/products/detail/telecom-bot";
import ChatBotPage from "./components/products/detail/chat-bot";
import WorkflowAutomationPage from "./components/products/detail/workflow-automation";
import EmailAutomationPage from "./components/products/detail/email-automation";
import WhatsappAutomationPage from "./components/products/detail/whatsapp-automation";
import AnalyticsEnginePage from "./components/products/detail/analytics-engine";
import SmartAssistantPage from "./components/products/detail/smart-assistant";
import AIIntelligenceHubPage from "./components/products/detail/ai-intelligence-hub";
import SecurityShieldPage from "./components/products/detail/security-shield";
import OrbiLeadsPage from "./components/products/detail/orbileads";
import HRMSPage from "./components/products/detail/hrms";
import CRMSPage from "./components/products/detail/crms";

type Page = "home" | "about" | "products" | "product-detail" | "contact" | 
            "privacy" | "terms" | "cookies" | "documentation" | "blog" | "faq";

interface AppState {
  page: Page;
  productId: string | null;
}

function findProductById(id: string | null): Product | TopProduct | null {
  if (!id) return null;
  const product = products.find(p => p.id === id);
  if (product) return product;
  const topProduct = topProducts.find(p => p.id === id);
  return topProduct || null;
}

function getInitialState(): AppState {
  // Parse the pathname from the URL to determine the initial page
  const path = window.location.pathname.replace(/^\//, "");
  if (!path || path === "") return { page: "home", productId: null };
  if (path.startsWith("products/")) {
    const productId = path.split("/")[1];
    return { page: "product-detail", productId };
  }
  // Handle known pages
  const knownPages: Page[] = [
    "home", "about", "products", "contact", "privacy", "terms", "cookies", "documentation", "blog", "faq"
  ];
  if (knownPages.includes(path as Page)) {
    return { page: path as Page, productId: null };
  }
  return { page: "home", productId: null };
}

function getUrlForPage(page: Page, productId: string | null = null): string {
  if (page === "product-detail" && productId) {
    return `/products/${productId}`;
  }
  if (page === "home") return "/";
  return `/${page}`;
}

function App() {
  const [{ page, productId }, setState] = useState<AppState>(() => getInitialState());

  // Derive selectedProduct from productId
  const selectedProduct = useMemo(() => findProductById(productId), [productId]);

  // Scroll to top whenever page or product changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [page, productId]);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem(
      "zora-app-state",
      JSON.stringify({ page, productId })
    );
  }, [page, productId]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setState({
          page: event.state.page,
          productId: event.state.productId || null,
        });
        window.scrollTo(0, 0);
      } else {
        // No state means we're at the initial entry, go home
        setState({ page: "home", productId: null });
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setPageState = (newPage: Page, productId: string | null = null) => {
    const newState = { page: newPage, productId };
    const url = getUrlForPage(newPage, productId);
    // Push to browser history (enables back/forward navigation)
    window.history.pushState(newState, "", url);
    setState(newState);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product: Product) => {
    setPageState("product-detail", product.id);
  };

  const handleTopProductClick = (product: TopProduct) => {
    setPageState("product-detail", product.id);
  };


  if (page === "about") {
    return (
      <About
        onBack={() => setPageState("home")}
        onHome={() => setPageState("home")}
        onAbout={() => setPageState("about")}
        onProduct={() => setPageState("products")}
        onContact={() => setPageState("contact")}
        onDocumentation={() => setPageState("documentation")}
        onBlog={() => setPageState("blog")}
        onFAQ={() => setPageState("faq")}
        onPrivacy={() => setPageState("privacy")}
        onTerms={() => setPageState("terms")}
        onCookie={() => setPageState("cookies")}
      />
    );
  }

  if (page === "contact") {
    return (
      <ContactPage
        onHome={() => setPageState("home")}
        onAbout={() => setPageState("about")}
        onProducts={() => setPageState("products")}
        onContact={() => setPageState("contact")}
        onDocumentation={() => setPageState("documentation")}
        onBlog={() => setPageState("blog")}
        onFAQ={() => setPageState("faq")}
        onPrivacy={() => setPageState("privacy")}
        onTerms={() => setPageState("terms")}
        onCookie={() => setPageState("cookies")}
      />
    );
  }
  if (page === "products") {
    return (
      <ProductsPage
        onProductClick={handleProductClick}
        onTopProductClick={handleTopProductClick}
        onHome={() => setPageState("home")}
        onAbout={() => setPageState("about")}
        onProducts={() => setPageState("products")}
        onContact={() => setPageState("contact")}
        onDocumentation={() => setPageState("documentation")}
        onBlog={() => setPageState("blog")}
        onFAQ={() => setPageState("faq")}
        onPrivacy={() => setPageState("privacy")}
        onTerms={() => setPageState("terms")}
        onCookie={() => setPageState("cookies")}
      />
    );
  }

  if (page === "product-detail" && selectedProduct) {
    const backToProducts = () => setPageState("products");
    const goHome = () => setPageState("home");
    const goAbout = () => setPageState("about");
    const goProducts = () => setPageState("products");
    const goContact = () => setPageState("contact");
    const goDocumentation = () => setPageState("documentation");
    const goBlog = () => setPageState("blog");
    const goFAQ = () => setPageState("faq");
    const goPrivacy = () => setPageState("privacy");
    const goTerms = () => setPageState("terms");
    const goCookie = () => setPageState("cookies");

    const commonProps = { 
      onBack: backToProducts, 
      onHome: goHome, 
      onAbout: goAbout, 
      onProducts: goProducts, 
      onContact: goContact,
      onDocumentation: goDocumentation,
      onBlog: goBlog,
      onFAQ: goFAQ,
      onPrivacy: goPrivacy,
      onTerms: goTerms,
      onCookie: goCookie
    };

    // Handle TopProducts
    if ("accentColor" in selectedProduct && !("bgPattern" in selectedProduct)) {
      switch (selectedProduct.id) {
        case "orbileads": return <OrbiLeadsPage {...commonProps} />;
        case "hrms": return <HRMSPage {...commonProps} />;
        case "crms": return <CRMSPage {...commonProps} />;
      }
    }

    // Handle MainProducts
    switch (selectedProduct.id) {
      case "secure-messenger": return <SecureMessengerPage {...commonProps} />;
      case "telecom-bot": return <TelecomBotPage {...commonProps} />;
      case "chat-bot": return <ChatBotPage {...commonProps} />;
      case "workflow-automation": return <WorkflowAutomationPage {...commonProps} />;
      case "email-automation": return <EmailAutomationPage {...commonProps} />;
      case "whatsapp-automation": return <WhatsappAutomationPage {...commonProps} />;
      case "analytics-engine": return <AnalyticsEnginePage {...commonProps} />;
      case "smart-assistant": return <SmartAssistantPage {...commonProps} />;
      case "ai-intelligence-hub": return <AIIntelligenceHubPage {...commonProps} />;
      case "security-shield": return <SecurityShieldPage {...commonProps} />;
      default: setPageState("products"); return null;
    }
  }

  return (
    <div className="relative">
      <Navbar onHomeClick={() => setPageState("home")}
              onAboutClick={() => setPageState("about")}
              onProductClick={() => setPageState("products")}
              onContactClick={() => setPageState("contact")}
              currentPage={page} />
      <Hero onProductClick={() => setPageState("products")} />
      <TopProducts onProductClick={handleTopProductClick} />
      <AllProducts onProductClick={handleProductClick} />
      <NexusPricing />
      <WhyChoose />
      <Tools />
      <CTA />
      <Footer 
        onHomeClick={() => setPageState("home")}
        onAboutClick={() => setPageState("about")} 
        onProductClick={() => setPageState("products")} 
        onContactClick={() => setPageState("contact")}
        onDocumentationClick={() => setPageState("documentation")}
        onBlogClick={() => setPageState("blog")}
        onFAQClick={() => setPageState("faq")}
        onPrivacyClick={() => setPageState("privacy")}
        onTermsClick={() => setPageState("terms")}
        onCookieClick={() => setPageState("cookies")}
      />
    </div>
  );
}

export default App;
