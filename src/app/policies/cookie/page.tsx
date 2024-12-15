import Breadcrumb from "@/components/Common/Breadcrumb";
import CookiePolicy from "@/components/Policies/CookiePolicy"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
};

const CookiePolicyCookiePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Policy Title"
        description="Learn more about this policy and how it applies to you."
      />

      {/* Main Content Component */}
      <CookiePolicy />
    </div>
  );
};

export default CookiePolicyCookiePage;
