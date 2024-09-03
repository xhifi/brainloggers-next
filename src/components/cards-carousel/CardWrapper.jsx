"use client";

import { useRouter } from "next/navigation";

const CardWrapper = ({ children, href, ...rest }) => {
  const router = useRouter();

  return (
    <div
      className="relative z-10 flex h-80 w-56 cursor-pointer flex-col items-start justify-start overflow-hidden rounded-xl border-2 border-primary bg-gray-100 shadow transition-transform duration-200 hover:-translate-y-4 dark:bg-neutral-900 md:w-96"
      onClick={href && (() => router.push(href))}
    >
      {children}
    </div>
  );
};
export default CardWrapper;
