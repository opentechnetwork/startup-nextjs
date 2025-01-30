import Breadcrumb from "@/components/Common/Breadcrumb";
import CookiePolicy from "@/components/Policies/CookiePolicy"; // Replace with the correct component import

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Open Tech Innovations",
  description:
    "Discover how Open Tech Innovations uses cookies to enhance your experience. Read our Cookie Policy for more information.",
  keywords:
    "cookie policy, cookies, website cookies, Open Tech Innovations, user experience",
};

const CookiePolicyCookiePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Cookie Policy"
        description="Discover how Open Tech Innovations uses cookies to enhance your experience. Read our Cookie Policy for more information."
      />

      {/* Main Content Component */}
      <CookiePolicy />
    </div>
  );
};

export default CookiePolicyCookiePage;
