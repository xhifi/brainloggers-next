import NextJS from "@/static/images/reference-logos/next-js.svg";
import ReactJS from "@/static/images/reference-logos/react-js.svg";
import NodeJS from "@/static/images/reference-logos/node-js.svg";
import TailwindCSS from "@/static/images/reference-logos/tailwind-css.svg";
import Expo from "@/static/images/reference-logos/expo.svg";
import ExpoClient from "@/static/images/reference-logos/expo-client.svg";
import Ubuntu from "@/static/images/reference-logos/ubuntu.svg";
import Vercel from "@/static/images/reference-logos/vercel-light.svg";
import Golang from "@/static/images/reference-logos/golang.svg";
import Python from "@/static/images/reference-logos/python.svg";
// import Framer from "@/static/images/reference-logos/framer.svg";
import Framer from "@/static/images/reference-logos/framer.svg";

// import Redux from '@/static/images/reference-logos/redux.svg';
// import GraphQL from '@/static/images/reference-logos/graphql.svg';
// import Apollo from '@/static/images/reference-logos/apollo.svg';
// import Prisma from '@/static/images/reference-logos/prisma.svg';
// import PostgreSQL from '@/static/images/reference-logos/postgresql.svg';
// import MongoDB from '@/static/images/reference-logos/mongodb.svg';
// import Docker from '@/static/images/reference-logos/docker.svg';
// import Kubernetes from '@/static/images/reference-logos/kubernetes.svg';
// import AWS from '@/static/images/reference-logos/aws.svg';
// import GCP from '@/static/images/reference-logos/gcp.svg';
// import Azure from '@/static/images/reference-logos/azure.svg';
// import Stripe from '@/static/images/reference-logos/stripe.svg';
// import PayPal from '@/static/images/reference-logos/paypal.svg';
// import Plaid from '@/static/images/reference-logos/plaid.svg';
// import Auth0 from '@/static/images/reference-logos/auth0.svg';
// import Sentry from '@/static/images/reference-logos/sentry.svg';
// import Segment from '@/static/images/reference-logos/segment.svg';
// import FullStory from '@/static/images/reference-logos/fullstory.svg';
// import Hotjar from '@/static/images/reference-logos/hotjar.svg';
// import GoogleAnalytics from '@/static/images/reference-logos/google-analytics.svg';

import MarqueeItem from "./MarqueeItem";

const upperMarquee = [
  NextJS,
  ReactJS,
  NodeJS,
  TailwindCSS,
  Expo,
  ExpoClient,
  Ubuntu,
  Vercel,
  Golang,
  Python,
  Framer,
];

const IconScroll = () => {
  return (
    <div className="relative mt-8 overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-primary to-transparent" />
      <MarqueeItem images={upperMarquee} duration={upperMarquee.length * 5} />
    </div>
  );
};

export default IconScroll;
