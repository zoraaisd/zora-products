import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type TextRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  transition,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
