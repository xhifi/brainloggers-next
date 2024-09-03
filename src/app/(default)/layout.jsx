import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PostFooter from "@/components/footer/PostFooter";
import Image from "next/image";
import DottedMap from "@/static/images/decorations/illustrations/map-dotted.svg";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <section className="overflow-hidden border-t">
        <div className="relative bg-primary px-6 py-14 text-content-dark">
          <Image
            src={DottedMap}
            alt=""
            className="pointer-events-none absolute -right-1/3 -top-1/2 z-0 h-auto max-w-screen-2xl animate-[spin_60s_linear_900ms_infinite] select-none opacity-5"
          />
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
        <div className="relative z-10">
          <PostFooter />
        </div>
      </section>
    </>
  );
}
