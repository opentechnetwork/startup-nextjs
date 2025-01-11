import React from "react";

const SecurityPolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Security Policy</h1>
      <p className="mb-8 text-lg">Effective Date: {currentDate}</p>

      <p className="mb-4">
        At Open Tech Innovations, we prioritize the security of your data. We
        have implemented comprehensive security measures to protect your
        information.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Security Measures</h2>
      <ul className="mb-4 list-disc pl-6">
        <li>
          Data Encryption: We use industry-standard encryption methods, such as
          AES-256, to protect your personal information both during transmission
          and storage. Encryption transforms your data into a secure code to
          prevent unauthorized access. Learn more about encryption through
          <a
            href="https://www.iana.org/help/example-domains" target="_blank"
            className="text-blue-600 underline"
          >
            {" "}
            IANA
          </a>{" "}
          or
          <a
            href="https://blog.mozilla.org/en/privacy-security/how-to-secure-data-online/" target="_blank"
            className="text-blue-600 underline"
          >
            {" "}
            Mozilla &amp; Data Security
          </a>
          .
        </li>
        <li>
          Regular Security Audits: We conduct regular audits and assessments to
          ensure our security measures are up to date.
        </li>
        <li>
          Access Controls: Only authorized personnel have access to your
          personal information, using methods like multi-factor authentication.
        </li>
        <li>
          Data Breach Procedures: In the event of a data breach, we will notify
          affected users within 72 hours and report the breach to relevant
          authorities as required by law.
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
      <p className="mb-4">For any security concerns, please contact us at:</p>
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

export default SecurityPolicy;
