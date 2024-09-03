"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect } from "react";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (currentTheme === "dark") {
      return setTheme("dark");
    }
    setTheme("light");
  }, [currentTheme, systemTheme, theme, setTheme]);

  return (
    <button
      className={`order-1 flex w-10 rounded-full border border-primary p-[3px] ${currentTheme === "dark" ? "justify-end" : "justify-start"}`}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <motion.div
        className="h-4 w-4 rounded-full bg-primary"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      ></motion.div>
    </button>
  );
};
export default DarkModeToggle;
