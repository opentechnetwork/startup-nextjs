import React from "react";

const AccessibilityStatement = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Accessibility Statement</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        Open Tech Innovations is committed to ensuring digital accessibility for people with disabilities. We are
        continually improving the user experience
        for everyone and applying the relevant accessibility standards.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Accessibility on Our Site</h2>
      <p className="mb-4">
        Our website is designed to comply with WCAG 2.1 Level AA standards. We strive to ensure that our services are
        accessible to people with disabilities
        and are committed to providing a website that is accessible to the widest possible audience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
      <p className="mb-4">
        We welcome your feedback on the accessibility of Open Tech Innovations. Please let us know if you encounter
        accessibility barriers on our website by
        contacting us at:
      </p>
      <ul className="list-none pl-0">
        <li>Email: support@openwebcommunications.com</li>
        <li>Facebook Messenger: [Link to your Facebook Messenger]</li>
      </ul>
    </section>
  );
};

export default AccessibilityStatement;
