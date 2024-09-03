"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({
  strings,
  startDelay = 300,
  typeSpeed = 50,
  backSpeed = 50,
  backDelay = 500,
  ...props
}) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      loop: true,
      strings,
      startDelay,
      typeSpeed,
      backSpeed,
      backDelay,
    });
    return () => {
      typed.destroy();
    };
  }, [el, strings, startDelay, typeSpeed, backSpeed, backDelay]);

  return <span ref={el} {...props} />;
};

export default TypedText;
