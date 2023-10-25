'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Function to track page views using Google Analytics.
 *
 * @param {string} GA_TRACKING_ID - The Google Analytics tracking ID.
 */
export default function TrackPageViews({ GA_TRACKING_ID }) {
  const pathname = usePathname();

  useEffect(() => {
    // Use the `window.gtag` function to send a page view event to Google Analytics.
    window.gtag('config', GA_TRACKING_ID, {
      page_path: pathname,
    });
  }, [pathname, GA_TRACKING_ID]);

  return null;
}
