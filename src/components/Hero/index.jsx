"use client";

import Image from "next/image";
import Button from "../primitives/Button";
import BG from "@/static/images/hero_bg.svg";
import { useEffect, useState } from "react";

const Index = () => {
  const vals = [
    "Web Developers",
    "Graphic Designers",
    "IT Support Experts",
    "Digital Marketing Experts",
  ];
  const [state, setState] = useState("Web Designers");

  useEffect(() => {
    const interval = setInterval(() => {
      setState(vals[Math.floor(Math.random() * vals.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, [vals]);

  return (
    <section className="relative py-10">
      <div className="from-primary-500 to-primary-900 fixed -top-28 left-0 -z-30 h-40 w-96 rotate-45 bg-gradient-to-br opacity-75 blur-[188px]"></div>
      <div className="from-secondary-500 to-secondary-900 fixed -top-28 right-0 -z-30 h-40 w-2/3 rotate-12 bg-gradient-to-br opacity-75 blur-[188px]"></div>
      <Image
        src={BG}
        priority
        width={1920}
        height={1080}
        className="absolute bottom-0 right-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto flex flex-col gap-y-6 px-6">
        <div className="w-full space-y-4 text-center">
          <h1 className="leading-1 text-3xl font-normal tracking-tight">
            We are{" "}
            <span className="inline bg-gradient-to-b from-indigo-500 to-violet-900 bg-clip-text font-extrabold tracking-tight text-transparent">
              {state}
            </span>
          </h1>
          <p className="text-xl font-normal">
            Providing a one-stop-shop to British Businesses for all their
            technical needs and requirements
          </p>
        </div>
        <div className="w-full">
          <form className="bg-primary-100/15 border-primary-900/50 focus-within:ring-secondary-500/50 relative space-y-2 rounded-2xl border-2 p-6 backdrop-blur-sm transition-all focus-within:ring-2 focus-within:ring-offset-2">
            <h1 className="mb-3 text-center text-2xl font-bold">
              Hire us for your next Project
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="text-md border-primary-900/50 focus:ring-secondary-500/25 block w-full rounded-lg border-2 bg-gray-100 px-4 py-1 text-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-md border-primary-900/50 focus:ring-secondary-500/25 block w-full rounded-lg border-2 bg-gray-100 px-4 py-1 text-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="text-md border-primary-900/50 focus:ring-secondary-500/25 block w-full rounded-lg border-2 bg-gray-100 px-4 py-1 text-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            />
            <textarea
              rows={4}
              className="text-md border-primary-900/50 focus:ring-secondary-500/25 block w-full rounded-lg border-2 bg-gray-100 px-4 py-1 text-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            ></textarea>
            <Button className="text-md from-primary-600 to-primary-900 text-secondary-100 to focus:ring-secondary-500/25 w-full rounded-lg bg-gradient-to-b px-4 py-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Index;
