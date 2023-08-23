'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TrackPageViews({ GA_TRACKING_ID }) {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: pathname,
    });
  }, [pathname, GA_TRACKING_ID]);

  return null;
}
