"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useLocalStorage from "@/hooks/useLocalStorage";

import Image from "next/image";
import Input from "../primitives/forms/Input";
import Textarea from "../primitives/forms/Textarea";
import Button from "../primitives/Button";
import Poly1 from "@/static/images/decorations/poly-pattern-1.svg";
import PeopleCommunicating from "@/static/images/decorations/illustrations/people-communicating.svg";
import sendMail from "./actions/sendMail";
import { useState } from "react";
import { BsRecycle } from "react-icons/bs";

const bookingSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (val) =>
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          val ?? "",
        ),
      "Invalid email address",
    ),
  name: z.string().min(3, "Name is too short").max(50, "Name is too long"),
  ph: z
    .string()
    .refine(
      (val) =>
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
          val ?? "",
        ),
      "Invalid phone number",
    ),
  message: z.string().min(16, "Message is too short"),
});

const BookingForm = () => {
  const [booking, setBooking] = useLocalStorage("booking", {});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: booking?.name,
      email: booking?.email,
      ph: booking?.ph,
      message: booking?.message,
    },
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { name, email, ph, message } = data;
    setErrorMessage("");
    setStatus("submitting");
    const confirmation = await sendMail({ name, email, ph, message });

    if (!confirmation.booked) {
      setStatus("error");
      setErrorMessage(confirmation.error);
      return;
    }
    if (confirmation.booked) {
      setBooking(confirmation);
      setStatus("success");
      return;
    }
  };

  return (
    <div className="relative w-full">
      <Image
        src={Poly1}
        alt=""
        height={200}
        priority
        role="presentation"
        aria-hidden="true"
        className="-z-1 pointer-events-none absolute -bottom-24 -right-[90px] size-1/2 select-none opacity-10 lg:animate-[bounce_5s_linear_900ms_infinite]"
      />
      <div className="wrap relative z-10 flex flex-col rounded-xl border-2 border-primary-light bg-light/75 bg-clip-border text-dark shadow-2xl shadow-black/55 ring-neutral-500/50 ring-offset-2 ring-offset-transparent saturate-150 backdrop-blur-lg focus-within:ring-4 dark:bg-dark/75 dark:text-light/80">
        <div className="relative p-8">
          <div className="flex flex-col flex-nowrap items-center gap-y-4 md:flex-row md:gap-x-9 md:gap-y-0">
            <div className="text-dark dark:text-light/80">
              <h5 className="font-bold">Got an app in mind?</h5>
              <p className="hidden lg:block">
                Let&apos;s see what challenge you bring to the table this time
              </p>
            </div>
            <Image
              src={PeopleCommunicating}
              className="h-auto w-36 fill-black align-middle"
              alt=""
            />
          </div>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                label="Full Name"
                placeholder="Bruce Wayne"
                size="lg"
                intent={errors.name ? "error" : "default"}
                error={errors.name?.message}
                disabled={status === "success" || booking?.booked}
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <Input
                label="Email"
                placeholder="bruce@wayneenterprises.com"
                size="lg"
                intent={errors.email ? "error" : "default"}
                error={errors.email?.message}
                disabled={status === "success" || booking?.booked}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <Input
                label="Phone Number"
                placeholder="02036233543"
                size="lg"
                intent={errors.ph ? "error" : "default"}
                error={errors.ph?.message}
                disabled={status === "success" || booking?.booked}
                {...register("ph", { required: true })}
              />
            </div>
            <div>
              <Textarea
                className="block w-full"
                rows="4"
                size="lg"
                label="Requirements"
                placeholder="I need a new suit..."
                intent={errors.message ? "error" : "default"}
                error={errors.message?.message}
                disabled={status === "success" || booking?.booked}
                {...register("message", { required: true })}
              />
            </div>
            <div className="mt-3 flex items-center">
              {status === "submitting" ? (
                <Button
                  className="pointer-events-none w-full"
                  size="lg"
                  intent="warning"
                >
                  Submitting
                </Button>
              ) : status === "success" || booking?.booked ? (
                <>
                  <Button
                    className="pointer-events-none w-full"
                    size="lg"
                    intent="success"
                  >
                    Booked at -
                    <span className="ms-1">
                      {new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "full",
                      }).format(booking?.date)}
                    </span>
                  </Button>
                  <Button
                    className="ms-3 h-full px-2 py-2"
                    onClick={() => {
                      reset();
                      setStatus("idle");
                      setBooking(null);
                    }}
                  >
                    <BsRecycle className="block size-6" />
                  </Button>
                </>
              ) : (
                <Button
                  className="w-full"
                  size="lg"
                  intent={status === "error" ? "error" : "primary"}
                >
                  {status === "error" ? "Submit Again" : "Submit"}
                </Button>
              )}
            </div>
            {errorMessage && (
              <p className="text-center text-error">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
