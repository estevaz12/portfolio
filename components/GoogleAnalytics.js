'use client';

import Script from 'next/script';

/**
 * Render Google Analytics script and configuration.
 * @param {string} GA_TRACKING_ID - The Google Analytics tracking ID.
 * @returns {JSX.Element|null} - The rendered Google Analytics script and configuration.
 */
export default function GoogleAnalytics({ GA_TRACKING_ID }) {
  // If GA_TRACKING_ID is not provided, return null.
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Include the Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy='afterInteractive'
      />
      {/* Configure gTag */}
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}
