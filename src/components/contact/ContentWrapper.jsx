"use client";
import { motion } from "framer-motion";

const ContentWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
      }}
      className="w-full space-y-4 lg:w-1/2"
    >
      {children}
    </motion.div>
  );
};
export default ContentWrapper;
