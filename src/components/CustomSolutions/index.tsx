import React from "react";

import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  items: { title: string; text: string }[];
  footer: string;
}

const FeatureBlock: React.FC<FeatureProps> = ({
  title,
  description,
  items,
  footer,
}) => {
  return (
    <div className="flex flex-col rounded-sm h-full border-gray-200 bg-gray-100 p-2 shadow-sm dark:border-gray-800 dark:bg-white/10">
      <div className="rounded-sm bg-white h-full p-10 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {/* Tailwind CSS Logo
        <img
          src="/img/logo.svg"
          className="mb-6 h-6 dark:hidden"
          alt="Tailwind CSS Logo"
        />
        <img
          src="/img/logo-dark.svg"
          className="mb-6 hidden h-6 dark:block"
          alt="Tailwind CSS Logo Dark"
        />
*/}
        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-4 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mt-1 text-xl text-sky-600 dark:text-sky-400">
                ✓
              </span>
              <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                <strong>{item.title}:</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Closing Statement */}
        <p className="mt-auto text-sm text-gray-700 dark:text-gray-300">
          {footer}
        </p>


      </div>
    </div>
  );
};

const FeaturesGrid: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Tailored Design & Client-Centric Approach",
      description:
        "We create bespoke website designs that reflect your brand identity while keeping user experience and business goals in mind. Our client-centric approach ensures your needs are the driving force behind every project.",
      items: [
        { title: "Custom Branding", text: "Unique designs that reflect your brand identity and engage your audience." },
        { title: "User-Focused Experience", text: "Ensuring intuitive navigation and seamless interactions for visitors." },
        { title: "Collaborative Process", text: "Working closely with you to deliver a website tailored to your vision." },
      ],
      footer: "Let’s bring your vision to life with a website that stands out and drives engagement.",
    },
    {
      title: "Managed Services & Expertise",
      description:
        "Beyond development, we offer full-scale website management and optimization. Our industry expertise ensures that your digital presence remains efficient and aligned with modern trends.",
      items: [
        { title: "End-to-End Management", text: "We handle setup, hosting, security, and performance monitoring." },
        { title: "SEO & Optimization", text: "Keeping your site fast, responsive, and search-engine friendly." },
        { title: "Technical Oversight", text: "Regular updates and monitoring to ensure smooth operations." },
      ],
      footer: "Leave the technical aspects to us while you focus on growing your business.",
    },
    {
      title: "Support & Innovation with AI",
      description:
        "Leverage our ongoing support and AI-driven solutions to stay ahead in an evolving digital world. We provide continuous enhancements and cutting-edge tools to keep your website performing at its best.",
      items: [
        { title: "AI-Enhanced Features", text: "Smart integrations that streamline workflows and optimize user experience." },
        { title: "Ongoing Support", text: "Reliable assistance to keep your website updated and secure." },
        { title: "Future-Ready Strategies", text: "Helping you adapt to emerging trends and digital transformations." },
      ],
      footer: "Partner with us to innovate and enhance your online presence with AI-powered solutions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ✅ Full-width heading & description above the grid */}
      <div className="text-center mb-6 lg:col-span-3">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Customized Solutions for Your Unique Business Needs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-3xl mx-auto">
          At Open Tech Innovations, we recognize the uniqueness of each business, offering tailored solutions to meet
          your specific requirements.
          Our expert team works closely with you to deliver a website that not only meets but exceeds your expectations.
        </p>
      </div>

      {/* ✅ Feature Blocks Grid (Sticking to Your Format) */}
      <div className="relative mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2 bg-gray-90">
        {features.map((feature, index) => (
          <FeatureBlock key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
