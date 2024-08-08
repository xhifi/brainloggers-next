import DarkModeToggle from "./DarkModeToggle";
import ToggleButton from "./ToggleButton";
import BrandLogo from "./BrandLogo";
import NavLinks from "./NavLinks";
import NavigationSocial from "./NavigationSocial";

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
  return (
    <>
      <NavigationSocial />

      <div className="sticky top-0 z-40 w-full">
        <div className="relative z-20 flex h-12 items-center border-b bg-white/15 px-6 backdrop-blur-lg transition-colors dark:border-neutral-700 dark:bg-black/25">
          <BrandLogo width={160} />
          <ToggleButton />
          <nav
            id="site-nav"
            className="fixed left-0 top-12 z-10 h-[calc(100vh-3rem)] w-full translate-x-full flex-col overflow-y-auto bg-white transition-all lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:justify-end lg:gap-x-6 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
          >
            <NavLinks links={data} />
            <div className="absolute bottom-0 flex w-full flex-row gap-x-6 px-6 py-6 lg:hidden">
              <button className="inline-block w-full whitespace-nowrap rounded-lg bg-sky-300 px-3 py-2">
                Book a Meeting
              </button>
            </div>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};
export default AppNavigation;
