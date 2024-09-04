"use client";
import Lenis from "lenis";
import { useEffect } from "react";

const LenisWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return <div>{children}</div>;
};

export default LenisWrapper;
