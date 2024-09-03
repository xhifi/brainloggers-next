import ContactInfo from "@/components/contact/ContactInfo";
import SectionHeading from "@/components/primitives/SectionHeading";

const ContactPage = () => {
  return (
    <div className="px-6 py-20 pt-10">
      <SectionHeading>Contact & Social Information</SectionHeading>
      <ContactInfo />
    </div>
  );
};
export default ContactPage;
