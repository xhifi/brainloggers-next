import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
