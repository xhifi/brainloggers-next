"use client";

import Image from "next/image";
import Star from "@/static/images/icons/star-yellow.png";

const RatingStars = () => {
  return (
    <div className="flex flex-shrink items-center">
      {[...new Array(5)].map((_, index) => {
        return (
          <Image
            src={Star}
            key={index}
            alt=""
            className="inline h-auto w-auto"
          />
        );
      })}
    </div>
  );
};
export default RatingStars;
