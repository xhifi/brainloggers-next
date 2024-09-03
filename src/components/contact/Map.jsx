"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
      }}
      className="min-h-[450px] w-full overflow-hidden rounded-xl border-2 border-primary bg-neutral-300 shadow-2xl transition-all hover:shadow-none lg:w-1/2"
    >
      <GoogleMapsEmbed
        width="100%"
        height="450"
        mode="place"
        zoom="14"
        apiKey="AIzaSyDuLw_xp5VdJdJAVuC5h3s2dBQcbpd9xdY"
        q="Brainloggers Web & Graphic Designers and IT Consultants"
      />
    </motion.div>
  );
};
export default Map;
