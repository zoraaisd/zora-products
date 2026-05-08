import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionReveal: React.FC<SectionRevealProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} section-text-reveal${isVisible ? " is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
