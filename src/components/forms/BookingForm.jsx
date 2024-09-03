"use client";

import Image from "next/image";
import Input from "../primitives/forms/Input";
import Textarea from "../primitives/forms/Textarea";
import Button from "../primitives/Button";
import Poly1 from "@/static/images/decorations/poly-pattern-1.svg";

import PeopleCommunicating from "@/static/images/decorations/illustrations/people-communicating.svg";

const BookingForm = () => {
  return (
    <div className="relative">
      <Image
        src={Poly1}
        alt=""
        height={200}
        priority
        role="presentation"
        aria-hidden="true"
        className="-z-1 pointer-events-none absolute -bottom-24 -right-[90px] size-1/2 select-none opacity-10 lg:animate-[bounce_5s_linear_900ms_infinite]"
      />
      <div className="wrap relative z-10 flex min-w-0 flex-col rounded-xl border-2 border-primary-light bg-light bg-clip-border text-dark shadow-2xl shadow-black/55 ring-offset-2 ring-offset-primary transition-all focus-within:ring-2 dark:bg-dark dark:text-light/80 lg:w-[29rem]">
        <div className="relative p-8">
          <div className="flex flex-row flex-nowrap items-center gap-x-9">
            <div className="text-dark dark:text-light/80">
              <h5 className="font-bold">Got an app in mind?</h5>
              <p>
                Let&apos;s see what challenge you bring to the table this time
              </p>
            </div>
            <Image
              src={PeopleCommunicating}
              className="h-auto w-36 fill-black align-middle"
              alt=""
            />
          </div>
          <form className="space-y-3">
            <div>
              <Input label="Your Full Name" size="lg" />
            </div>
            <div>
              <Input label="Your Email" size="lg" />
            </div>
            <div>
              <Input label="Your Phone Number" size="lg" />
            </div>
            <div>
              <Textarea
                className="block w-full"
                rows="4"
                label="Your Requirements"
                placeholder="Message..."
              />
            </div>
            <Button className="mt-3 w-full" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
