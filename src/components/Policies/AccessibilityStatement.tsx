import React from "react";

const AccessibilityStatement = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Accessibility Statement</h1>
      <p className="mb-8 text-lg">Effective Date: {currentDate}</p>

      <p className="mb-4">
        At Open Tech Innovations, we are committed to ensuring digital
        accessibility for people with disabilities. Our aim is to continually
        enhance the user experience for everyone by applying the relevant
        accessibility standards and practices.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Accessibility on Our Site</h2>
      <p className="mb-4">
        Our website is designed to comply with the Web Content Accessibility
        Guidelines (WCAG) 2.1 Level AA standards. These guidelines are
        internationally recognized and help us ensure that our services are
        accessible to people with disabilities. We are committed to providing a
        website that caters to the widest possible audience. For more
        information, you can explore the{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          className="text-blue-600 underline"
          target="_blank"
        >
          WCAG 2.1 Overview
        </a>{" "}
        and{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          className="text-blue-600 underline"
          target="_blank"
        >
          WCAG 2.1 Guidelines
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Feedback</h2>
      <p className="mb-4">
        We highly value your feedback on the accessibility of Open Tech
        Innovations. If you encounter any accessibility barriers or have
        suggestions for improvement, please let us know. Your input is crucial
        in helping us enhance accessibility for all users. Contact us at:
      </p>
      <ul className="list-none pl-0">
        <li>
          Email:{" "}
          <a
            href="mailto:support@openwebcommunications.com"
            className="text-blue-600 underline"
          >
            support@openwebcommunications.com
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AccessibilityStatement;
