"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import "../styles/interfont.css";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "next/script";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exclude navigation and footer for specific routes
  const isIsolatedRoute = pathname === '/access-denied';

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>
          Open Tech Innovations | Expert Web Design, SEO, and Digital Solutions
        </title>
        <meta />
        <meta />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YHXHN62KB1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YHXHN62KB1');
            `,
          }}
        ></script>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {!isIsolatedRoute && <Header />}
          {children}
          <SpeedInsights />
          <Analytics />
          {!isIsolatedRoute && <Footer />}
          <CookieConsentBanner />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import React from "react";
