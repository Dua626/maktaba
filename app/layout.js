import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

export const metadata = {
  title: 'Maktaba-e-Iqra | مکتبہ اقرا',
  description: 'Comprehensive information, facilities and services related to the Iqra education system. Quality books and course packs for Pakistani students.',
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
  },
  openGraph: {
    title: 'Maktaba-e-Iqra | مکتبہ اقرا',
    description: 'Quality books and complete course packs for Pakistani students following the Iqra curriculum.',
    images: [{ url: '/images/logo.png' }],
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&family=Scheherazade+New:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
