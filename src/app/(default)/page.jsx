import Image from "next/image";

import Hero from "@/components/hero/Hero";
import Carousel from "@/components/cards-carousel/Carousel";
import Card from "@/components/cards-carousel/Card";
import IconGroups from "@/components/icon-groups/IconGroup";
import faqs from "@/static/data/faqs";
import Spacer from "@/components/primitives/Spacer";
import Pricing from "@/components/pricing/Pricing";
import FeatureIndex from "@/components/feature/Feature";
import ContactInfo from "@/components/contact/ContactInfo";
import SectionHeading from "@/components/primitives/SectionHeading";
import AccordionGroup from "@/components/faq/AccordionGroup";

import CornerStructure from "@/static/images/decorations/illustrations/corner-struct.svg";
import Laptop from "@/static/images/feature/laptop.jpg";

export default function Home() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      href={card.href}
      card={card}
      index={index}
      alt={card.title}
    />
  ));

  return (
    <main className="">
      <Hero />

      <Spacer />

      <section className="px-6">
        <IconGroups />
      </section>

      <Spacer />

      <section className="relative overflow-hidden bg-light px-6 py-16 text-dark shadow-2xl dark:bg-primary-dark md:text-light">
        <Image
          src={CornerStructure}
          className="absolute left-0 top-0 z-[1]"
          alt=""
          aria-hidden="true"
          role="presentation"
        />
        <Image
          placeholder="blur"
          src={Laptop}
          quality={2}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="absolute -bottom-24 right-0 z-0 -rotate-90 scale-150 blur-3xl md:bottom-0"
        />
        <FeatureIndex />
      </section>

      <Spacer />

      <section className="px-6">
        <SectionHeading>Peek into our technical insight</SectionHeading>
        <Carousel items={cards} />
      </section>

      <Spacer size="xs" />

      <section className="px-6">
        <SectionHeading>
          Price is what you pay Value is what you get
        </SectionHeading>
        <Pricing />
      </section>

      <Spacer />

      <section className="px-6">
        <SectionHeading>Frequently asked questions</SectionHeading>
        <AccordionGroup data={faqs} />
      </section>

      <Spacer />

      <section className="px-6">
        <SectionHeading>
          Contacting us can&apos;t be easier any easier
        </SectionHeading>
        <ContactInfo />
      </section>

      <Spacer />
    </main>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
];
