"use client";
import { usePathname } from "next/navigation";
import { BsArrowLeft, BsArrowRight, BsHouseFill } from "react-icons/bs";
import Link from "../primitives/Link";

const Breadcrumbs = () => {
  const paths = usePathname();
  const pathsArray = paths.split("/");

  return (
    <div className="flex flex-wrap items-center justify-end bg-primary px-6 text-light">
      <Link href="/" className="py-4">
        <BsHouseFill />
      </Link>
      {pathsArray.map((path, index) => {
        const href = `${pathsArray.slice(0, index + 1).join("/")}`;
        if (path === "") {
          return null;
        }
        return (
          <span key={index} className="flex items-center py-4">
            <BsArrowLeft className="mx-2" />
            <Link href={href}>
              {path
                .split("")
                .map((letter, index) =>
                  index === 0 ? letter.toUpperCase() : letter,
                )
                .join("")}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
export default Breadcrumbs;
