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
      className={`${inter.variable} ${grotesk.variable}`}
    >
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}

// TODO: seo
// TODO: analytics
// TODO: i18n
