import Script from "next/script";
import { useEffect, useState } from "react";

const GoogleAnalytics = () => {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    // Load Google Analytics after interaction or condition
    setShouldLoadAnalytics(true);
  }, []);

  return (
    shouldLoadAnalytics && (
      <>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YHXHN62KB1"
        />
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
