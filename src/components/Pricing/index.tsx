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
          {/* Starter Tier */}
          <PricingBox
            packageName="Starter"
            price={isMonthly ? "49" : "490"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Fast-launch websites with essential SEO and Shopify setup."
          >
            <OfferList text="Responsive website design (WordPress/ZipWP or React, up to 10 pages)" status="active" />
            <OfferList text="Basic SEO setup (Google Search Console integration)" status="active" />
            <OfferList text="Sentra AI content support (basic helper)" status="active" />
            <OfferList text="Social media profile setup (Facebook, Instagram, Google Business)" status="active" />
            <OfferList text="Ticketing system (Freshdesk/Zoho)" status="active" />
            <OfferList text="Client portal access (SuiteDash/Clinked)" status="active" />
            <OfferList text="Monthly maintenance updates" status="active" />
            <OfferList text="Shopify store setup (up to 20 products)" status="active" />
            <OfferList text="Shopify theme installation + payment gateway setup" status="active" />
            <OfferList text="Mouseflow heatmap tracking" status="inactive" />
            <OfferList text="Ad campaign management (Meta/Google Ads)" status="inactive" />
            <OfferList text="Advanced Shopify integrations (CRM, ERP)" status="inactive" />
            <OfferList text="Setup Fee: $49" status="active" />
            <OfferList text="Yearly Option: $490 (save 15%)" status="active" />
            <OfferList text="Quarterly Payment Plan: Available upon request" status="active" />
          </PricingBox>

          {/* Growth Tier */}
          <PricingBox
            packageName="Growth"
            price={isMonthly ? "149" : "1450"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="AI-powered content, advanced SEO, Shopify optimization, and campaign management."
          >
            <OfferList text="Responsive website design (React/Next.js or WordPress, up to 20 pages)" status="active" />
            <OfferList text="Advanced SEO audits + Google Search Console integration" status="active" />
            <OfferList text="Sentra AI content writer (blogs, landing pages, ads)" status="active" />
            <OfferList text="Social media profile management + content refresh" status="active" />
            <OfferList text="Ad campaign management (Meta + Google Ads)" status="active" />
            <OfferList text="Mouseflow analytics (heatmaps, funnels, session recordings)" status="active" />
            <OfferList text="Monthly analytics reports (Google Analytics, Merchant Center)" status="active" />
            <OfferList text="Priority support via ticketing system" status="active" />
            <OfferList text="Client portal with project dashboard" status="active" />
            <OfferList text="E-commerce setup (up to 50 products)" status="active" />
            <OfferList text="Shopify store build (up to 50 products)" status="active" />
            <OfferList text="Sentra AI product descriptions + ad copy" status="active" />
            <OfferList text="Shopify catalog integration with Meta/Google Ads" status="active" />
            <OfferList text="Setup Fee: $199" status="active" />
            <OfferList text="Yearly Option: $1,450 (save 15%)" status="active" />
            <OfferList text="Quarterly Payment Plan: Available upon request" status="active" />
          </PricingBox>

          {/* Agency Pro Tier */}
          <PricingBox
            packageName="Agency Pro"
            price={isMonthly ? "499" : "4999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Enterprise-grade builds, Shopify enterprise solutions, white-label branding, and strategic consulting."
          >
            <OfferList text="Enterprise website design (React/Next.js, unlimited pages)" status="active" />
            <OfferList text="Full SEO strategy + accessibility audits" status="active" />
            <OfferList text="Sentra AI advanced automation (multi-channel campaigns)" status="active" />
            <OfferList text="Social media ad campaigns (Meta, Google Ads, LinkedIn)" status="active" />
            <OfferList text="Mouseflow full suite (heatmaps, funnels, session recordings)" status="active" />
            <OfferList text="Google Merchant Center + e-commerce integration" status="active" />
            <OfferList text="Custom API integrations + CRM automation" status="active" />
            <OfferList text="White-label branding + client portal customization" status="active" />
            <OfferList text="Unlimited collaborators" status="active" />
            <OfferList text="Quarterly strategy sessions" status="active" />
            <OfferList text="Dedicated account manager" status="active" />
            <OfferList text="Shopify enterprise build (unlimited products + custom theme development)" status="active" />
            <OfferList text="Advanced Shopify integrations (CRM, ERP, inventory systems)" status="active" />
            <OfferList text="Sentra AI automation for Shopify campaigns (email, ads, social)" status="active" />
            <OfferList text="Setup Fee: $399" status="active" />
            <OfferList text="Yearly Option: $4,999 (save 15%)" status="active" />
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
