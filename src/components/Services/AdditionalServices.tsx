import React from "react";
import Link from "next/link";

interface ServiceProps {
  title: string;
  description: string;
  items: { title: string; text: string }[];
  footer: string;
}

const ServiceBlock: React.FC<ServiceProps> = ({
  title,
  description,
  items,
  footer,
}) => {
  return (
    <div className="flex h-full flex-col rounded-sm border-gray-200 bg-gray-100 p-2 shadow-sm dark:border-gray-800 dark:bg-white/10">
      <div className="h-full rounded-sm bg-white p-5 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {/* ✅ Block Heading (Title) */}
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 flex-grow space-y-4">
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

const AdditionalServices: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "Content Management Systems (CMS)",
      description:
        "Simplify your content management with our CMS Solutions. We utilize user-friendly platforms like WordPress to make content updates effortless.",
      items: [
        {
          title: "Easy Updates",
          text: "Manage content changes without technical expertise.",
        },
        {
          title: "Scalability",
          text: "Grow your website with flexible CMS solutions.",
        },
        {
          title: "Security",
          text: "Regular updates and patches to keep your CMS safe.",
        },
      ],
      footer: "Keep your website dynamic and up-to-date with our CMS services.",
    },
    {
      title: "UX/UI Design Services",
      description:
        "Enhance user satisfaction by optimizing website navigation and usability with our expert UX/UI design services.",
      items: [
        {
          title: "Intuitive Interfaces",
          text: "User-friendly designs that drive engagement.",
        },
        {
          title: "Improved Retention",
          text: "Reduce bounce rates with optimized navigation.",
        },
        {
          title: "Mobile-First Design",
          text: "Seamless experiences across all devices.",
        },
      ],
      footer: "Create an engaging and user-friendly website experience.",
    },
    {
      title: "Website Maintenance and Support",
      description:
        "Ensure your website runs smoothly with our regular updates, security checks, and performance optimizations.",
      items: [
        {
          title: "Security Updates",
          text: "Protect your site from vulnerabilities.",
        },
        {
          title: "Performance Optimization",
          text: "Keep your site fast and efficient.",
        },
        {
          title: "24/7 Monitoring",
          text: "Minimize downtime and maximize uptime.",
        },
      ],
      footer: "Maintain a secure and high-performing website effortlessly.",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Gain valuable insights into your website's performance with detailed reports and data analysis.",
      items: [
        {
          title: "User Behavior Tracking",
          text: "Understand visitor interactions.",
        },
        {
          title: "Key Performance Indicators",
          text: "Measure success with actionable metrics.",
        },
        {
          title: "Data-Driven Decisions",
          text: "Enhance strategy with insightful analytics.",
        },
      ],
      footer: "Leverage data to optimize and grow your online presence.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      {/* ✅ Full-width row for heading & description */}
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
        <div className="text-center lg:col-span-4 mb-5">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Additional Services
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
            We offer a range of additional services to complement your online
            presence. Explore our specialized offerings below.
          </p>
        </div>

        {/* ✅ 4-column grid below */}
        {services.map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center border-b border-body-color border-opacity-10">
        <div className="mb-8 mt-8 min-w-64 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            <Link href="/request-a-quote" className="button-class">
              Request a Quote
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
