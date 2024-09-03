"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Button from "../primitives/Button";
import SectionHeading from "../primitives/SectionHeading";

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollAbility();
    }
  }, [initialScroll]);

  const checkScrollAbility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setCanScrollLeft(scrollLeft > 0);

      if (scrollWidth >= clientWidth) {
        return setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
      return setCanScrollRight(false);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -416, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 416, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="mb-5 flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] md:mb-10"
        ref={carouselRef}
        onScroll={checkScrollAbility}
      >
        <div className="mx-auto flex flex-row justify-start gap-8">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mr-10 flex justify-center gap-2 lg:justify-end">
        <Button
          intent="primary-outline"
          className={`items-center justify-center border-primary bg-warning disabled:opacity-50`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <BsArrowLeft className="h-6 w-6 text-gray-500" />
        </Button>
        <Button
          intent="primary-outline"
          className={`$ items-center justify-center border-primary bg-warning disabled:opacity-50`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <BsArrowRight className="h-6 w-6 hover:text-light focus:text-light" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
