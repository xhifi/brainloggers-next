"use client";

import Link from "../primitives/Link";
import { useRouter } from "next/navigation";

const IconTop = ({ service }) => {
  const { title, description, icon, link } = service;
  const router = useRouter();

  return (
    <div
      className={`group h-full w-full transition-colors ${link ? "cursor-pointer" : "cursor-default"}`}
      onClick={link && (() => router.push(link))}
    >
      <div className="mb-3 size-12">{icon}</div>
      <h4 className="mb-1 text-lg font-bold">{title}</h4>
      <p className="mb-1 text-base">{description}</p>
      {link && (
        <Link href={link} className="text-primary">
          Learn More
          <span className="ms-1 inline-block -rotate-45 transition-transform duration-75 group-hover:translate-x-1 group-hover:rotate-0">
            &#x2192;
          </span>
        </Link>
      )}
    </div>
  );
};
export default IconTop;
