import { useEffect, useRef, useState } from "react";

const useMeasure = () => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  return [ref, dimensions];
};

export default useMeasure;
