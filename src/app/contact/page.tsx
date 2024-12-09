import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
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
