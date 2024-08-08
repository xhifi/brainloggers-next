import { useState, useEffect } from "react";

/**
 * @param {object} ref - The reference to the element you want to observe
 * @param {string} rootMargin - The margin around the root (viewport) that should trigger the callback
 * @returns {boolean} isVisible - Whether the element is visible on the screen
 *
 * @description
 * This hook allows you to detect when an element is visible on the screen.
 * It is useful for handling events such as lazy loading images when they come into view.
 *
 * @example
 * const ref = useRef();
 * const isVisible = useOnScreen(ref);
 *
 * return (
 *  <div ref={ref}>
 *   {isVisible ? "Visible" : "Not visible"}
 * </div>
 * );
 *
 * // When the element comes into view, "Visible" will be displayed
 * // When the element goes out of view, "Not visible" will be displayed
 */

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  });

  return isVisible;
};

export default useOnScreen;
