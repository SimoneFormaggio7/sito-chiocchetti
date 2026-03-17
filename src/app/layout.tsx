import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.architettochiocchetti.it"),
  title: {
    default: "Studio Chiocchetti Architettura | Crescentino, Vercelli",
    template: "%s | Studio Chiocchetti Architettura",
  },
  description:
    "Studio di architettura a Crescentino (VC). Dal 1989 progettazione architettonica, urbanistica, ristrutturazioni e direzione lavori per enti pubblici e privati.",
  keywords: [
    "architetto",
    "studio architettura",
    "Crescentino",
    "Vercelli",
    "progettazione",
    "ristrutturazione",
    "urbanistica",
    "direzione lavori",
    "Chiocchetti",
  ],
  authors: [{ name: "Studio Chiocchetti Architettura" }],
  creator: "Studio Chiocchetti Architettura",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.architettochiocchetti.it",
    siteName: "Studio Chiocchetti Architettura",
    title: "Studio Chiocchetti Architettura | Crescentino, Vercelli",
    description:
      "Studio di architettura a Crescentino (VC). Dal 1989 progettazione architettonica, urbanistica, ristrutturazioni e direzione lavori.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Chiocchetti Architettura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Chiocchetti Architettura",
    description:
      "Studio di architettura a Crescentino (VC). Dal 1989 progettazione architettonica e urbanistica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  name: "Studio Chiocchetti Architettura",
  image: "https://www.architettochiocchetti.it/images/logo.png",
  "@id": "https://www.architettochiocchetti.it",
  url: "https://www.architettochiocchetti.it",
  telephone: "+39 0161 841850",
  email: "studio@architettochiocchetti.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corso Roma 67",
    addressLocality: "Crescentino",
    postalCode: "13044",
    addressRegion: "VC",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.1831,
    longitude: 8.0847,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  foundingDate: "1989",
  founder: {
    "@type": "Person",
    name: "Maurizio Chiocchetti",
    jobTitle: "Architetto",
  },
  sameAs: [],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.1831,
      longitude: 8.0847,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi di Architettura",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Progettazione Architettonica",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Progettazione Strutturale",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ristrutturazioni",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direzione Lavori",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Urbanistica",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        {children}
      </body>
    </html>
  );
}
