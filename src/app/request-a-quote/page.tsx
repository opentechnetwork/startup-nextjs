import React from "react";
import Breadcrumb from "@components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Next-js Template",
  // other metadata
};

const RequestAQuotePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get a Quote Today"
        description="Learn about Open Tech Innovations, a leader in web design, front-end development, SEO, automations, integrations, and AI services. Discover our journey and innovative approach."
      />
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[600px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[25px]">
                <form
                  action="https://formspree.io/f/{FORM_ID}"
                  target="_top"
                  method="POST"
                >
                  <fieldset>
                    <div pb-5 className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="h-8 appearance-none rounded-sm border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="name"
                        name="name"
                        type="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="h-8 appearance-none rounded-sm border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        className="h-8 appearance-none rounded-sm border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="company"
                        name="company"
                        type="company"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="phone-number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="h-8 appearance-none rounded-sm border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="phone-number"
                        name="phone-number"
                        type="phone"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="resize-y appearance-none rounded-sm border-0 px-3 py-2 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="business-area"
                      >
                        What Do You Need?
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-sm border-0 bg-gray-light bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="business-area"
                        name="business-area"
                        required
                      >
                        <option value="dept-1">Web Design</option>
                        <option value="dept-3">e-Commerce</option>
                        <option value="dept-1">Web Development</option>
                        <option value="dept-2">AI Integration</option>
                        <option value="dept-3">Digital Marketing</option>
                        <option value="dept-2">Ad Setup and Maintenance</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="request-type"
                      >
                        Type of Request
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-sm border-0 bg-white bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="request-type"
                        name="request-type"
                        required
                      >
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="purchase-request">
                          Purchase Request
                        </option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-y-1.5 pb-5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-sm border-0 bg-white bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="title"
                        name="title"
                        required
                      >
                        <option value="mr">Mr</option>
                        <option value="ms">Ms</option>
                        <option value="mx">Mx</option>
                      </select>
                    </div>
                  </fieldset>
                  <div className="mt-2 flex gap-x-2 pb-5">
                    <div className="flex h-5 items-center">
                      <input
                        aria-describedby="dpa-consent-description"
                        className="checked:bg-checkbox-checked h-4 w-4 rounded border border-solid border-[--color-primary] bg-white checked:border-transparent checked:bg-[--color-primary] checked:bg-[size:100%_100%] checked:bg-center checked:bg-no-repeat focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight]"
                        id="dpa-consent"
                        name="dpa-consent"
                        required
                        type="checkbox"
                        value="consent"
                      />
                    </div>
                    <div>
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default] uppercase"
                        htmlFor="dpa-consent"
                      >
                        Declaration of consent for data processing
                      </label>
                      <p
                        className="mt-2.5 block text-sm text-[--color-text-muted]"
                        id="dpa-consent-description"
                      >
                        You agree that your data from the form will be collected
                        and processed to answer your request. You can revoke
                        your consent at any time for the future by e-mail to
                        support@openwebcommunications.com. Detailed information
                        on the handling of user data can be found in our data
                        protection declaration.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full flex flex-row-reverse gap-x-3">
                    <button
                      className="cursor-pointer rounded-sm bg-[--color-primary] px-8 py-4 text-sm font-medium leading-4 text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[--color-highlight]"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
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
