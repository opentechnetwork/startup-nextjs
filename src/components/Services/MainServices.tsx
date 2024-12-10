import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Core Services: Web Design, SEO, SEM, E-commerce & More",
  description: "Explore Open Tech Innovations' core services including custom web design, SEO optimization, SEM management, e-commerce solutions, and digital marketing. Boost your brand's online presence with our expert solutions.",
  keywords: "web design, SEO optimization, SEM management, e-commerce solutions, digital marketing, AI integrations, Open Tech Innovations, online presence, brand visibility",
};

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Services</h2>
          <p className="text-lg text-gray-600">
            Our services are designed to bring your business online and boost your presence. Explore our offerings below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Design and Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Design and Development</h3>
            <p className="text-gray-600">
            At Open Tech Innovations, our Custom Web Design and Professional Web Development services are crafted to create responsive, visually engaging websites that capture your brand's unique identity. We ensure your site is not only aesthetically pleasing but also optimized for performance and user experience.            </p>
          </div>

          {/* SEO */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Search Engine Optimization (SEO)</h3>
            <p className="text-gray-600">
            Our cutting-edge SEO Optimization services are designed to enhance your online visibility and drive qualified traffic. Through comprehensive Keyword Research, On-page SEO, and strategic content development, we ensure your site ranks high on search engines, attracting more potential customers.            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600">
            Our E-commerce Solutions offer secure, scalable websites with seamless Payment Gateway Integration, providing a flawless online shopping experience. We focus on optimizing your e-commerce platform to increase conversions and customer satisfaction.            </p>
          </div>

          {/* Digital Marketing Services */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing Services</h3>
            <p className="text-gray-600">
            Our comprehensive Digital Marketing Services are designed to amplify your brand's presence. We provide strategic Social Media Management and Content Marketing to engage your audience effectively and drive meaningful interactions.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
