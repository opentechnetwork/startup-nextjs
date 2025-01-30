import React from "react";

export default function CustomSolutionsPage() {
  return (
    <section className="bg-gray-90 py-16 ">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Customized Solutions for Your Unique Business Needs
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            Overview: At Open Tech Innovations, we recognize the uniqueness of each
            business, offering tailored solutions to meet your specific
            requirements. Our expert team works closely with you to deliver a
            website that not only meets but exceeds your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          {/* Column 1: Tailored Design & Client-Centric Approach */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-dark  dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Tailored Design
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              We create bespoke website designs that reflect your brand identity and
              effectively engage your audience.
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Client-Centric Approach
            </h3>
            <p className="text-gray-600 dark:text-white">
              Our process involves you at every step, ensuring the final product
              aligns perfectly with your vision and goals.
            </p>
          </div>

          {/* Column 2: Managed Services for Seamless Online Operations */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-dark  dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Managed Services for Seamless Online Operations
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              Entrust us with the technicalities through our comprehensive managed
              services. From setup to ongoing management, we ensure your website
              runs smoothly, allowing you to focus on what you do best—running your
              business.
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Professional Oversight:</strong> Our team of experts handles
              all aspects of your website management, providing peace of mind and
              optimal performance.
            </p>
            <p className="text-gray-600 dark:text-white">
              <strong>Continuous Optimization:</strong> We regularly update and
              optimize your site to maintain top performance and alignment with the
              latest industry standards.
            </p>
          </div>

          {/* Column 3: Client-Centric Web Development */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-dark  dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Client-Centric Approach to Web Development
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              Our client-centric approach ensures that your business needs are at
              the forefront of our web development process. We prioritize effective
              collaboration to deliver a website that truly represents your brand.
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Collaborative Process:</strong> We work closely with you to
              understand your business goals, ensuring the final product is tailored
              to meet your specific requirements.
            </p>
            <p className="text-gray-600 dark:text-white">
              <strong>Engaging Designs:</strong> Our designs are not only visually
              appealing but also strategically crafted to keep visitors engaged and
              drive conversions.
            </p>
          </div>

          {/* Column 4: Expertise and Ongoing Support */}
          <div className="rounded-sm bg-white p-6 shadow-md transition hover:shadow-lg  dark:bg-gray-dark dark:shadow-zinc-800 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Expertise and Support You Can Rely On
            </h3>
            <p className="text-gray-600 dark:text-white mb-4">
              With years of experience and a team of specialists, Open Tech
              Innovations offers unparalleled expertise and support. We leverage
              cutting-edge technology and industry best practices to provide you
              with a website that stands out.
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Specialized Team:</strong> Our team includes experts in
              content, SEO, social media, and more, ensuring a comprehensive
              approach to your online presence.
            </p>
            <p className="text-gray-600 dark:text-white">
              <strong>Ongoing Support:</strong> We offer continuous support and
              insights to help you adapt to changing market trends and maximize your
              online impact.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
