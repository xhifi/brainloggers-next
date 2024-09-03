import Image from "next/image";

import Code from "@/static/images/feature/code.jpg";
import Laptop from "@/static/images/feature/laptop.jpg";
import Team1 from "@/static/images/feature/team-1.jpg";
import Team2 from "@/static/images/feature/team-2.jpg";
import FeatureImage from "./FeatureImage";
import ContentContainer from "./ContentContainer";

const Feature = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-16 lg:flex-nowrap lg:gap-20">
        <ContentContainer>
          <h2>Innovate &amp; Improve with our dedicated support </h2>
          <p className="text-lg">
            Step up and pioneer with our devoted teams. We help you assemble
            your own remote, dedicated development squads, carefully curated to
            meet your exclusive needs.
          </p>
          <p className="text-lg">
            Our developers bring a wealth of experience to the table, having
            collaborated with global teams. They are adept at working
            synergistically in a team or independently, as per your
            requirements.
          </p>
        </ContentContainer>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 flex h-full w-full">
              <FeatureImage
                src={Code}
                alt="Coding Screen"
                origin="bottom right"
                height="333px"
              />
            </div>
            <div className="col-span-1 flex h-full w-full items-end">
              <FeatureImage
                src={Team1}
                alt="UI/UX Design Team"
                origin="bottom left"
                height="280px"
                delay={0.1}
              />
            </div>
            <div className="col-span-1 flex h-full w-full items-start">
              <FeatureImage
                src={Team2}
                alt="Development Team"
                origin="top right"
                delay={0.2}
                height="280px"
              />
            </div>
            <div className="col-span-1 flex h-full w-full">
              <FeatureImage
                src={Laptop}
                alt="Closing Laptop"
                origin="top left"
                delay={0.3}
                height="333px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
