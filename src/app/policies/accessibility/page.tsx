import Breadcrumb from "@/components/Common/Breadcrumb";
import AccessibilityStatement from "@/components/Policies/AccessibilityStatement"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Open Tech Innovations",
  description:
    "Open Tech Innovations is committed to digital accessibility. Read our Accessibility Statement for more details.",
  keywords:
    "accessibility statement, digital accessibility, WCAG compliance, Open Tech Innovations",
};

const AccessibilityPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Accessibility Statement"
        description="Open Tech Innovations is committed to digital accessibility. Read our Accessibility Statement for more details."
      />

      {/* Main Content Component */}
      <AccessibilityStatement />
    </div>
  );
};

export default AccessibilityPage;
