import React from "react";

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
        {/* Block Heading (Title) */}
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

const CoreServices: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "Web Design & Development",
      description:
        "Our custom web design and professional development services create responsive, visually engaging websites that capture your brand’s unique identity.",
      items: [
        {
          title: "Responsive Design",
          text: "Ensures seamless experiences across all devices.",
        },
        {
          title: "User-Centered UI/UX",
          text: "Crafting intuitive and visually engaging layouts.",
        },
        {
          title: "Performance Optimization",
          text: "Fast, smooth, and SEO-friendly websites.",
        },
      ],
      footer:
        "Let’s bring your vision to life with a website that stands out and drives engagement.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your online visibility and drive traffic with our advanced SEO strategies, including keyword research, on-page SEO, and content development.",
      items: [
        {
          title: "Keyword Strategy",
          text: "Targeted research to rank higher on search engines.",
        },
        {
          title: "Technical SEO",
          text: "Site speed, structure, and metadata enhancements.",
        },
        {
          title: "Content Optimization",
          text: "High-quality content that drives traffic.",
        },
      ],
      footer: "Ensure your site ranks higher and attracts the right audience.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Robust online stores built for smooth customer journeys and conversions.",
      items: [
        {
          title: "Secure Payments",
          text: "Seamless integration of trusted payment gateways.",
        },
        {
          title: "Inventory Management",
          text: "Efficient tracking and product organization.",
        },
        {
          title: "Mobile-Friendly Shopping",
          text: "Optimized experiences for mobile users.",
        },
      ],
      footer:
        "Build a seamless e-commerce experience that converts visitors into buyers.",
    },
    {
      title: "Digital Marketing Services",
      description:
        "Effective online marketing strategies to enhance brand awareness.",
      items: [
        {
          title: "Social Media Growth",
          text: "Expand your reach on multiple platforms.",
        },
        { title: "Email Campaigns", text: "Targeted messaging that converts." },
        {
          title: "Brand Positioning",
          text: "Consistent, high-quality marketing strategies.",
        },
      ],
      footer: "Increase engagement and turn followers into loyal customers.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      {/* ✅ Full-width row for heading & description */}
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
        <div className="text-center lg:col-span-4 mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Core Services
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
            Our services are designed to bring your business online and boost
            your presence. Explore our offerings below.
          </p>
        </div>

        {/* ✅ 4-column grid below */}
        {services.map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
