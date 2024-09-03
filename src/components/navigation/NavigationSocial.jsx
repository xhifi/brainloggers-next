import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
  BsTwitter,
  BsWhatsapp,
  BsClockFill,
} from "react-icons/bs";
import Link from "../primitives/Link";

const NavigationSocial = () => {
  return (
    <div className="relative isolate z-50 hidden items-center border-b-[1px] bg-light text-content-light transition-colors dark:bg-dark dark:text-content-dark lg:block">
      <div className="flex items-center px-6 py-1">
        <div className="inline-block">
          <ul className="flex items-center gap-x-4">
            <li>
              <Link
                href="mailto:info@brainloggers.co.uk"
                className="inline-flex flex-nowrap items-center"
              >
                <BsFillEnvelopeAtFill className="text-primary" />
                <span className="ms-1">info@brainloggers.co.uk</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="tel:02039954105"
                className="inline-flex flex-nowrap items-center"
              >
                <BsFillTelephoneFill className="text-primary" />
                <span className="ms-1">+44 20 3995 4105</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/447391157590"
                className="inline-flex flex-nowrap items-center"
              >
                <BsWhatsapp className="text-primary" />
                <span className="ms-1">+44 73 9115 7590</span>
              </Link>
            </li>
            <li>
              <span className="inline-flex flex-nowrap items-center">
                <BsClockFill className="text-primary" />
                <span className="ms-1">Mon - Sat 09:00 AM - 05:00 PM</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="inline-block lg:ms-auto">
          <ul className="flex items-center gap-x-2">
            <li>
              <Link href="/">
                <BsFacebook className="size-5 text-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsInstagram className="size-5 text-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsGoogle className="size-5 text-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsTwitter className="size-5 text-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavigationSocial;
