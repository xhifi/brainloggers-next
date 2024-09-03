"use client";

import { motion } from "framer-motion";

const FadeInFromBottom = {
  initial: { y: 20, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: index * 0.2 },
  }),
};

const AnimatedWrapper = ({ children, index, ...props }) => {
  return (
    <motion.div
      variants={FadeInFromBottom}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedWrapper;
