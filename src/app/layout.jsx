import { IBM_Plex_Sans, Raleway, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

import "./globals.css";
import ContextsProvider from "@/contexts/ContextsProvider";

export const metadata = {
  title: "Brainloggers",
  description:
    "Web Designers, Graphic Designers, & Developers | IT Solutions Providers and Digital Marketing Agency",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden`}>
        <ContextsProvider>{children}</ContextsProvider>
      </body>
    </html>
  );
}
