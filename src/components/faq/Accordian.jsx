import { cx } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";

const bodyVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    height: "0",
    opacity: "1",
    transition: {
      duration: 0.1,
    },
  },
};

const containerVariants = {
  open: {
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    transition: {
      duration: 0.1,
    },
  },
};

const buttonVariants = {
  open: {
    rotate: 180,
  },
  closed: {
    rotate: 0,
  },
};
const buttonInnerVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

const Accordion = ({ index, question, children, onClick, open }) => {
  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      className={cx(
        `group overflow-hidden rounded`,
        open ? "bg-primary text-light" : "",
      )}
      key={question}
    >
      <button
        className={cx(
          "question flex w-full cursor-pointer flex-row items-start justify-between rounded bg-transparent px-6 py-3 text-left transition-all hover:bg-primary hover:text-light",
          open && "bg-primary text-light",
        )}
        onClick={onClick && (() => onClick())}
        role="button"
        aria-expanded={open}
        tabIndex={index}
      >
        <span className={`text-base font-bold`}>{question}</span>
        <motion.span
          className="relative ms-3 block size-5 justify-center"
          layout
          variants={buttonVariants}
          animate={open ? "open" : "closed"}
        >
          <div
            className={`absolute top-1/2 m-auto block h-1 w-full -translate-y-1/2 rounded-lg ${open ? "bg-light" : "bg-primary group-hover:bg-light"} `}
          />
          <motion.div
            variants={buttonInnerVariants}
            initial={{ translateX: "-50%" }}
            animate={open ? "open" : "closed"}
            transition={{
              duration: 0.1,
            }}
            className={`absolute left-1/2 block h-full w-1 -translate-x-1/2 rounded-lg ${open ? "bg-light" : "bg-primary group-hover:bg-light"}`}
          />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={bodyVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden border-t"
          >
            <div className={`bg-primary px-6 py-3 text-light`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
