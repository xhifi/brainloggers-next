import PriceCardWrapper from "./PriceCardWrapper";
import PriceTitle from "./PriceTitle";
import Image from "next/image";

const PriceCard = ({ image, title, price, unit, description, children }) => {
  return (
    <PriceCardWrapper>
      <Image
        src={image}
        alt=""
        role="presentation"
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 z-[0] w-2/3 origin-bottom-right opacity-10 invert transition-transform group-hover:scale-125 group-hover:invert-0"
      />
      <div className="relative z-[1] block h-full p-8 py-12 pb-10 transition-colors">
        <PriceTitle
          title={title}
          price={price}
          unit={unit}
          description={description}
        />
        {children}
      </div>
    </PriceCardWrapper>
  );
};

export default PriceCard;
