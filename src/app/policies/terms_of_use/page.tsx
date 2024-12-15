import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsOfUse from "@/components/Policies/TermsOfUse"; // Replace with the correct component import

export const metadata = {
  title: "Policy Title | Open Tech Innovations",
  description: "This is a detailed description for the specific policy page.",
};

const TermsOfUseTerms_Of_UsePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Policy Title"
        description="Learn more about this policy and how it applies to you."
      />

      {/* Main Content Component */}
      <TermsOfUse />
    </div>
  );
};

export default TermsOfUseTerms_Of_UsePage;
