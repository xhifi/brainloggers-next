import { Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
});

import "./globals.css";
import ContextsProvider from "@/contexts/ContextsProvider";
import CookieConsent from "@/components/cookie-consent";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata = {
  title: "Brainloggers",
  description:
    "Web Designers, Graphic Designers, & Developers | IT Solutions Providers and Digital Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-JXHYC29FW9" />
      <body
        className={`${roboto.variable}relative overflow-x-hidden bg-light text-dark dark:bg-dark dark:text-light`}
      >
        <ContextsProvider>
          <LenisWrapper>{children}</LenisWrapper>
        </ContextsProvider>
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  );
}
