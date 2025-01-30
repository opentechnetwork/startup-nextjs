import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsOfUse from "@/components/Policies/TermsOfUse"; // Replace with the correct component import

import Metadata from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Open Tech Innovations",
  description:
    "Review the Terms of Use for accessing Open Tech Innovations' website. Know your responsibilities and rights.",
  keywords:
    "terms of use, user responsibilities, website access, Open Tech Innovations, user agreement",
};

const TermsOfUseTerms_Of_UsePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Terms of Use"
        description="Review the Terms of Use for accessing Open Tech Innovations' website. Know your responsibilities and rights."
      />

      {/* Main Content Component */}
      <TermsOfUse />
    </div>
  );
};

export default TermsOfUseTerms_Of_UsePage;
