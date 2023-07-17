import './globals.css';
import { Inter, Familjen_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
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
  description: 'My personal portfolio',
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
    <html lang='en'>
      <body className={`${inter.className} ${grotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}

// TODO: seo
// TODO: analytics
// TODO: i18n
