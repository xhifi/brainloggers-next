"use client";
import { motion } from "framer-motion";

const ContentContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delayChildren: 0.5, once: true }}
      className="w-full grow-0 space-y-6 lg:w-1/2"
    >
      {children}
    </motion.div>
  );
};
export default ContentContainer;
