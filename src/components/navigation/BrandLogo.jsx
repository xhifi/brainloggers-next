import Logo from "@/static/logo.svg";
import Image from "next/image";
import Link from "@/components/primitives/Link";

const BrandLogo = ({ width = 220 }) => {
  return (
    <Link
      href="/"
      className="rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
    >
      <Image
        src={Logo}
        alt="Brainloggers Brand Logo"
        width={width}
        loading="eager"
      />
    </Link>
  );
};

export default BrandLogo;
