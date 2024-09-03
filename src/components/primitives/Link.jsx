"use client";

import NLink from "next/link";
import { motion } from "framer-motion";
import { forwardRef } from "react";

/**
 * @param {string} href - The URL of the link
 * @param {string} children - The text content of the link
 * @param {object} rest - The rest of the props
 * @returns {JSX.Element} - The link component
 *
 * @description
 * This component is a wrapper around the next/link component.
 * It allows you to use both internal and external links.
 * If the link is external, it will use an anchor tag.
 * If the link is internal, it will use next/link.
 *
 * @example
 * <Link href="/about">
 * About
 * </Link>
 *
 * // This will render an internal link
 *
 * <Link href="https://www.example.com">
 * Example
 * </Link>
 *
 * // This will render an external link
 */
const Link = forwardRef(({ href, children, ...rest }, ref) => {
  // if link is external, use anchor tag
  // else use next/link

  if (typeof href !== "string") {
    return console.error("href should be of type String");
  }

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        ref={ref}
        target="blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <NLink ref={ref} href={href} {...rest}>
      {children}
    </NLink>
  );
});
Link.displayName = "Link";

export default motion(Link);
