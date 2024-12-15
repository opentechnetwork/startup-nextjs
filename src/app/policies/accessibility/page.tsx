import Breadcrumb from "@/components/Common/Breadcrumb";
import AccessibilityStatement  from "@/components/Policies/AccessibilityStatement"; // Replace with the correct component import

export const metadata = {
  title: "Policy Title | Open Tech Innovations",
  description: "This is a detailed description for the specific policy page.",
};

const AccessibilityPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Policy Title"
        description="Learn more about this policy and how it applies to you."
      />

      {/* Main Content Component */}
      <AccessibilityStatement />
    </div>
  );
};

export default AccessibilityPage;
