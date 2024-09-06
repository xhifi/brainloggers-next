"use client";
import { usePathname } from "next/navigation";
import MegaMenuDropdown from "./MegaMenuDropdown";
import Link from "../primitives/Link";
import { AnimatePresence, motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import DarkModeToggle from "./DarkModeToggle";
import { cx } from "class-variance-authority";

const NavLinks = ({ links, menu }) => {
  const { menuOpen } = menu;
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : "-100vh" }}
        className={cx(
          "lg:space-between fixed left-0 top-0 z-50 h-screen w-screen basis-auto items-center gap-x-2 space-y-1 overflow-y-scroll bg-light p-6 pt-0 text-dark dark:bg-dark dark:text-light lg:static lg:ml-12 lg:mt-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:flex-wrap lg:space-y-0 lg:overflow-visible lg:bg-transparent lg:p-0",
        )}
      >
        <div className="flex h-12 flex-row items-center lg:hidden">
          <ToggleButton menu={menu} id="site-nav" />
          <DarkModeToggle />
        </div>
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
                className={`inline-block w-full whitespace-nowrap rounded px-3 py-0.5 text-lg text-dark outline-none transition-all focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-light dark:text-content-dark dark:text-light dark:focus:ring-primary-light/25 dark:focus:ring-offset-dark lg:w-auto lg:text-base ${isActive ? "pointer-events-none cursor-default bg-primary/75 text-light dark:bg-primary-light/75" : "hover:bg-primary/25 dark:hover:bg-primary-light/25"}`}
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
