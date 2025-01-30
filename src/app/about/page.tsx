import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import Metadata from "next";

export const metadata: Metadata = {
  title: "About Open Tech Innovations | Leading Digital Solutions Provider",
  description: "Learn about Open Tech Innovations, our mission, values, and team. Discover how we deliver expert web design, SEO, and AI services.",
  keywords: "About Open Tech Innovations, Company Mission, Digital Solutions, Web Design, SEO, AI Services"
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Discover OTIN"
        description="Learn about Open Tech Innovations, a leader in web design, front-end development, SEO, automations, integrations, and AI services. Discover our journey and innovative approach."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
