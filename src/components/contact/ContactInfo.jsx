import { GoogleMapsEmbed } from "@next/third-parties/google";
import BookingForm from "../forms/BookingForm";
import Link from "../primitives/Link";
import {
  BsClockFill,
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
  BsGlobeAsiaAustralia,
  BsWhatsapp,
} from "react-icons/bs";
import ContentWrapper from "./ContentWrapper";
import Map from "./Map";

const ContactInfo = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-20 gap-y-10 lg:flex-nowrap lg:gap-y-0">
      <Map />
      <ContentWrapper>
        <p className="text-base lg:text-lg">
          We don&apos;t charge for consultations, whether by email, phone or in
          person. However because of our tight schedule, if you think your chat
          with us may exceed 15 minutes, we suggest booking a meeting.
        </p>
        <ul className="space-y-0 text-base lg:text-lg">
          <li>
            <Link
              href="mailto:info@brainloggers.co.uk"
              className="inline-flex flex-nowrap items-center"
            >
              <BsFillEnvelopeAtFill className="" />
              <span className="ms-3">info@brainloggers.co.uk</span>
            </Link>
          </li>
          <li className="">
            <Link
              href="tel:02039954105"
              className="inline-flex flex-nowrap items-center"
            >
              <BsFillTelephoneFill className="" />
              <span className="ms-3">+44 20 3995 4105</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/447391157590"
              className="inline-flex flex-nowrap items-center"
            >
              <BsWhatsapp className="" />
              <span className="ms-3">+44 73 9115 7590</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="inline-flex flex-nowrap items-center">
              <BsGlobeAsiaAustralia className="" />
              <span className="ms-3">
                2 - Sanders Parade, Greyhound Lane, Streatham SW16 5NL
              </span>
            </Link>
          </li>
          <li>
            <span className="inline-flex flex-nowrap items-center">
              <BsClockFill className="text-primary" />
              <span className="ms-3">Mon - Sat 09:00 AM - 05:00 PM</span>
            </span>
          </li>
        </ul>
        <p className="text-base lg:text-lg">
          Kindly note that if we are on holiday our IVR messages will always let
          you know when we&apos;ll get back. However, if you have any query, you
          can always drop an email at the address above and it&apos;ll be
          responded to as soon as possible.
        </p>
        <p className="text-base lg:text-lg">
          For emergencies only on holidays, contact us on our designated
          whatsapp number.
        </p>
      </ContentWrapper>
    </div>
  );
};
export default ContactInfo;
