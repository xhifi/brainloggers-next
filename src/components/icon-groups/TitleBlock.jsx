"use client";

import { motion } from "framer-motion";

const TitleBlock = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="relative z-10 p-8"
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default TitleBlock;
