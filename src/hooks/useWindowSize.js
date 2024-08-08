import { useLayoutEffect, useState } from "react";

/**
    * @returns {object} windowSize - The width and height of the window
    *
    * @description
    * This hook allows you to get the width and height of the window.
    * It is useful for handling responsive design.
    *
    * @example
    * const { width, height } = useWindowSize();
    
*/
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
