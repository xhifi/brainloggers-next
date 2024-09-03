import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import PostFooter from "@/components/footer/PostFooter";
import Image from "next/image";
import DottedMap from "@/static/images/decorations/illustrations/map-dotted.svg";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <section className="overflow-hidden border-t dark:border-primary-light">
        <div className="relative bg-primary px-6 py-14 dark:bg-primary-dark">
          <Image
            src={DottedMap}
            alt=""
            className="pointer-events-none absolute -right-1/3 -top-1/2 z-0 h-auto max-w-screen-2xl animate-[spin_60s_linear_900ms_infinite] select-none opacity-5"
          />
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
        <div className="relative z-10 bg-primary text-light dark:bg-primary-dark">
          <PostFooter />
        </div>
      </section>
    </>
  );
}
