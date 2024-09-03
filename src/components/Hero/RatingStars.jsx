"use client";

import Image from "next/image";
import Star from "@/static/images/icons/star-yellow.png";

const RatingStars = () => {
  return [...new Array(5)].map((_, index) => {
    return (
      <Image
        src={Star}
        key={"star" + index}
        alt="star"
        className="inline-block"
      />
    );
  });
};
export default RatingStars;
