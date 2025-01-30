import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/Policies/PrivacyPolicy"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Open Tech Innovation",
  description:
    "Learn how Open Tech Innovations collects, uses, and protects your personal information. Read our Privacy Policy for detailed information.",
  keywords:
    "privacy policy, data protection, personal information, Open Tech Innovations, GDPR compliance",
};

const PoliciesPrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Privacy Policy"
        description="Learn how Open Tech Innovations collects, uses, and protects your personal information. Read our Privacy Policy for detailed information."
      />

      {/* Main Content Component */}
      <PrivacyPolicy />
    </div>
  );
};

export default PoliciesPrivacyPage;
