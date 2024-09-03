import Button from "../primitives/Button";
import SectionHeading from "../primitives/SectionHeading";
import PriceFeature from "./PriceFeature";
import PriceCard from "./PriceCard";

import BlowHorn from "@/static/images/icons/blowhorn.svg";
import ColorPalette from "@/static/images/icons/color-palette.svg";
import GlobeEU from "@/static/images/icons/globe-eu.svg";
import TechnicalSupport from "@/static/images/icons/support.svg";

const Pricing = () => {
  return (
    <div className="">
      <div className="overflow-hidden rounded-lg border-2 border-primary shadow-2xl dark:border-primary-light">
        <div className="flex flex-wrap md:[&>*:nth-child(3)]:border-b-0 md:[&>*:nth-child(odd)]:border-e-2 [&>*]:border-b-2 lg:[&>*]:border-b-0 lg:[&>*]:border-e-2">
          <PriceCard
            title="Web Design & Dev"
            description="Business sites, eCommerce sites, portfolios and blogs etc."
            price="12-30"
            unit="hr"
            image={GlobeEU}
          >
            <ul className="mt-6 space-y-2 py-4">
              <li>
                <PriceFeature title="Money back guarantee" />
              </li>
              <li>
                <PriceFeature title="Quick project delivery" />
              </li>
              <li>
                <PriceFeature title="Continuous Integration & Delivery" />
              </li>
              <li>
                <PriceFeature title="CMS Support" />
              </li>
              <li>
                <PriceFeature title="SEO optimized code by default" />
              </li>
            </ul>
          </PriceCard>
          <PriceCard
            title="Graphic Design"
            description="Logo, branding, social media images, banners etc."
            price="50-450"
            unit="item"
            image={ColorPalette}
          >
            <ul className="mt-6 space-y-2 py-4">
              <li>
                <PriceFeature title="3 Design revisions" />
              </li>
              <li>
                <PriceFeature title="Quick delivery" />
              </li>
              <li>
                <PriceFeature title="Unique enough to trademark" />
              </li>
              <li>
                <PriceFeature title="Multiple color schemes where applicable" />
              </li>
              <li>
                <PriceFeature title="Pixel perfect for digital & physical medium consumption" />
              </li>
            </ul>
          </PriceCard>
          <PriceCard
            title="Digital Marketing & SEO"
            description="Social media campaigns, email marketing, SEO etc."
            price="8-21"
            unit="hr"
            image={BlowHorn}
          >
            <ul className="mt-6 space-y-2 py-4">
              <li>
                <PriceFeature title="Customized and unique campaigns" />
              </li>
              <li>
                <PriceFeature title="In-house mass email delivery system" />
              </li>
              <li>
                <PriceFeature title="Hand crafted social images" />
              </li>
              <li>
                <PriceFeature title="A-B testing if applicable" />
              </li>
              <li>
                <PriceFeature title="Content quality assertion" />
              </li>
            </ul>
          </PriceCard>
          <PriceCard
            title="IT Support & Consultation"
            description="Technical support, consultation, server management etc."
            price="18-45"
            unit="hr"
            image={TechnicalSupport}
          >
            <ul className="mt-6 space-y-2 py-4">
              <li>
                <PriceFeature title="Dedicated support agent" />
              </li>
              <li>
                <PriceFeature title="Pay when satisfied" />
              </li>
              <li>
                <PriceFeature title="12 hours a day, 5 days a week availability" />
              </li>
              <li>
                <PriceFeature title="24/7 critical support availability" />
              </li>
            </ul>
          </PriceCard>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-y-4 border-t-2 border-primary bg-warning p-8 text-dark transition-colors hover:bg-warning/80 lg:justify-between lg:gap-y-0">
          <div className="w-full text-center lg:w-auto lg:text-left">
            <h4>Need custom pricing?</h4>
            <p>
              Do you have a specific niche or require multiple or all services
              for your business?
            </p>
          </div>
          <Button type="link" href="/contact" size="lg" intent="primary">
            Contact Billing
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
