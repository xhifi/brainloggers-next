import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "../primitives/Link";

const MegaDropdown = ({ link, path }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, (_) => setOpen(false));

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <button
        onClick={(_) => setOpen(!open)}
        className={`text-content-light dark:text-content-dark flex w-full items-baseline gap-x-1 whitespace-nowrap rounded px-3 py-0.5 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-light dark:focus:ring-offset-dark lg:w-auto ${open ? "pointer-events-none bg-primary/15" : "hover:bg-primary/15"}`}
      >
        {link?.title}
        <BsChevronDoubleDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="overflow-hidden shadow-lg lg:absolute lg:left-auto lg:right-0 lg:w-full lg:min-w-[42rem]"
            ref={ref}
          >
            <div className="mt-2 flex w-auto flex-col flex-nowrap rounded border bg-light dark:bg-dark lg:flex-row">
              {link.menu.map((col, _) => {
                return (
                  <ul
                    className={`dark:text-content-dark w-full border-e p-5 pt-3 text-sm text-primary-dark last-of-type:border-e-0 lg:w-1/4`}
                    key={col.title}
                  >
                    <span className="text-content-light/ dark:text-content-dark/75 inline-block px-4 py-2 text-lg font-bold uppercase">
                      {col.title}
                    </span>
                    <ul className="border-right flex flex-col">
                      {col.links.map((link, _) => {
                        return (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="rounded px-4 py-2 transition-all hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2"
                          >
                            {link.title}
                          </Link>
                        );
                      })}
                    </ul>
                  </ul>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MegaDropdown;
