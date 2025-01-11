import React from "react";

const Disclaimer = () => {
  const currentDate = new Date().toLocaleDateString(); // Get the current date
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        The information provided by Open Tech Innovations on [website URL] is for general informational purposes only.
        All information on the Site is provided in good faith; however, we make no representation or warranty of any
        kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness
        of any information on the Site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Professional Advice Disclaimer</h2>
      <p className="mb-4">
        The Site cannot and does not contain professional advice. The information is provided for general informational
        and educational purposes only and is not a substitute for professional advice.
      </p>

      <h2 className="text-2xl font-semibold mb-2">External Links Disclaimer</h2>
      <p className="mb-4">
        The Site may contain links to other websites or content belonging to or originating from third parties. Such
        external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
        availability, or completeness by us.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about this Disclaimer, please contact us at:</p>
      <ul className="list-none pl-0">
        <li>Email: support@openwebcommunications.com</li>
      </ul>
    </section>
  );
};

export default Disclaimer;
