import React from "react";
import Breadcrumb from "@components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Open Tech Innovations",
  description:
    "Get a personalized quote for web design, SEO, and digital solutions. Contact Open Tech Innovations to discuss your project needs today.",
  // other metadata
  keywords:
    "Request a Quote, Web Design Quote, SEO Services Quote, Digital Solutions Quote, Open Tech Innovations",
};

const RequestAQuotePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get a Quote Today"
        description="Learn about Open Tech Innovations, a leader in web design, front-end development, SEO, automations, integrations, and AI services. Discover our journey and innovative approach."
      />
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto w-full px-4 lg:w-8/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Help? Open a Ticket
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                <form
                  action="https://formspree.io/f/xlddryge"
                  method="POST"
                  target="_top"
                >
                  <fieldset>
                    <div className="flex flex-col gap-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Enter your company name"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone-number"
                          name="phone-number"
                          placeholder="Enter your phone number"
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                          rows={4}
                          required
                          className="w-full rounded-sm border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        ></textarea>
                      </div>

                      {/* Dropdowns */}
                      <div>
                        <label
                          htmlFor="business-area"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          What Do You Need?
                        </label>
                        <select
                          id="business-area"
                          name="business-area"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        >
                          <option value="web-design">Web Design</option>
                          <option value="e-commerce">e-Commerce</option>
                          <option value="web-development">
                            Web Development
                          </option>
                          <option value="ai-integration">AI Integration</option>
                          <option value="digital-marketing">
                            Digital Marketing
                          </option>
                          <option value="ad-setup">
                            Ad Setup and Maintenance
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="request-type"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Type of Request
                        </label>
                        <select
                          id="request-type"
                          name="request-type"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        >
                          <option value="product-inquiry">
                            Product Inquiry
                          </option>
                          <option value="purchase-request">
                            Purchase Request
                          </option>
                          <option value="general-inquiry">
                            General Inquiry
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium uppercase text-dark dark:text-white"
                        >
                          Title
                        </label>
                        <select
                          id="title"
                          name="title"
                          required
                          className="h-10 w-full rounded-sm border px-3 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        >
                          <option value="mr">Mr</option>
                          <option value="ms">Ms</option>
                          <option value="mx">Mx</option>
                        </select>
                      </div>

                      {/* Declaration of Consent */}
                      <div className="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          id="dpa-consent"
                          name="dpa-consent"
                          required
                          className="h-5 w-5 rounded-sm border outline-none focus:ring-2 focus:ring-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                        />
                        <label
                          htmlFor="dpa-consent"
                          className="text-sm font-medium text-dark dark:text-white"
                        >
                          Declaration of consent for data processing
                        </label>
                      </div>
                      <p>
                        You agree that your data from the form will be collected
                        and processed to answer your request. You can revoke
                        your consent at any time for the future by e-mail to
                        support@openwebcommunications.com. Detailed information
                        on the handling of user data can be found in our data
                        protection declaration.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full rounded-sm bg-primary px-9 py-4 text-sm font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
                      >
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAQuotePage;
