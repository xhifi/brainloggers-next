import {
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
  BsGlobeAsiaAustralia,
  BsWhatsapp,
} from "react-icons/bs";
import BrandLogo from "../navigation/BrandLogo";
import Button from "../primitives/Button";
import Input from "../primitives/forms/Input";
import AnimatedList from "./AnimatedList";

const LiItems = [
  { href: "/", title: "Engagement Policy" },
  { href: "/", title: "Privacy Policy" },
  { href: "/", title: "Data Security Policy" },
  { href: "/", title: "Data Retention Policy" },
  ,
];

const contactInfo = [
  {
    href: "mailto:info@brainloggers.co.uk",
    title: "info@brainloggers.co.uk",
    icon: <BsFillEnvelopeAtFill />,
  },
  {
    href: "tel:02039954105",
    title: "+44 20 3995 4105",
    icon: <BsFillTelephoneFill />,
  },
  {
    href: "https://wa.me/447391157590",
    title: "+44 73 9115 7590",
    icon: <BsWhatsapp />,
  },
  {
    href: "https://www.google.com/maps?ll=51.421433,-0.130168&z=14&t=m&hl=en-GB&gl=US&mapclient=embed&cid=4584562102386127061",
    title: "2 - Sanders Parade, Greyhound Lane, Streatham SW16 5NL",
    icon: <BsGlobeAsiaAustralia />,
  },
];

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-6 text-light md:grid-cols-2 lg:grid-cols-3 lg:place-items-center">
        <div className="col-span-1 space-y-3 md:w-1/2 lg:w-auto">
          <BrandLogo color="dark" width="250" />
          <ul className="space-y-0">
            <AnimatedList items={contactInfo} />
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="mb-2 text-xl font-bold">Policies</h3>
          <ul>
            <AnimatedList items={LiItems} />
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="mb-2 text-xl font-bold">Subscribe to Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            laboriosam dolorem et eos.
          </p>
          <form className="mt-4 space-y-2">
            <Input type="email" required placeholder="name@email.com" />
            <Button intent="secondary-outline" className={`w-full`}>
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Footer;
