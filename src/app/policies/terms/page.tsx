import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsAndConditions from "@/components/Policies/TermsAndConditions"; // Replace with the correct component import
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Open Tech Innovations",
  description: "Review the Terms and Conditions for using Open Tech Innovations' website and services. Understand your rights and obligations.",
  keywords: "terms and conditions, user agreement, website rules, Open Tech Innovations, legal terms",
};


const TermsAndConditionsTermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Review the Terms and Conditions for using Open Tech Innovations' website and services. Understand your rights and obligations."
      />

      {/* Main Content Component */}
      <TermsAndConditions />
    </div>
  );
};

export default TermsAndConditionsTermsPage;
