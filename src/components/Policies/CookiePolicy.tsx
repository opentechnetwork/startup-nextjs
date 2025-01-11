import React from "react";

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <section className="px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Cookie Policy</h1>
      <p className="mb-8 text-lg">Effective Date: {currentDate}</p>

      <p className="mb-4">
        Open Tech Innovations uses cookies on [website URL]. By using the
        Service, you consent to the use of cookies.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">What Are Cookies</h2>
      <p className="mb-4">
        Cookies are small text files that are used to store small pieces of
        information. They are stored on your device when the website is loaded
        on your browser. These cookies help us make the website function
        properly, make it more secure, provide a better user experience, and
        understand how the website performs and to analyze what works and where
        it needs improvement. For more information, you can visit{" "}
        <a
          href="https://html.com/resources/cookies-ultimate-guide/"
          className="text-blue-600 underline"
          target="_blank"
        >
          HTML.com's Ultimate Guide to Cookies{" "}
        </a>
        or{" "}
        <a
          href="https://www.cloudflare.com/learning/privacy/what-are-cookies/"
          className="text-blue-600 underline"
          target="_blank"
        >
          Cloudflare's guide on what cookies are
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Types of Cookies We Use</h2>
      <ul className="mb-4 list-disc pl-6">
        <li>
          Essential Cookies: These are necessary for the website to function and
          cannot be switched off in our systems.
        </li>
        <li>
          Analytics Cookies: These allow us to count visits and traffic sources
          so we can measure and improve the performance of our site.
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">Managing Cookies</h2>
      <p className="mb-4">
        You can set your browser to refuse all or some browser cookies, or to
        alert you when websites set or access cookies. If you disable or refuse
        cookies, please note that some parts of this site may become
        inaccessible or not function properly. For guidance, you can refer to {" "}
        <a
          href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop"
          className="text-blue-600 underline"
          target="_blank"
        >
          Google's guide on managing cookies in Chrome
        </a>
        .
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our cookie policy, please contact us at:
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

export default CookiePolicy;
