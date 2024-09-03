import Image from "next/image";
import CardWrapper from "./CardWrapper";
import { BsArrowRight } from "react-icons/bs";
import Link from "../primitives/Link";

const Card = ({ card, href }) => {
  return (
    <CardWrapper href={href}>
      <div className="group relative h-full w-full border-primary">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[11] h-full bg-gradient-to-b from-black/50 via-transparent to-transparent"
          aria-label="decoration"
          aria-hidden
        />
        <div className="relative z-[12] p-8">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </p>
          <h3 className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-2xl">
            {card.title}
          </h3>
        </div>
        <Image
          src={card.src}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 z-10 h-full object-cover"
        />
        <Link
          href={href}
          className="absolute bottom-8 right-8 z-[12] rounded-full border-2 border-primary bg-warning p-2 text-right"
        >
          <BsArrowRight className="size-10 -rotate-45 fill-primary transition-transform duration-100 hover:rotate-0 group-hover:rotate-0" />
        </Link>
      </div>
    </CardWrapper>
  );
};

export default Card;
