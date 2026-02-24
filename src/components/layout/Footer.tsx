import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from "react-icons/fa";
import zoraLogo from "../../assets/Zora Logo Redesign1.png";

interface FooterProps {
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onDocumentationClick?: () => void;
  onBlogClick?: () => void;
  onFAQClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onAboutClick, 
  onProductClick, 
  onContactClick,
  onHomeClick,
  onDocumentationClick,
  onBlogClick,
  onFAQClick,
  onPrivacyClick,
  onTermsClick,
  onCookieClick
}) => {
  const mainLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", onClick: onAboutClick },
    { label: "Products", onClick: onProductClick },
    { label: "Contact", onClick: onContactClick },
  ];

  const productLinks = [
    { label: "CRMS", onClick: onProductClick },
    { label: "Chat Bot", onClick: onProductClick },
    { label: "Email Automation", onClick: onProductClick },
    { label: "Analytics Engine", onClick: onProductClick },
  ];

  const resourceLinks = [
    { label: "Documentation", onClick: onDocumentationClick },
    { label: "Blog", onClick: onHomeClick }, // Temporary - redirects to home
    { label: "Support", onClick: onContactClick },
    { label: "FAQ", onClick: onFAQClick },
  ];

  const legalLinks = [
    { label: "Privacy Policy", onClick: onHomeClick }, // Temporary - redirects to home
    { label: "Terms of Service", onClick: onHomeClick }, // Temporary - redirects to home
    { label: "Cookie Policy", onClick: onHomeClick }, // Temporary - redirects to home
  ];

  const socials = [
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:info@zora.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-600/15 to-transparent blur-[150px] rounded-full top-[-200px] left-[-200px] -z-30 pointer-events-none"
      />
      
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/10 to-transparent blur-[150px] rounded-full bottom-[-200px] right-[-200px] -z-30 pointer-events-none"
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 60, 0],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 md:mb-16" />
        
        {/* Main Footer Content with Map */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-16">
          
          {/* Left Side - Links Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-2 sm:col-span-1"
            >
              <img 
                src={zoraLogo} 
                alt="ZORA" 
                className="h-8 md:h-12 w-auto object-contain mb-2 md:mb-4"
              />
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs mb-3 md:mb-6">
                Enterprise AI automation platform.
              </p>
              <div className="flex gap-2 md:gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white text-xs md:text-base mb-2 md:mb-4">Company</h4>
              <div className="space-y-1.5 md:space-y-2.5">
                {mainLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white text-xs md:text-base mb-2 md:mb-4">Products</h4>
              <div className="space-y-1.5 md:space-y-2.5">
                {productLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:block"
            >
              <h4 className="font-semibold text-white text-xs md:text-base mb-2 md:mb-4">Resources</h4>
              <div className="space-y-1.5 md:space-y-2.5">
                {resourceLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={link.onClick}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <h4 className="text-sm md:text-base font-semibold text-white mb-2 md:mb-3">Our Location</h4>
            <div className="w-full md:w-72 h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3446744697526!2d80.24838!3d12.9697703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d125a9a83f5%3A0xb405ed8eae12f871!2sFondbites%20School%20of%20Sugar%20Art!5e0!3m2!1sen!2sin!4v1708000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-400 text-xs mt-2">Fondbites School of Sugar Art, Chennai</p>
            <motion.a
              href="https://www.google.com/maps/place/Fondbites+School+of+Sugar+Art/@12.9697703,80.2483819,21z"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-xs mt-2"
            >
              View on Google Maps <FaArrowRight className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center mb-4 md:mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} ZORA Technologies. All rights reserved.
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={link.onClick}
                whileHover={{ y: -2 }}
                className="text-gray-500 hover:text-white transition-colors duration-200 text-xs cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
