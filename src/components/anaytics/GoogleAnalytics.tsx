"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GoogleAnalytics = () => {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    // Conditionally load analytics after user interaction or a delay
    const handleUserInteraction = () => {
      setShouldLoadAnalytics(true);
    };

    // Listen for user interactions (click or scroll)
    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });

    // Clean up listeners
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return (
    shouldLoadAnalytics && (
      <>
        {/* Load Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YHXHN62KB1"
        />
        {/* Initialize Google Analytics */}
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
        />
      </>
    )
  );
};

export default GoogleAnalytics;
