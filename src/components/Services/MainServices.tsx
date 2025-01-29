import React from "react";


const Services = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-dark md:pb-[120px]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center ">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Core Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            Our services are designed to bring your business online and boost
            your presence. Explore our offerings below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
          {/* Web Design and Development */}
          <div className="rounded-sm bg-white p-6 shadow-md transition dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Web Design and Development
            </h3>
            <p className="text-gray-600 dark:text-white">
              At Open Tech Innovations, our Custom Web Design and Professional
              Web Development services are crafted to create responsive,
              visually engaging websites that capture your brand&#39;s unique
              identity. We ensure your site is not only aesthetically pleasing
              but also optimized for performance and user experience.{" "}
            </p>
          </div>

          {/* SEO */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-600 dark:text-white">
              Our cutting-edge SEO Optimization services are designed to enhance
              your online visibility and drive qualified traffic. Through
              comprehensive Keyword Research, On-page SEO, and strategic content
              development, we ensure your site ranks high on search engines,
              attracting more potential customers.{" "}
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              E-commerce Solutions
            </h3>
            <p className="text-gray-600 dark:text-white">
              Our E-commerce Solutions offer secure, scalable websites with
              seamless Payment Gateway Integration, providing a flawless online
              shopping experience. We focus on optimizing your e-commerce
              platform to increase conversions and customer satisfaction.{" "}
            </p>
          </div>

          {/* Digital Marketing Services */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Digital Marketing Services
            </h3>
            <p className="text-gray-600 dark:text-white">
              Our comprehensive Digital Marketing Services are designed to
              amplify your brand&#39;s presence. We provide strategic Social Media
              Management and Content Marketing to engage your audience
              effectively and drive meaningful interactions.{" "}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
