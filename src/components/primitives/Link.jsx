import NLink from "next/link";
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
const Link = ({ href, children, ...rest }) => {
  // if link is external, use anchor tag
  // else use next/link

  if (typeof href !== "string") {
    return console.error("href should be of type String");
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NLink href={href} {...rest}>
      {children}
    </NLink>
  );
};

export default Link;
