import Link from "next/link";
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Next-js Template",
  // other metadata
};

const RequestAQuotePage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <form
                  action="https://formspree.io/f/{FORM_ID}"
                  target="_top"
                  method="POST"
                >
                  <fieldset>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="business-area"
                      >
                        Business Area
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-md border-0 bg-white bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="business-area"
                        name="business-area"
                        required
                      >
                        <option value="dept-1">Dept 1</option>
                        <option value="dept-2">Dept 2</option>
                        <option value="dept-3">Dept 3</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="request-type"
                      >
                        Type of Request
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-md border-0 bg-white bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
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
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <select
                        className="bg-caret-down h-8 appearance-none rounded-md border-0 bg-white bg-[size:1.5em_1.5em] bg-[position:right_0.5rem_center] bg-no-repeat px-3 pe-10 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="title"
                        name="title"
                        required
                      >
                        <option value="mr">Mr</option>
                        <option value="ms">Ms</option>
                        <option value="mx">Mx</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="h-8 appearance-none rounded-md border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="h-8 appearance-none rounded-md border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        className="h-8 appearance-none rounded-md border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="company"
                        name="company"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <input
                        className="h-8 appearance-none rounded-md border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="country"
                        name="country"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="phone-number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="h-8 appearance-none rounded-md border-0 px-3 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="phone-number"
                        name="phone-number"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                      <label
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="resize-y appearance-none rounded-md border-0 px-3 py-2 text-sm text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
                        id="message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </fieldset>
                  <div className="flex gap-x-2">
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
                        className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
                        htmlFor="dpa-consent"
                      >
                        Declaration of consent for data processing
                      </label>
                      <p
                        className="mt-0.5 block text-sm text-[--color-text-muted]"
                        id="dpa-consent-description"
                      >
                        You agree that your data from the form will be collected
                        and processed to answer your request. You can revoke
                        your consent at any time for the future by e-mail to
                        info@company.com. Detailed information on the handling
                        of user data can be found in our data protection
                        declaration.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full flex flex-row-reverse gap-x-3">
                    <button
                      className="cursor-pointer rounded-md bg-[--color-primary] px-8 py-4 text-sm font-medium leading-4 text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[--color-highlight]"
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
