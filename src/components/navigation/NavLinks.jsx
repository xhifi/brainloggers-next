"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavLinks = ({ links }) => {
  const pathname = usePathname();
  return (
    <ul className="mt-4 flex flex-col gap-y-2 px-6 lg:m-0 lg:ms-10 lg:flex-row lg:gap-x-1 lg:p-0 lg:text-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.title}>
            <Link
              href={link.href}
              className={`inline-block w-full whitespace-nowrap rounded-lg border-2 border-gray-950/5 px-3 py-0.5 text-gray-800 transition-all hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 dark:text-neutral-200 dark:hover:bg-neutral-700 ${isActive ? "cursor-default bg-stone-200 text-black dark:bg-neutral-700" : ""}`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
