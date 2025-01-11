import React from "react";

const Disclaimer = () => {
  const currentDate = new Date().toLocaleDateString(); // Get the current date
  return (
    <section className="px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Disclaimer</h1>
      <p className="mb-8 text-lg">Effective Date: {currentDate}</p>

      <p className="mb-4">
        The information provided by Open Tech Innovations on [website URL] is
        for general informational purposes only. All information on the Site is
        provided in good faith; however, we make no representation or warranty
        of any kind, express or implied, regarding the accuracy, adequacy,
        validity, reliability, availability, or completeness of any information
        on the Site. For more information, you can refer to {" "}
        <a
          href="https://termly.io/resources/templates/disclaimer-template/"
          className="text-blue-600 underline"
          target="_blank"
        >
          Termly's Disclaimer Template
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        Professional Advice Disclaimer
      </h2>
      <p className="mb-4">
        The Site cannot and does not contain professional advice. The
        information is provided for general informational and educational
        purposes only and is not a substitute for professional advice.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">External Links Disclaimer</h2>
      <p className="mb-4">
        The Site may contain links to other websites or content belonging to or
        originating from third parties. Such external links are not
        investigated, monitored, or checked for accuracy, adequacy, validity,
        reliability, availability, or completeness by us. To learn more about
        handling external links and disclaimers, visit{" "}
        <a
          href="https://www.internetlegalattorney.com/when-is-website-disclaimer-effective/"
          className="text-blue-600 underline"
          target="_blank"
        >
          Phil Nicolosi Law
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Disclaimer, please contact us at:
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

export default Disclaimer;
