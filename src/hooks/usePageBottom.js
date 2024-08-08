import { useState, useEffect } from "react";

/**
 * @returns {boolean} reachedBottom - Whether the user has scrolled to the bottom of the page
 *
 * @description
 * This hook allows you to detect when the user has scrolled to the bottom of the page.
 * It is useful for handling events such as lazy loading more content when the user reaches the bottom of the page.
 *
 * @example
 * const reachedBottom = usePageBottom();
 *
 * if (reachedBottom) {
 *  // Load more content
 * }
 */
const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottom;
};

export default usePageBottom;
