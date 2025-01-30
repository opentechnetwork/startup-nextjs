import CoreServices from "@/components/Services/MainServices";
import AdditionalServices from "@/components/Services/AdditionalServices";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Open Tech Innovations: Expert Web Design, SEO, and Digital Services",
  description: "Explore Open Tech Innovations' full range of services, including web design, SEO, SEM, e-commerce solutions, digital marketing, UX/UI design, CMS, website maintenance, and advanced integrations. Elevate your digital strategy with our innovative solutions.",
  keywords: "web design, SEO, SEM, e-commerce solutions, digital marketing, UX/UI design, CMS, website maintenance, analytics, advanced integrations, Open Tech Innovations, digital services",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Comprehensive Digital Services by Open Tech Innovations"
        description="Discover Open Tech Innovations' comprehensive services, including web design, SEO, SEM, e-commerce solutions, and digital marketing. Enhance your strategy with UX/UI design, CMS, website maintenance, analytics, and advanced integrations for a seamless digital experience."
      />
      <CoreServices />
      <AdditionalServices />
    </>
  );
};

export default ServicesPage;
