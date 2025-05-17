import "./globals.css";
import I18nProvider from '../components/I18nProvider';

export const metadata = {
  metadataBase: new URL('https://elite-cargo.net'),
  title: {
    default: "Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest",
    template: "%s | Elite Cargo"
  },
  description: "Elite Cargo, société basée en Guinée, experte en fret aérien, maritime et terrestre, logistique, douane, déménagement international, import/export et transport en Afrique de l'Ouest.",
  keywords: "Elite Cargo, Guinée, Conakry, Afrique de l'Ouest, fret aérien, fret maritime, fret terrestre, logistique, transport, douane, déménagement international, import, export, transit, entreposage, livraison, partenaires, Air France, Ethiopian Airlines, Royal Air Maroc, Brussels Airlines, Asky, Bénin, Mali, Sénégal, Côte d'Ivoire, shipping, customs, moving, warehousing, supply chain, cargo, express, express shipping, international moving, Guinea logistics, Guinea freight, Africa logistics, Africa freight",
  authors: [{ name: 'Elite Cargo' }],
  creator: 'Elite Cargo',
  publisher: 'Elite Cargo',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon/android-chrome-192x192.svg',
    shortcut: '/favicon/android-chrome-192x192.svg',
    apple: '/favicon/android-chrome-192x192.svg',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.svg',
      }
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#007d6f',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://elite-cargo.net/',
    siteName: 'Elite Cargo',
    title: "Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest",
    description: "Société basée à Conakry, Guinée, spécialisée dans le fret, la logistique, la douane et le déménagement international en Afrique de l'Ouest.",
    images: [
      {
        url: '/images/elite.svg',
        width: 800,
        height: 600,
        alt: 'Elite Cargo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest",
    description: "Société basée à Conakry, Guinée, spécialisée dans le fret, la logistique, la douane et le déménagement international en Afrique de l'Ouest.",
    images: ['/images/elite.svg'],
    creator: '@elitecargo',
  },
  alternates: {
    canonical: 'https://elite-cargo.net/',
    languages: {
      'fr': 'https://elite-cargo.net/fr',
      'en': 'https://elite-cargo.net/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-verification-yandex',
    bing: 'votre-code-verification-bing',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}