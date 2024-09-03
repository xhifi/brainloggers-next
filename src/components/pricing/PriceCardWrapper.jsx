"use client";
import { motion } from "framer-motion";
import colors from "tailwindcss/colors";

const PriceCardWrapper = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: colors.zinc[800],
        transition: { duration: 0.1 },
      }}
      className="group relative flex w-full flex-col overflow-hidden border-primary last:border-b-0 last:border-e-0 hover:text-light md:w-1/2 lg:w-1/4"
    >
      <motion.div
        className="h-full"
        whileHover={{
          y: -10,
          transition: { duration: 0.1 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PriceCardWrapper;
