import React from "react";

const TermsOfUse = () => {
  const currentDate = new Date().toLocaleDateString(); // Get the current date
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="text-lg mb-8">Effective Date: {currentDate}</p>

      <p className="mb-4">
        Welcome to Open Tech Innovations. By accessing or using our website
        [insert website URL], you agree to comply with and be bound by these
        Terms of Use. If you do not agree with these terms, please do not use
        our site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our site, you agree to these Terms of Use and all applicable
        laws and regulations. You are responsible for compliance with any local
        laws.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Use of the Site</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must not use the site in any way that causes damage to the site or impairs its availability.</li>
        <li>You must not use the site unlawfully, illegally, or fraudulently.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property Rights</h2>
      <p className="mb-4">
        All content on this site, including text, graphics, logos, and images,
        is the property of Open Tech Innovations or its content suppliers and
        is protected by copyright laws.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. User Content</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          You retain ownership of any content you post on the site, but you grant Open Tech Innovations a worldwide,
          non-exclusive, royalty-free
          license to use, reproduce, and distribute such content.
        </li>
        <li>You must not post any content that is illegal, infringing, or harmful.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        Open Tech Innovations will not be liable for any damages arising from
        the use of this site. This includes, but is not limited to, direct,
        indirect, incidental, or consequential damages.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Use at any time. Changes
        will be effective immediately upon posting. Your continued use of the
        site following the posting of changes will constitute your acceptance
        of such changes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by and construed in accordance with the laws of
        [Your State/Country], and you irrevocably submit to the exclusive
        jurisdiction of the courts in that location.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about these Terms of Use, please contact us at:</p>
      <ul className="list-none pl-0">
        <li>Email: support@openwebcommunications.com</li>
        <li>Facebook Messenger: [Link to your Facebook Messenger]</li>
      </ul>
    </section>
  );
};

export default TermsOfUse;
