import './styles/globals.css';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import Background from '@/components/Background';
import { jsonLd } from '@/lib/jsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import TrackPageViews from '@/components/TrackPageViews';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const grotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--grotesk' });

export const metadata = {
  metadataBase: new URL('https://portfolio-estevaz12.vercel.app'),
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
  //   url: 'https://portfolio-estevaz12.vercel.app/',
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'
      className={`${inter.variable} ${grotesk.variable} scroll-smooth`}
    >
      <body>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />
        <TrackPageViews
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />

        <Background />
        {children}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

// MVP
// TODO: basic analytics (verify)
// TODO: add content to posts
// TODO: college experience as well

// for later
// TODO: fade out animation with FramerMotion
// TODO: search by skill
// TODO: loading skeleton
// TODO: clicking skill to see projects
// TODO: add courses
// TODO: light theme
// TODO: seo
// TODO: analytics
// TODO: i18n?
// TODO: images in posts
// TODO: animations
// TODO: dynamic og images
