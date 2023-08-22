import './styles/globals.css';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import Background from '@/components/Background';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const grotesk = Familjen_Grotesk({ subsets: ['latin'], variable: '--grotesk' });

export const metadata = {
  metadataBase: new URL('https://portfolio-estevaz12.vercel.app/'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     en: '/en',
  //     es: '/es',
  //   },
  // },
  title: `@estevaz12's Portfolio`,
  description: `@estevaz12's personal portfolio`,
  // openGraph: {
  //   title: t('title'),
  //   description: t('description'),
  //   url: 'https://aquamanps.vercel.app',
  //   siteName: 'Aquaman Pool Services',
  //   images: '/api/og',
  //   type: 'website',
  // },
  themeColor: '#121b21',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'
      className={`${inter.variable} ${grotesk.variable} scroll-smooth`}
    >
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}

// MVP
// TODO: animated png not working
// TODO: bare SEO
// TODO: basic analytics
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
