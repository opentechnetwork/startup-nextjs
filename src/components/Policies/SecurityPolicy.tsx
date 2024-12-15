import React from "react";

const SecurityPolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Security Policy</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        At Open Tech Innovations, we prioritize the security of your data. We have implemented comprehensive security
        measures to protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Security Measures</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Data Encryption: We use encryption to protect your personal information during data transmission.</li>
        <li>Regular Security Audits: We conduct regular audits and assessments to ensure our security measures are up to
          date.
        </li>
        <li>Access Controls: Only authorized personnel have access to your personal information.</li>
        <li>Data Breach Procedures: In the event of a data breach, we will notify affected users and report the breach
          to relevant authorities as required by law.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">For any security concerns, please contact us at:</p>
      <ul className="list-none pl-0">
        <li>Email: support@openwebcommunications.com</li>
        <li>Facebook Messenger: [Link to your Facebook Messenger]</li>
      </ul>
    </section>
  );
};

export default SecurityPolicy;
