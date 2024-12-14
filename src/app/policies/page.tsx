import PrivacyPolicy from "@components/Polices/PrivacyPolicy";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies | Transparent Plans for Your Needs",
  description:
    "Explore our flexible pricing plans tailored to your business. Choose the plan that suits your needs and grow with Open Tech Innovations.",
};

const PoliciesPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Pricing Plans"
        description="Choose the plan that best suits your business needs. We offer flexible and transparent pricing to help you grow with confidence."
      />

      {/* Policies Pages Section */}
      <PrivacyPolicy />
    </>
  );
};

export default PoliciesPage;
