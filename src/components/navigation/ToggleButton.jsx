"use client";

const ToggleButton = () => {
  return (
    <button
      className="ms-auto rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 lg:hidden"
      onClick={(e) => {
        const nav = document.getElementById("site-nav");
        nav.classList.toggle("translate-x-full");
      }}
    >
      <span className="sr-only">Toggle Navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
