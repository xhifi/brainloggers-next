"use client";
import { motion } from "framer-motion";
import Link from "../primitives/Link";

const FadeInFromBottom = {
  initial: { y: 20, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: index * 0.2 },
  }),
};

const AnimatedList = ({ items }) => {
  return items.map((item, index) => {
    return (
      <motion.li
        variants={FadeInFromBottom}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        key={index}
        custom={index}
        className={item.icon ? "flex items-center gap-x-2" : ""}
      >
        {item.icon}
        <Link href={item.href}>{item.title}</Link>
      </motion.li>
    );
  });
};

export default AnimatedList;
