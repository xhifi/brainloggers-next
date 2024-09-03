import { Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
});

import "./globals.css";
import ContextsProvider from "@/contexts/ContextsProvider";
import Script from "next/script";
import CookieConsent from "@/components/cookie-consent";

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
        <ContextsProvider>{children}</ContextsProvider>
        <CookieConsent />
      </body>
      <Script
        src="https://embed.tawk.to/5d7abb28c22bdd393bb59796/default"
        strategy="worker"
      />
    </html>
  );
}
