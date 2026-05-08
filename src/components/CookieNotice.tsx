import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "zora_cookie_consent_v1";

interface CookieNoticeProps {
  onAccept?: () => void;
}

const CookieNotice: React.FC<CookieNoticeProps> = ({ onAccept }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY);
      setVisible(!saved);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };

    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData));
    setVisible(false);
    onAccept?.();
  };

  const handleManage = () => {
    console.log("Open cookie preferences modal here");
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-8 z-[9999] w-[90%] max-w-md"
      >
        <div className="bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(139,92,246,0.25)]">

          <h3 className="text-white font-semibold text-lg mb-2">
            Cookies & Privacy
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We use cookies to enhance your experience and improve platform
            performance. By continuing, you agree to our cookie policy.
          </p>

          <div className="flex gap-4">

            <button
              onClick={handleManage}
              className="flex-1 py-3 border border-white/20 rounded-xl text-sm hover:bg-white/5 transition"
            >
              Manage Cookies
            </button>

            <button
              onClick={handleAccept}
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-sm font-semibold hover:scale-105 transition"
            >
              Allow All
            </button>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieNotice;
