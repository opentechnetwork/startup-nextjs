"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Loading from "@/components/loading"; // Ensure correct path
import { Inter } from "next/font/google";
import "../styles/index.css";
import "../styles/interfont.css";
import "../styles/loading.css";
import "../styles/googlefonts.css"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exclude Header and Footer for isolated routes
  const isIsolatedRoute = pathname === "/access-denied";

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinish = () => {
    setIsLoading(false); // Hide loading screen after completion
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>
          Open Tech Innovations | Expert Web Design, SEO, and Digital Solutions
        </title>
        <meta />
        <meta />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YHXHN62KB1"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"

          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YHXHN62KB1');
            `,
          }}
        ></Script>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {!isIsolatedRoute && <Header />}
          {isLoading && <Loading onFinish={handleLoadingFinish} />}
          {!isLoading && children}
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
