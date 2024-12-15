import React from "react";


const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString(); // Dynamically fetches the current date

  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        Welcome to Open Tech Innovations. These terms and conditions outline the rules and regulations for the use of
        Open Tech Innovations&#39; Website, located at [website URL].
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Open Tech
        Innovations if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. License</h2>
      <p className="mb-4">
        Unless otherwise stated, Open Tech Innovations and/or its licensors own the intellectual property rights for all
        material on Open Tech Innovations. All intellectual property rights are reserved. You may access this from Open
        Tech Innovations for your own personal use subjected to restrictions set in these terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. User Obligations</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must not misuse our website by knowingly introducing viruses or other material that is malicious or technologically harmful.</li>
        <li>You must not attempt to gain unauthorized access to our website, the server on which our website is stored, or any server, computer, or database connected to our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall Open Tech Innovations, nor any of its officers, directors, and employees, be liable to you for
        anything arising out of or in any way connected with your use of this website, whether such liability is under
        contract, tort, or otherwise.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        Open Tech Innovations reserves the right to revise these terms and conditions at any time as it sees fit, and by
        using this website you are expected to review these terms on a regular basis.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
      <p className="mb-4">
        For any questions about these Terms and Conditions, please contact us at:
      </p>
      <ul className="list-none pl-0">
        <li>Email: <a href="mailto:support@openwebcommunications.com" className="text-primary hover:underline">support@openwebcommunications.com</a></li>
        <li>Facebook Messenger: <a href="https://m.me/OpenTechInnovations" className="text-primary hover:underline">Link to your Facebook Messenger</a></li>
      </ul>
    </section>
  );
};

export default TermsAndConditions;
