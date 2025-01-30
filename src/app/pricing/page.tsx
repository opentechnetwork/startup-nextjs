import PricingPlans from "@/components/Pricing";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Transparent Plans for Your Needs",
  description:
    "Explore our competitive pricing plans for web design, SEO, and digital solutions. Find the perfect package to meet your business needs.",
  keywords: "Pricing Plans, Web Design Pricing, SEO Services Pricing, Digital Solutions Cost, Open Tech Innovations"
};

const PricingPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Pricing Plans"
        description="Choose the plan that best suits your business needs. We offer flexible and transparent pricing to help you grow with confidence."
      />

      {/* Pricing Plans Section */}
      <PricingPlans />
    </>
  );
};

export default PricingPage;
