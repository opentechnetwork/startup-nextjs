"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "99" : "1,010"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Steady growth with advanced SEO and responsive design."
          >
            <OfferList text="Advanced SEO strategies" status="active" />
            <OfferList text="Responsive website design (up to 10 pages)" status="active" />
            <OfferList text="Basic PPC management" status="active" />
            <OfferList text="Contact forms setup" status="active" />
            <OfferList text="Monthly analytics reports" status="active" />
            <OfferList text="E-commerce setup (up to 20 products)" status="active" />
            <OfferList text="Option to opt-in for Google Ads setup (2 campaign ads) with management, updates, and modifications upon request." status="active" />
            <OfferList text="Setup Fee: $150" status="active" />
            <OfferList text="Yearly Option: $1,010 (15% discount)" status="active" />
            <OfferList text="Quarterly Payment Plan: Available upon request" status="active" />



          </PricingBox>
          <PricingBox
            packageName="Professional"
            price={isMonthly ? "299" : "2,153"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Elevate your strategy with comprehensive SEO and social media."
          >
            <OfferList text="Comprehensive SEO" status="active" />
            <OfferList text="Social media management" status="active" />
            <OfferList text="Custom web design (up to 15 pages)" status="active" />
            <OfferList text="SEM management and setup" status="active" />
            <OfferList text="Monthly customer and analytics reports" status="active" />
            <OfferList text="E-commerce setup (up to 75 products)" status="active" />
            <OfferList text="Google Ads setup (3 campaign ads) with management, updates, and modifications upon request" status="active" />
            <OfferList text="Setup Fee: $200" status="active" />
            <OfferList text="Yearly Option: $2,153 (40% discount)" status="active" />
            <OfferList text="Quarterly Payment Plan: Available upon request" status="active" />



            {/* <OfferList text="Free Lifetime Updates" status="inactive" /> the status either displays a checkmark of X related to what is offered for the package.*/}
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "499" : "2,994"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Maximize impact with full-service SEO, PPC, and development"
          >
            <OfferList text="Full-service SEO and PPC" status="active" />
            <OfferList text="Enhanced social media management" status="active" />
            <OfferList text="Custom web development (up to 20 pages)" status="active" />
            <OfferList text="Monthly backups and maintenance" status="active" />
            <OfferList text="Graphic design and stock images" status="active" />
            <OfferList text="E-commerce setup (up to 200 products)" status="active" />
            <OfferList text="Google Ads setup (up to 5 campaign ads) with management, updates, and modifications upon request" status="active" />
            <OfferList text="Setup Fee: $300" status="active" />
            <OfferList text="Yearly Option: $2,994 (50% discount)" status="active" />
            <OfferList text="Quarterly Payment Plan: Available upon request" status="active" />


          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
