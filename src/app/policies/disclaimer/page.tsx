import Breadcrumb from "@/components/Common/Breadcrumb";
import Disclaimer from "@/components/Policies/Disclaimer"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Open Tech Innovations",
  description:
    "Read the Disclaimer for Open Tech Innovations' website. Understand the limitations of liability and information use.",
  keywords:
    "disclaimer, liability, information use, Open Tech Innovations, legal disclaimer",
};

const DisclaimerDisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Disclaimer"
        description="Read the Disclaimer for Open Tech Innovations' website. Understand the limitations of liability and information use."
      />

      {/* Main Content Component */}
      <Disclaimer />
    </div>
  );
};

export default DisclaimerDisclaimerPage;
