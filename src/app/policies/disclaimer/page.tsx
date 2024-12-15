import Breadcrumb from "@/components/Common/Breadcrumb";
import Disclaimer from "@/components/Policies/Disclaimer"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
};

const DisclaimerDisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Policy Title"
        description="Learn more about this policy and how it applies to you."
      />

      {/* Main Content Component */}
      <Disclaimer />
    </div>
  );
};

export default DisclaimerDisclaimerPage;
