import React from "react";

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        Open Tech Innovations uses cookies on [website URL]. By using the Service, you consent to the use of cookies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What Are Cookies</h2>
      <p className="mb-4">
        Cookies are small text files that are used to store small pieces of information. They are stored on your device
        when the website is loaded on
        your browser. These cookies help us make the website function properly, make it more secure, provide better user
        experience, and understand how the
        website performs and to analyze what works and where it needs improvement.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Essential Cookies: These are necessary for the website to function and cannot be switched off in our
          systems.
        </li>
        <li>Analytics Cookies: These allow us to count visits and traffic sources so we can measure and improve the
          performance of our site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
      <p className="mb-4">
        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
        cookies. If you disable or refuse cookies,
        please note that some parts of this site may become inaccessible or not function properly.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about our cookie policy, please contact us at:</p>
      <ul className="list-none pl-0">
        <li>Email: support@openwebcommunications.com</li>
      </ul>
    </section>
  );
};

export default CookiePolicy;
