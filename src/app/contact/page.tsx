import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import Metadata from "next";

export const metadata: Metadata = {
  title: "Contact Open Tech Innovations | Get in Touch Today",
  description: "Reach out to Open Tech Innovations for expert web design, SEO, and digital solutions. Contact us to start your project or schedule a demo.",
  // other metadata
  keywords: "Contact Open Tech Innovations, Get in Touch, Web Design, SEO Services, Digital Solutions"
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with Open Tech Innovations to discuss your project needs or learn more about our services. Whether you’re looking for custom web design, digital marketing strategies, or e-commerce solutions, our team is ready to help you bring your vision to life. Reach out today, and let’s start building your future online."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
