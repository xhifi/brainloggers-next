"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureImage = ({ src, alt, origin, height, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0, transformOrigin: origin }}
      whileInView={{ scale: 1, transformOrigin: origin }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: "linear",
        delay: delay,
      }}
      style={{ height: height }}
      className="relative w-full overflow-hidden rounded-xl border-2 border-light"
    >
      <Image
        src={src}
        alt={alt}
        className="relative h-full object-cover"
        placeholder="blur"
      />
    </motion.div>
  );
};
export default FeatureImage;
