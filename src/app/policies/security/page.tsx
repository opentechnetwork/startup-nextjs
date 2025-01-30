import Breadcrumb from "@/components/Common/Breadcrumb";
import SecurityPolicy from "@/components/Policies/SecurityPolicy"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy | Open Tech Innovation",
  description:
    "Learn about the security measures Open Tech Innovations takes to protect your data. Read our Security Policy.",
  keywords:
    "security policy, data protection, cybersecurity, Open Tech Innovations, data security",
};

const SecurityPolicySecurityPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Security Policy"
        description="Learn about the security measures Open Tech Innovations takes to protect your data. Read our Security Policy."
      />

      {/* Main Content Component */}
      <SecurityPolicy />
    </div>
  );
};

export default SecurityPolicySecurityPage;
