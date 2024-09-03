"use client";

import DarkModeToggle from "./DarkModeToggle";
import ToggleButton from "./ToggleButton";
import BrandLogo from "./BrandLogo";
import NavLinks from "./NavLinks";
import NavigationSocial from "./NavigationSocial";
import { useRef, useState } from "react";

const data = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    menu: [
      {
        title: "Web Development",
        links: [
          { title: "UI/UX Design", href: "/blog" },
          { title: "Website Development", href: "#" },
          { title: "Web App Development", href: "#" },
          { title: "On Page SEO", href: "#" },
          { title: "Performance Optimizations", href: "#" },
        ],
      },
      {
        title: "Graphic Design",
        links: [
          { title: "Social Media Posts", href: "#" },
          { title: "Logo Design", href: "#" },
          { title: "Letterhead & Visiting Card", href: "#" },
          { title: "Shopfront Design", href: "#" },
          { title: "Merchandise Design", href: "#" },
        ],
      },
      {
        title: "IT Support & Security",
        links: [
          { title: "Linux Server Administration", href: "#" },
          { title: "Web Hosting & DNS Management", href: "#" },
          { title: "E-mail Server Administration", href: "#" },
          { title: "Windows RDP Deployment", href: "#" },
          { title: "Windows Server Management", href: "#" },
          { title: "FreeNAS/TrueNAS Deployment", href: "#" },
          { title: "Workplace Networking", href: "#" },
          { title: "Hardware Recommendation", href: "#" },
        ],
      },
      {
        title: "Digital Marketing",
        links: [
          { title: "Website SEO Optimization", href: "#" },
          { title: "Social Media Campaigns", href: "#" },
          { title: "Local Visibility & Reach", href: "#" },
          { title: "Mass E-mail Campaigns", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const AppNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <NavigationSocial />

      <header className="sticky top-0 z-50 flex items-center border-b bg-light shadow transition-colors dark:bg-dark">
        <div className="w-full px-6 lg:px-6">
          <nav className="relative z-10 box-border flex w-full basis-full flex-wrap items-center py-2">
            <BrandLogo
              width={160}
              color="fill-dark"
              className="transition-none dark:invert"
            />

            <NavLinks links={data} menu={{ menuRef, setMenuOpen }} />
            <div className="z-10 ml-auto flex items-center gap-x-2">
              <ToggleButton
                id="site-nav"
                menu={{ menuOpen, setMenuOpen, menuRef }}
              />
              <DarkModeToggle />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default AppNavigation;
