"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import GoogleAnalytics from "@components/anaytics/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import ServiceWorker from "@components/ServiceWorker";
import  Testimonials from "@components/Testimonials";
import "../styles/index.css";
import "../styles/googlefonts.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>
          Open Tech Innovations | Expert Web Design, SEO, and Digital Solutions
        </title>
        <meta />
        <GoogleAnalytics />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        <Providers>
          <Header />
          <ServiceWorker /> {/* Register Service Worker */}
          {children}
          <Testimonials />
          <SpeedInsights />
          <Analytics />
          <Footer />
          <CookieConsentBanner />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import React from "react";

