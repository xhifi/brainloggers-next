import Footer from "@/components/footer";
import Navigation from "@/components/navigation/";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>Scrollable Tag Navigation for blog</div>
      {children}
      <Footer />
    </>
  );
};
export default Layout;
