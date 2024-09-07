import IconTop from "./IconTop";
import services from "@/static/data/services";
import Image from "next/image";

import CornerStructure from "@/static/images/decorations/illustrations/corner-struct.svg";
import Link from "../primitives/Link";
import { BsArrowRight } from "react-icons/bs";
import AnimatedWrapper from "./AnimatedWrapper";
import TitleBlock from "./TitleBlock";
import Laptop from "@/static/images/feature/laptop.jpg";

const IconGroup = () => {
  return (
    <div className="group/section grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
      <TitleBlock className="relative row-span-2 flex h-full w-full items-center overflow-hidden rounded-lg border-2 border-primary text-light shadow-2xl transition-colors group-hover/section:bg-primary group-hover/section:text-light dark:border-primary-light dark:text-light dark:group-hover/section:bg-primary-dark">
        <Image
          src={CornerStructure}
          width={300}
          role="presentation"
          aria-hidden="true"
          className="absolute left-0 top-0 z-[1]"
          alt=""
        />
        <Image
          src={Laptop}
          quality={10}
          placeholder="blur"
          role="presentation"
          aria-hidden="true"
          layout="fill"
          className="absolute left-0 top-0 z-0 h-full w-auto rotate-90 scale-150 blur-xl brightness-50"
        />
        <div className="relative z-10 p-8">
          <h3 className="text-balance text-2xl font-bold tracking-normal">
            One-Stop Shop
          </h3>
          <p className="mt-4">
            Since past 10 years, we have designed and developed custom solutions
            for our clients that cover their specific needs and objectives. We
            have worked with clients from various industries and sectors.
          </p>
          <p className="my-4">
            From software to hardware, physical to social media marketing, these
            are some of the services we offer to our clients.
          </p>
          <Link className="underline underline-offset-4" href="/services">
            Explore All our services
            <span className="ms-1 inline-block -rotate-45 transition-transform duration-75 group-hover:translate-x-1 group-hover:rotate-0">
              <BsArrowRight />
            </span>
          </Link>
        </div>
      </TitleBlock>
      {services.map((service, index) => {
        return (
          <AnimatedWrapper key={index}>
            <IconTop service={service} key={service.title} />
          </AnimatedWrapper>
        );
      })}
    </div>
  );
};

export default IconGroup;
