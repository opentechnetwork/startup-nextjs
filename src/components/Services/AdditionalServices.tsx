import React from "react";
import Link from "next/link";


const AdditionalServicesSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-dark md:pb-[120px]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Additional Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            We offer a range of additional services to complement your online
            presence. Explore our specialized offerings below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-4">
          {/* CMS */}
          <div className="rounded-sm bg-gray-50 p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Content Management Systems (CMS)
            </h3>
            <p className="text-gray-600 dark:text-white  ">
              Simplify your content management with our CMS Solutions. We
              utilize user-friendly platforms like WordPress to make content
              updates effortless, allowing you to focus on what matters most:
              your business. Our CMS services ensure your website remains
              dynamic and up-to-date.{" "}
            </p>
          </div>

          {/* UX/UI Design */}
          <div className="rounded-sm bg-gray-50 p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              UX/UI Design Services
            </h3>
            <p className="text-gray-600 dark:text-white">
              Our UX/UI Design Services are dedicated to enhancing user
              satisfaction by optimizing website navigation and usability. We
              create intuitive and engaging interfaces that improve user
              experience, leading to increased customer retention and
              satisfaction.{" "}
            </p>
          </div>

          {/* Website Maintenance */}
          <div className="rounded-sm bg-gray-50 p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Website Maintenance and Support
            </h3>
            <p className="text-gray-600 dark:text-white ">
              Keep your website running smoothly with our comprehensive Website
              Maintenance and Support services. We provide regular updates,
              security checks, and performance optimizations to ensure your site
              remains secure and efficient, minimizing downtime and maximizing
              user engagement.{" "}
            </p>
          </div>

          {/* Analytics and Reporting */}
          <div className="rounded-sm bg-gray-50 p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900 dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Analytics and Reporting
            </h3>
            <p className="text-gray-600 dark:text-white ">
              Gain valuable insights into your website&#39;s performance with
              our Analytics and Reporting services. We offer detailed reports
              and data analysis to help you understand user behavior, track key
              performance indicators, and make informed decisions to enhance
              your digital strategy.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-b border-body-color border-opacity-10">
        <div className="mb-8 mt-8 min-w-64  pb-8 dark:border-white dark:border-opacity-10">
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

export default AdditionalServicesSection;
