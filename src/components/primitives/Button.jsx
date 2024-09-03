"use client";
import { cva, cx } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "./Link";

const button = cva(
  "inline-block px-4 py-1.5 transition-colors duration-300 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-light hover:text-white focus:ring-secondary/15",
        "primary-gradient":
          "bg-gradient-to-b from-primary-light to-primary-dark text-primary-content hover:text-white transition-colors focus:outline-none focus:ring-4 focus:ring-secondary/15 focus:ring-opacity-50 focus:ring-offset-2",
        "primary-outline":
          "border-primary border-2 bg-transparent text-primary text-light hover:bg-primary hover:text-light hover:text-white focus:ring-secondary/15",
        secondary:
          "bg-secondary text-content-light hover:text-white focus:ring-secondary-light/25",
        "secondary-outline":
          "border-secondary border-2 hover:bg-secondary hover:text-white focus:ring-secondary-light/25",
        disabled:
          "bg-gray-400 text-gray-400-content cursor-not-allowed pointer-events-none",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      intent: "primary",
      size: "md",
      rounded: "lg",
    },
  },
);

const Button = ({
  href,
  type,
  size,
  intent,
  rounded,
  className,
  disabled,
  children,
  ...props
}) => {
  if (type === "link") {
    return (
      <Link
        href={href}
        whileHover={{ scale: disabled ? 1 : 1 }}
        whileTap={{
          scale: disabled ? null : 0.95,
          saturate: disabled ? null : 1.5,
        }}
        transition={{
          duration: disabled ? null : 0.1,
          ease: disabled ? null : "circOut",
        }}
        disabled={disabled}
        className={cx(button({ size, intent, rounded, disabled, className }))}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1 }}
      whileTap={{
        scale: disabled ? null : 0.95,
        saturate: disabled ? null : 1.5,
      }}
      transition={{
        duration: disabled ? null : 0.1,
        ease: disabled ? null : "circOut",
      }}
      disabled={disabled}
      className={cx(button({ size, intent, rounded, disabled, className }))}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
