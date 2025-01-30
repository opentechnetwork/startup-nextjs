import Breadcrumb from "@/components/Common/Breadcrumb";
import CustomSolutions from "@/components/CustomSolutions";


import Metadata from "next";

export const metadata: Metadata = {
  // Replace with your page’s actual title
  title: "Customized Solutions for Unique Business Needs",

  // Replace with your page’s meta description
  description:
    "Discover how Open Tech Innovations offers tailored digital solutions to meet the unique needs of your business. Our client-centric approach ensures that your website is not only visually appealing but also strategically designed to drive engagement and conversions.",

  // Replace with relevant keywords
  keywords:
    "customized solutions, business needs, tailored web design, client-centric approach, Open Tech Innovations, digital solutions, strategic design, engagement, conversions",
};

const CustomSolutionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        // Replace with the actual name of your page
        pageName="Customized Solutions for Unique Business Needs"
        // Replace with the short description of your page
        description="Discover how Open Tech Innovations offers tailored digital solutions to meet the unique needs of your business. Our client-centric approach ensures that your website is not only visually appealing but also strategically designed to drive engagement and conversions."
      />

      {/* Main Content Component */}
      <CustomSolutions />
      {/* ^ Swap out the above component with the real component for this page */}
    </div>
  );
};

export default CustomSolutionsPage;
