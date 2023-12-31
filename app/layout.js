import './styles/globals.css';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import Background from '@/components/Background';
import { jsonLd } from '@/lib/jsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import TrackPageViews from '@/components/TrackPageViews';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const grotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--grotesk' });

export const metadata = {
  metadataBase: new URL('https://estebanvc.vercel.app'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     en: '/en',
  //     es: '/es',
  //   },
  // },
  title: `@estevaz12 | Full-stack Developer - Looking for work`,
  description: `Welcome to my portfolio! I'm mostly a front-end developer with some back-end, databases, and data science experience. Here, you'll find a collection of my work and skills as well as info about me.  Take a look around and get to know me better. Thank you for visiting!`,
  // openGraph: {
  //   title: '@estevaz12 | Full-stack Developer - Looking for work',
  //   description: t('description'),
  //   url: 'https://estebanvc.vercel.app/',
  //   siteName: '@estevaz12 | Full-stack Developer - Looking for work',
  //   images: '/api/og',
  //   type: 'website',
  // },
  themeColor: '#121b21',
  robots: {
    googleBot: {
      nositelinkssearchbox: true,
    },
  },
  verification: {
    google: '0BgFLHPvDOLpz-unKUCKkfkkAUZUfZtuOKYO_r98EFs',
  },
};

/**
 * This is the RootLayout component.
 * It wraps the entire page layout and provides common features such as Google Analytics tracking.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {ReactNode} The rendered component.
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'
      className={`${inter.variable} ${grotesk.variable} scroll-smooth`}
    >
      <body>
        {/* Google Analytics tracking */}
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />

        {/* Track page views */}
        <TrackPageViews
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />

        {/* Background */}
        <Background />

        {/* Render the child components */}
        {children}

        {/* JSON-LD script */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

// for later
// TODO: add bio images
// TODO: fade out animation with FramerMotion
// TODO: loading skeleton
// TODO: clicking skill to see projects
// TODO: light theme
// TODO: i18n?
// TODO: images in posts
// TODO: animations
// TODO: dynamic og images
