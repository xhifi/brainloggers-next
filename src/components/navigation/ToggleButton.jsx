"use client";

import { BsCaretDown, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const ToggleButton = ({ menu }) => {
  const { menuOpen, setMenuOpen } = menu;

  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      className="relative order-2 ms-auto rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 lg:hidden"
      onClick={toggleMenu}
    >
      <span className="sr-only">Toggle Navigation</span>
      {menuOpen ? (
        <BsCaretUpFill className="size-8" />
      ) : (
        <BsCaretDownFill className="size-8" />
      )}
    </button>
  );
};

export default ToggleButton;
