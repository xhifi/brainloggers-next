"use client";

import { cva, cx } from "class-variance-authority";
import { forwardRef, useId } from "react";

import {
  BsCheckCircleFill,
  BsFillExclamationCircleFill,
  BsXCircleFill,
} from "react-icons/bs";

const textareaStyles = cva(
  "block w-full bg-light dark:bg-dark/50 border-2 px-4 py-1 transition-all placeholder:text-dark/50 dark:placeholder:text-light/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        default:
          "border-dark/25 dark:border-light/25 bg-background-100 focus:ring-secondary/25",
        error:
          "border-error bg-error/10 text-error focus:ring-error/25 pe-10 focus:text-foreground/90",
        success:
          "border-success bg-success/10 text-success focus:ring-success/25 pe-10 focus:text-foreground/90",
        warning:
          "border-warning bg-warning/10 text-warning focus:ring-warning/25 pe-10 focus:text-foreground/90",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "md",
      rounded: "lg",
    },
  },
);
const labelStyles = cva("text-md mb-1", {
  variants: {
    labelSize: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    "label-size": "md",
  },
});

const Textarea = forwardRef(function Input(
  {
    rows,
    placeholder,
    label,
    size,
    labelSize,
    intent,
    rounded,
    error,
    success,
    warning,
    className,
    ...props
  },
  ref,
) {
  if (intent === "error" && !error) {
    throw new Error("error:String is required when intent is error");
  }
  if (intent === "success" && !success) {
    throw new Error("success:String is required when intent is success");
  }
  if (intent === "warning" && !warning) {
    throw new Error("warning:String is required when intent is warning");
  }

  const id = useId();

  return (
    <>
      <label htmlFor={id} className={cx(labelStyles({ labelSize }))}>
        {label}
      </label>
      <div className="relative">
        <textarea
          rows={rows}
          ref={ref}
          id={id}
          placeholder={placeholder}
          className={cx(textareaStyles({ size, intent, rounded, className }))}
          {...props}
        />
        {intent === "error" && (
          <BsXCircleFill className="absolute inset-y-0 right-2 top-2 flex h-5 w-5 items-center fill-error" />
        )}
        {intent === "success" && (
          <BsCheckCircleFill className="absolute inset-y-0 right-2 top-2 flex h-5 w-5 items-center fill-success" />
        )}
        {intent === "warning" && (
          <BsFillExclamationCircleFill className="absolute inset-y-0 bottom-1/2 right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center fill-warning" />
        )}
      </div>
      {error && <p className="ms-4 mt-1 text-sm text-error">{error}</p>}
      {success && <p className="ms-4 mt-1 text-sm text-success">{success}</p>}
      {warning && <p className="ms-4 mt-1 text-sm text-warning">{warning}</p>}
    </>
  );
});

export default Textarea;
