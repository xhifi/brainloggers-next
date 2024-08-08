"use client";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="border-primary text-md focus-visible::outline-2 focus-visible::outline-offset-2 focus-visible::outline-sky-400 block w-full rounded-full border-2 px-4 py-2 transition-all"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
