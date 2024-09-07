import Image from "next/image";

import TypedText from "./TypedText";

import CommunicationIcon from "@/static/images/icons/communication.svg";
import ResponseRateIcon from "@/static/images/icons/response-rate.svg";
import BookingForm from "../forms/BookingForm";
import RatingStars from "./RatingStars";
import Link from "../primitives/Link";
import Button from "../primitives/Button";
import { BsTelephoneFill } from "react-icons/bs";
import IconsScroll from "@/components/icons-scroll/IconScroll";
import Decor1 from "@/static/images/decorations/shape1.png";
import GradientMesh from "@/static/images/decorations/gradient-mesh-1.jpg";

function Hero() {
  return (
    <section className="relative -top-12 overflow-hidden bg-primary pb-10 pt-10 shadow-2xl dark:bg-primary-dark lg:pt-20">
      <Image
        src={GradientMesh}
        alt=""
        width={500}
        role="presentation"
        aria-hidden="true"
        quality={2}
        priority
        placeholder="blur"
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-auto rotate-90 scale-150 select-none blur-2xl dark:brightness-50 md:rotate-0"
      />
      <div className="absolute -top-44 right-64 h-[2000px] w-96 rotate-[22deg] bg-gradient-to-l from-transparent via-light to-transparent px-44 opacity-15 blur-xl lg:px-6" />
      <div className="z-10 mb-20 mt-12 flex flex-col flex-nowrap justify-center gap-x-24 px-6 lg:flex-row lg:items-center lg:px-44">
        <div className="flex flex-col flex-nowrap justify-center lg:w-1/2 lg:pr-8">
          <div className="relative">
            <Image
              src={Decor1}
              alt=""
              priority
              aria-hidden="true"
              role="presentation"
              className="pointer-events-none absolute -left-12 -top-11 animate-[spin_20s_linear_900ms_infinite] select-none"
            />
            <h1 className="text-4xl font-bold text-white">
              We are
              <br />
              <TypedText
                strings={[
                  "Web Developers",
                  "Graphic Designers",
                  "IT Professionals",
                  "SEO Experts",
                  "Digital Marketers",
                  "Copywriters",
                ]}
                className="text-warning"
              />
            </h1>
            <p className="mt-4 text-xl text-light">
              We are a small team of talented professionals who build powerful
              digital solutions & experiences for your business. We are here to
              help you grow your business online.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button
                intent="light"
                size="xl"
                className="w-auto bg-light/75 saturate-150 hover:bg-light focus:bg-light"
              >
                <span className="flex items-center space-x-2 px-2 font-bold">
                  <BsTelephoneFill /> <span>+44 20 3995 4105</span>
                </span>
              </Button>
              <p className="text-lg text-light">
                Zero cost initial consultation
              </p>
            </div>
          </div>
          <div className="z-10 flex flex-col flex-nowrap gap-x-8 sm:flex-row">
            <div className="mt-8 flex w-full flex-row flex-nowrap items-center gap-x-4 sm:w-1/2">
              <div className="relative size-12">
                <Image
                  src={CommunicationIcon}
                  alt=""
                  fill
                  className="pointer-events-none block select-none"
                />
              </div>
              <div className="text-md text-white">
                <p className="font-semibold lg:mb-0">24 Hour</p>
                <p className="lg:mb-0">Response Time</p>
              </div>
            </div>
            <div className="z-10 mt-8 flex w-full flex-row flex-nowrap items-center gap-x-4 sm:w-1/2">
              <div className="relative size-12">
                <Image
                  src={ResponseRateIcon}
                  alt=""
                  fill
                  className="pointer-events-none block select-none"
                />
              </div>
              <Link
                href="https://www.google.com/maps/place/Brainloggers+Web+%26+Graphic+Designers+and+IT+Consultants/@51.4214364,-0.1327431,17z/data=!4m8!3m7!1s0x4876068541ec0001:0x3f9fa2f12b7170d5!8m2!3d51.4214331!4d-0.1301682!9m1!1b1!16s%2Fg%2F11fjtkp_lr?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
                className="text-md text-white"
              >
                <RatingStars />
                <p className="lg:mb-0">Google Reviews</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-auto justify-center md:w-1/2 lg:mt-0">
          <BookingForm />
        </div>
      </div>
      <div className="opacity-25 hover:opacity-100">
        {/* <IconsScroll /> */}
      </div>
    </section>
  );
}
export default Hero;
