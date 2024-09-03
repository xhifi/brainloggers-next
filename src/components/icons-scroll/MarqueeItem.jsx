"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const MarqueeItem = ({ images, direction = "right", duration = 60 }) => {
  return (
    <div className="pointer-events-none flex h-8 select-none items-center">
      <motion.div
        className="flex h-full flex-shrink-0"
        initial={{ x: `${direction === "right" ? "0" : "-100%"}` }}
        animate={{ x: `${direction === "right" ? "-100%" : "0"}` }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        {images.map((image) => {
          return (
            <Image
              src={image}
              key={image.src}
              alt=""
              width={200}
              className="pointer-events-none me-16 block h-auto w-full select-none saturate-0 transition-all duration-300"
            />
          );
        })}
      </motion.div>
      <motion.div
        className="flex h-full flex-shrink-0"
        initial={{ x: `${direction === "right" ? "0" : "-100%"}` }}
        animate={{ x: `${direction === "right" ? "-100%" : "0"}` }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        {images.map((image) => {
          return (
            <Image
              src={image}
              key={image.src}
              width={200}
              alt=""
              className="pointer-events-none me-16 block h-auto w-full select-none saturate-0 transition-all duration-300"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
