"use client";
import { usePathname } from "next/navigation";
import MegaMenuDropdown from "./MegaMenuDropdown";
import Link from "../primitives/Link";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = ({ links, menu: { menuRef, setMenuOpen } }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.25 }}
        ref={menuRef}
        id="site-nav"
        className="space-between fixed bottom-0 left-0 -z-10 hidden h-[calc(100vh-2.75rem)] w-full grow-[1] basis-auto items-center gap-x-2 space-y-1 overflow-y-scroll bg-light p-6 transition-colors dark:bg-dark lg:static lg:ml-12 lg:mt-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:flex-wrap lg:space-y-0 lg:overflow-visible lg:bg-light lg:p-0"
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          if (link.menu) {
            return (
              <li key={link.title}>
                <MegaMenuDropdown link={link} />
              </li>
            );
          }

          return (
            <li key={link.title}>
              <Link
                href={link.href}
                className={`text-content-light dark:text-content-dark inline-block w-full whitespace-nowrap rounded px-3 py-0.5 outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-light dark:focus:ring-offset-dark lg:w-auto ${isActive ? "pointer-events-none cursor-default bg-primary/75 text-light" : "hover:bg-primary/15"}`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
};

export default NavLinks;
