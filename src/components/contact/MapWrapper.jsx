"use client";
import { motion } from "framer-motion";

const MapWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
      }}
      className="min-h-[450px] w-full overflow-hidden rounded-xl border-2 border-primary bg-neutral-300 shadow-2xl hover:shadow-none lg:w-1/2"
    >
      {children}
    </motion.div>
  );
};
export default MapWrapper;
