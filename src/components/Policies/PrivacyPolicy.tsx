import React from "react";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p>Effective Date: {currentDate}</p>
        <p>
          Open Tech Innovations (&quot;we,&ldquo; &quot;us,&ldquo; or &quot;our&ldquo;) is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website [insert website URL], including any other media form, media
          channel, mobile website, or mobile application related or connected
          thereto (collectively, the &quot;Site&ldquo;). Please read this privacy policy
          carefully.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Information We Collect:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Personal Data:</strong> Information you provide directly,
            such as your name, email address, phone number, and company
            information.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Site, such as your IP
            address, browser type, operating system, access times, and the pages
            you have viewed directly before and after accessing the Site.
          </li>
          <li>
            <strong>Financial Data:</strong> If applicable, payment information,
            including credit card numbers and other financial data.
          </li>
          <li>
            <strong>Mobile Device Data:</strong> Device information, such as
            your mobile device ID, model, and manufacturer, and information
            about the location of your device.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          Use of Your Information:
        </h2>
        <p>
          We may use the information we collect from you in the following ways:
        </p>
        <ul className="list-disc pl-5">
          <li>To operate and maintain our Site</li>
          <li>To improve your experience on our Site</li>
          <li>To send administrative information to you</li>
          <li>To respond to your inquiries and provide customer service</li>
          <li>For marketing and promotional purposes</li>
          <li>To enforce our terms, conditions, and policies</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          Disclosure of Your Information:
        </h2>
        <p>
          We may share information we have collected about you in certain
          situations:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe
            disclosure is necessary to comply with the law or legal process, or
            to protect the rights, property, or safety of Open Tech Innovations.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third-party service providers to perform functions
            on our behalf, such as payment processing, data analysis, email
            delivery, hosting services, customer service, and marketing
            assistance.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Data Security:</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Your Rights:</h2>
        <ul className="list-disc pl-5">
          <li>Access, correct, or delete your personal information</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Contact Us:</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </p>
        <ul className="list-disc pl-5">
          <li>Email: support@openwebcommunications.com</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
