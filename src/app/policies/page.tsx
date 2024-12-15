import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Policies | Transparent Plans for Your Needs",
  description: "Explore the various policies we have, such as Privacy Policy, Terms of Use, and more.",
};

const policies = [
  {
    title: "Privacy Policy",
    description: "Learn how Open Tech Innovations collects, uses, and safeguards your personal information.",
    path: "/policies/privacy",
  },
  {
    title: "Terms of Use",
    description: "Understand the terms and conditions for using our services.",
    path: "/policies/terms_of_use",
  },
  {
    title: "Cookie Policy",
    description: "Learn about how we use cookies to improve your browsing experience.",
    path: "/policies/cookie",
  },
  {
    title: "Accessibility Statement",
    description: "A statement on our commitment to accessibility for all users.",
    path: "/policies/accessibility",
  },
  {
    title: "Security Policy",
    description: "Read about the security measures we take to protect your data.",
    path: "/policies/security",
  },
  {
    title: "Disclaimer",
    description: "Read our disclaimer about the information on this website.",
    path: "/policies/disclaimer",
  },
  {
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using Open Tech Innovations services.",
    path: "/policies/terms",
  },
];

const PoliciesPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="All Policies"
        description="Explore the various policies we have, such as Privacy Policy, Terms of Use, and more."
      />

      {/* Policies Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-10 mb-10">
        {policies.map((policy, index) => (
          <div key={index} className="dark:bg-bg-color-dark p-4 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-dark dark:text-white">{policy.title}</h2>
            <p className="text-sm text-gray-600 dark:text-white/70">{policy.description}</p>
            <Link href={policy.path} className="mt-4 inline-block text-primary hover:text-primary-dark font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PoliciesPage;
