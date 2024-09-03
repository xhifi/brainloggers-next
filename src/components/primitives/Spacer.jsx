import { cva, cx } from "class-variance-authority";

const Spacer = ({ size }) => {
  const spacer = cva("block w-full", {
    variants: {
      size: {
        xs: "h-5",
        sm: "h-10",
        md: "h-20",
        lg: "h-30",
        xl: "h-40",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "md",
    },
  });

  return <div className={cx(spacer({ size }))} />;
};
export default Spacer;
